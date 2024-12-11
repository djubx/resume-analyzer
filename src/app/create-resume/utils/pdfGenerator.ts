import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PDF_TIMEOUT = 30000; // 30 seconds timeout

export interface PDFOptions {
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    quality: number;
    scale: number;
    pageSize: 'a4' | 'letter' | 'legal';
    orientation: 'portrait' | 'landscape';
}

const defaultPDFOptions: PDFOptions = {
    margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    quality: 1.0,
    scale: 2,
    pageSize: 'a4',
    orientation: 'portrait'
};

export const generatePDF = async (elementId: string, fileName: string, options: Partial<PDFOptions> = {}) => {
    try {
        const finalOptions = { ...defaultPDFOptions, ...options };
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error('Element not found');
        }

        // Create a promise that rejects after timeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('PDF generation timed out')), PDF_TIMEOUT);
        });

        // Create the actual PDF generation promise
        const generatePromise = (async () => {
            // Wait for all images to load
            await Promise.all(
                Array.from(element.getElementsByTagName('img'))
                    .map(img => img.complete ? Promise.resolve() : new Promise(resolve => img.onload = resolve))
            );

            // Create canvas with better quality
            const canvas = await html2canvas(element, {
                scale: finalOptions.scale,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });

            // Calculate PDF dimensions based on page size and orientation
            const pageDimensions = {
                a4: { width: 210, height: 297 },
                letter: { width: 215.9, height: 279.4 },
                legal: { width: 215.9, height: 355.6 }
            }[finalOptions.pageSize];

            const imgWidth = finalOptions.orientation === 'portrait' 
                ? pageDimensions.width - (finalOptions.margin.left + finalOptions.margin.right)
                : pageDimensions.height - (finalOptions.margin.left + finalOptions.margin.right);
            
            const pageHeight = finalOptions.orientation === 'portrait'
                ? pageDimensions.height - (finalOptions.margin.top + finalOptions.margin.bottom)
                : pageDimensions.width - (finalOptions.margin.top + finalOptions.margin.bottom);

            const imgHeight = canvas.height * imgWidth / canvas.width;
            
            // Create PDF with specified size and orientation
            const pdf = new jsPDF(finalOptions.orientation, 'mm', finalOptions.pageSize);
            let heightLeft = imgHeight;
            let position = finalOptions.margin.top;
            let pageNumber = 1;

            // Add image to PDF, creating new pages if necessary
            while (heightLeft >= 0) {
                if (pageNumber > 1) {
                    pdf.addPage();
                }
                
                pdf.addImage(
                    canvas.toDataURL('image/jpeg', finalOptions.quality),
                    'JPEG',
                    finalOptions.margin.left,
                    position,
                    imgWidth,
                    imgHeight,
                    '',
                    'FAST'
                );
                
                heightLeft -= pageHeight;
                position -= pageHeight;
                pageNumber++;
            }

            pdf.save(fileName);
        })();

        // Race between timeout and generation
        await Promise.race([generatePromise, timeoutPromise]);
        return true;
    } catch (error) {
        console.error('PDF Generation failed:', error);
        throw new Error(error instanceof Error ? error.message : 'Failed to generate PDF');
    }
}; 