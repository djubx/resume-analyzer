import { NextRequest, NextResponse } from 'next/server';
import pdf from 'pdf-parse';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'File must be a PDF' }, { status: 400 });
    }

    try {
      // Convert File to Buffer
      const buffer = Buffer.from(await file.arrayBuffer());

      // Parse PDF with options for better text extraction
      const data = await pdf(buffer);

      // Validate extracted text
      if (!data.text || data.text.trim().length === 0) {
        return NextResponse.json({ error: 'No text could be extracted from the PDF' }, { status: 400 });
      }

      // Clean up extracted text
      const cleanedText = data.text
        .replace(/\r\n/g, '\n') // Normalize line endings
        .replace(/\n\s*\n/g, '\n') // Remove multiple empty lines
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim();

      return NextResponse.json({ 
        text: cleanedText,
        pages: data.numpages 
      });
    } catch (pdfError) {
      console.error('PDF parsing error:', pdfError);
      return NextResponse.json({
        error: 'Failed to parse PDF file',
        details: pdfError instanceof Error ? pdfError.message : 'Unknown PDF parsing error'
      }, { status: 422 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({
      error: 'Server error while processing PDF',
      details: error instanceof Error ? error.message : 'Unknown server error'
    }, { status: 500 });
  }
} 