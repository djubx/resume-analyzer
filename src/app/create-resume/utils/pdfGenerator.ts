import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#ffffff',
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
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