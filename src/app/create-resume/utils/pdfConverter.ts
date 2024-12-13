import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

export interface PDFConfig {
    format: 'A4' | 'A3' | 'A5' | 'Letter' | 'Legal' | 'Tabloid';
    margin: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    scale: number;
    landscape: boolean;
    printBackground: boolean;
    preferCSSPageSize: boolean;
    displayHeaderFooter: boolean;
    headerTemplate?: string;
    footerTemplate?: string;
    pageRanges?: string;
}

const defaultConfig: PDFConfig = {
    format: 'A4',
    printBackground: true,
    margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
    },
    scale: 1.0,
    landscape: false,
    preferCSSPageSize: false,
    displayHeaderFooter: false
};

export const generatePDF = async (elementId: string, fileName: string, config: Partial<PDFConfig> = {}) => {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error('Element not found');
        }

        // Get all stylesheet contents
        const stylesheets = await Promise.all(
            Array.from(document.styleSheets).map(async (sheet) => {
                try {
                    // For same-origin stylesheets, get the rules directly
                    if (sheet.cssRules) {
                        return Array.from(sheet.cssRules)
                            .map(rule => rule.cssText)
                            .join('\n');
                    }
                    // For cross-origin stylesheets, fetch the content
                    else if (sheet.href) {
                        const response = await fetch(sheet.href);
                        return await response.text();
                    }
                } catch (e) {
                    console.warn('Could not get stylesheet content:', e);
                    return '';
                }
                return '';
            })
        );

        // Create HTML document with all styles and content
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    ${stylesheets.join('\n')}
                </style>
            </head>
            <body class="bg-white">
                ${element.outerHTML}
            </body>
            </html>
        `;

        // Make the API call to convert HTML to PDF
        const response = await fetch('https://api.resumecheckers.com/convert-to-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                html,
                config: {
                    ...defaultConfig,
                    ...config
                }
            }),
        });

        if (!response.ok) {
            throw new Error(`PDF conversion failed: ${response.statusText}`);
        }

        // Convert the response to a blob
        const pdfBlob = await response.blob();

        // Create a download link and trigger the download
        const url = window.URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('PDF Generation failed:', error);
        throw new Error(error instanceof Error ? error.message : 'Failed to generate PDF');
    }
};

export const generateAllPDFs = async (elementId: string, data: any, templates: any[], config: Partial<PDFConfig> = {}) => {
    try {
        // Get all stylesheet contents once to reuse
        const stylesheets = await Promise.all(
            Array.from(document.styleSheets).map(async (sheet) => {
                try {
                    if (sheet.cssRules) {
                        return Array.from(sheet.cssRules)
                            .map(rule => rule.cssText)
                            .join('\n');
                    } else if (sheet.href) {
                        const response = await fetch(sheet.href);
                        return await response.text();
                    }
                } catch (e) {
                    console.warn('Could not get stylesheet content:', e);
                    return '';
                }
                return '';
            })
        );

        const styleContent = stylesheets.join('\n');

        // Generate PDFs in parallel
        const results = await Promise.allSettled(templates.map(async (template) => {
            try {
                // Create a temporary container for each template
                const tempContainer = document.createElement('div');
                tempContainer.id = `temp-${template.id}`;
                document.body.appendChild(tempContainer);

                // Render the template
                const templateElement = createElement(template.component, { data });
                const root = createRoot(tempContainer);
                root.render(templateElement);

                // Wait a bit for the render to complete
                await new Promise(resolve => setTimeout(resolve, 100));

                // Generate HTML for this template
                const html = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <style>${styleContent}</style>
                    </head>
                    <body class="bg-white">
                        ${tempContainer.innerHTML}
                    </body>
                    </html>
                `;

                // Make the API call
                const response = await fetch('https://api.resumecheckers.com/convert-to-pdf', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        html,
                        config: {
                            ...defaultConfig,
                            ...config
                        }
                    }),
                });

                if (!response.ok) {
                    throw new Error(`PDF conversion failed for ${template.name}: ${response.statusText}`);
                }

                const pdfBlob = await response.blob();
                const fileName = `${data.contactInformation.fullName.toLowerCase().replace(/\s+/g, '-')}-${template.id}-resume.pdf`;

                // Create download link
                const url = window.URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);

                // Cleanup
                root.unmount();
                document.body.removeChild(tempContainer);

                return {
                    templateId: template.id,
                    templateName: template.name,
                    success: true
                };
            } catch (error) {
                return {
                    templateId: template.id,
                    templateName: template.name,
                    success: false,
                    error: error instanceof Error ? error.message : 'Unknown error'
                };
            }
        }));

        return results;
    } catch (error) {
        console.error('Parallel PDF Generation failed:', error);
        throw new Error(error instanceof Error ? error.message : 'Failed to generate PDFs');
    }
}; 