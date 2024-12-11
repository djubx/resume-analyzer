import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PDF_TIMEOUT = 30000; // 30 seconds timeout

export const generatePDF = async (elementId: string, fileName: string) => {
    try {
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
                scale: 2, // Better quality
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });

            // Calculate PDF dimensions to match A4
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            
            // Create PDF of A4 size
            const pdf = new jsPDF('p', 'mm', 'a4');
            let heightLeft = imgHeight;
            let position = 0;
            let pageNumber = 1;

            // Add image to PDF, creating new pages if necessary
            while (heightLeft >= 0) {
                if (pageNumber > 1) {
                    pdf.addPage();
                }
                
                pdf.addImage(
                    canvas.toDataURL('image/jpeg', 1.0),
                    'JPEG',
                    0,
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