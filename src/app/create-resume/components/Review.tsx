'use client';

import { ComponentType, useState, createElement } from 'react';
import { ResumeData } from '../types';
import { generatePDF, PDFConfig } from '../utils/pdfConverter';

interface ReviewProps {
  data: ResumeData;
  selectedTemplate: string;
  templates: Array<{
    id: string;
    name: string;
    description: string;
    component: ComponentType<{ data: ResumeData }>;
  }>;
  onTemplateSelect: (templateId: string) => void;
}

export default function Review({ data, selectedTemplate, templates, onTemplateSelect }: ReviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPdfSettings, setShowPdfSettings] = useState(false);
  const [pdfConfig, setPdfConfig] = useState<PDFConfig>({
    format: 'A4',
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    },
    scale: 1.0,
    landscape: false,
    printBackground: true,
    preferCSSPageSize: false,
    displayHeaderFooter: false
  });

  const handleDownload = async () => {
    setError(null);
    setIsGenerating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      await generatePDF(
        'resume-template',
        `${data.contactInformation.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
        pdfConfig
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to generate PDF');
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const PDFSettingsPanel = () => (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto"
         style={{ transform: showPdfSettings ? 'translateX(0)' : 'translateX(100%)' }}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">PDF Settings</h3>
          <button
            onClick={() => setShowPdfSettings(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Page Format</label>
            <select
              value={pdfConfig.format}
              onChange={(e) => setPdfConfig(prev => ({ ...prev, format: e.target.value as PDFConfig['format'] }))}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            >
              {['A4', 'A3', 'A5', 'Letter', 'Legal', 'Tabloid'].map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Scale (0.1 - 2.0)</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={pdfConfig.scale}
                onChange={(e) => setPdfConfig(prev => ({ ...prev, scale: parseFloat(e.target.value) }))}
                className="flex-1"
              />
              <span className="text-sm text-gray-600 w-12">{pdfConfig.scale.toFixed(1)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">Margins</label>
              <button
                onClick={() => setPdfConfig(prev => ({
                  ...prev,
                  margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
                }))}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Reset
              </button>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg space-y-3">
              {Object.entries(pdfConfig.margin).map(([side, value]) => (
                <div key={side} className="flex items-center gap-3">
                  <label className="text-sm text-gray-600 capitalize w-16">{side}</label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setPdfConfig(prev => ({
                      ...prev,
                      margin: {
                        ...prev.margin,
                        [side]: e.target.value
                      }
                    }))}
                    placeholder="20px"
                    className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm"
                  />
                </div>
              ))}
              <p className="text-xs text-gray-500 mt-2">
                Use px, cm, or in (e.g., 20px, 2cm, 1in)
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Options</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pdfConfig.landscape}
                  onChange={(e) => setPdfConfig(prev => ({ ...prev, landscape: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Landscape orientation</span>
              </label>
              
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pdfConfig.printBackground}
                  onChange={(e) => setPdfConfig(prev => ({ ...prev, printBackground: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Print background</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pdfConfig.preferCSSPageSize}
                  onChange={(e) => setPdfConfig(prev => ({ ...prev, preferCSSPageSize: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Prefer CSS page size</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pdfConfig.displayHeaderFooter}
                  onChange={(e) => setPdfConfig(prev => ({ ...prev, displayHeaderFooter: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Display header/footer</span>
              </label>
            </div>
          </div>

          {pdfConfig.displayHeaderFooter && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Header Template</label>
                <textarea
                  value={pdfConfig.headerTemplate || ''}
                  onChange={(e) => setPdfConfig(prev => ({ ...prev, headerTemplate: e.target.value }))}
                  placeholder="<div>Header HTML</div>"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Footer Template</label>
                <textarea
                  value={pdfConfig.footerTemplate || ''}
                  onChange={(e) => setPdfConfig(prev => ({ ...prev, footerTemplate: e.target.value }))}
                  placeholder="<div>Footer HTML</div>"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm h-20"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Page Ranges</label>
            <input
              type="text"
              value={pdfConfig.pageRanges || ''}
              onChange={(e) => setPdfConfig(prev => ({ ...prev, pageRanges: e.target.value }))}
              placeholder="e.g., 1-5, 8"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose Your Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => onTemplateSelect(template.id)}
            >
              <div className="h-40 bg-gray-100 rounded mb-4 overflow-hidden">
                <div className="transform scale-[0.2] origin-top-left">
                  {createElement(template.component, { data })}
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">{template.name}</h3>
              <p className="text-sm text-gray-600 text-center">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Preview & Download</h2>
        <div id="resume-template" className="bg-white rounded-lg shadow-lg">
          {templates.find(t => t.id === selectedTemplate)?.component && 
            createElement(templates.find(t => t.id === selectedTemplate)!.component, { data })}
        </div>
        
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            <p className="font-medium">Error generating PDF</p>
            <p className="text-sm mt-1">{error}</p>
            <p className="text-sm mt-2">
              Please try again. If the problem persists, try using a different browser or clearing your cache.
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className={`
                px-6 py-3 rounded-lg font-medium
                transition-all duration-300
                flex items-center gap-2
                ${isGenerating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5'
                }
                text-white
              `}
            >
              {isGenerating ? (
                <>
                  <svg 
                    className="animate-spin h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download PDF
                </>
              )}
            </button>

            <button
              onClick={() => setShowPdfSettings(true)}
              className="px-4 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              PDF Settings
            </button>
          </div>
          
          {isGenerating && (
            <p className="text-sm text-gray-600">
              This may take a few moments. Please don't close this window.
            </p>
          )}
        </div>
      </div>

      <PDFSettingsPanel />
    </div>
  );
} 