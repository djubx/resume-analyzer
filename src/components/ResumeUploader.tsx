import { useState } from "react";
import { FaUpload, FaCheckCircle } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import extractTextFromPDF from "pdf-parser-client-side";
import { motion, AnimatePresence } from "framer-motion";
import md5 from "md5";
import {
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
  useTheme,
  alpha,
} from '@mui/material';

interface ResumeUploaderProps {
  onAnalysisComplete: (result: any) => void;
  onError: (error: string) => void;
  onNewUpload: () => void;
}

export default function ResumeUploader({ onAnalysisComplete, onError, onNewUpload }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const theme = useTheme();

  const calculateFileHash = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          const hash = md5(result);
          resolve(hash);
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      reader.onerror = (e) => reject(e);
      reader.readAsBinaryString(file);
    });
  };

  const checkExistingAnalysis = async (fileHash: string) => {
    const query = `*[_type == "resume" && fileHash == $fileHash] | order(_createdAt desc)[0]`;
    const params = { fileHash };
    const existingDoc = await client.fetch(query, params);
    return existingDoc;
  };

  const uploadToSanity = async (file: File, pdfText: string, analysisResult: any, fileHash: string) => {
    setStatus("Fetching results...");
    try {
      const fileAsset = await client.assets.upload('file', file);

      const doc = await client.create({
        _type: 'resume',
        title: file.name,
        file: {
          _type: 'file',
          asset: {
            _type: "reference",
            _ref: fileAsset._id
          }
        },
        formattedFileSize: formatFileSize(file.size),
        uploadedAt: new Date().toISOString(),
        extractedText: pdfText,
        analysisResult: analysisResult,
        fileHash: fileHash,
      });

      console.log('Resume uploaded to Sanity:', doc);
      setStatus(`Resume analysis successful`);
      return doc;
    } catch (error: any) {
      console.error('Error uploading to Sanity:', error);
      throw new Error(error.message.includes("Insufficient permissions")
        ? "Unable to upload resume due to permission issues. Please contact support."
        : "Error uploading resume. Please try again.");
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onNewUpload();
      console.log("Resume file:", selectedFile, "Size:", formatFileSize(selectedFile.size));
      await handleFileProcessing(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      onNewUpload();
      console.log("Resume file (dropped):", droppedFile, "Size:", formatFileSize(droppedFile.size));
      await handleFileProcessing(droppedFile);
    }
  };

  const handleFileProcessing = async (file: File, forceReanalyze: boolean = false) => {
    setIsProcessing(true);
    setStatus("Calculating file hash...");
    try {
      const fileHash = await calculateFileHash(file);
      
      if (!forceReanalyze) {
        const existingAnalysis = await checkExistingAnalysis(fileHash);
        if (existingAnalysis) {
          setStatus("Fix the suggestions earlier and reupload...");
          setShowAnimation(true);
          setTimeout(() => {
            setShowAnimation(false);
            onAnalysisComplete(existingAnalysis.analysisResult);
          }, 1000);
          return;
        }
      }

      setStatus("Extracting text from PDF...");
      const pdfText = await extractTextFromPDF(file, "clean");

      setStatus("Analyzing resume...");
      const analysisResult = await analyzeResume(pdfText ?? "");

      setStatus("Uploading resume...");
      await uploadToSanity(file, pdfText ?? "", analysisResult, fileHash);
      console.log("Analysis result:", analysisResult, fileHash);

      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        onAnalysisComplete(analysisResult);
      }, 1000);
    } catch (error) {
      console.error('Error processing file:', error);
      onError(error instanceof Error ? error.message : "Error processing resume. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const analyzeResume = async (pdfText: string): Promise<any> => {
    try {
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeText: pdfText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error analyzing resume");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Box sx={{ mb: 4, position: 'relative' }}>
      <Box
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        <label htmlFor="dropzone-file">
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '16rem',
              border: `2px dashed ${theme.palette.primary.main}`,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
              cursor: 'pointer',
              '&:hover': {
                bgcolor: alpha(theme.palette.primary.main, 0.1),
              },
              transition: 'background-color 0.3s',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
              <FaUpload style={{ fontSize: '2.5rem', marginBottom: '0.75rem', color: theme.palette.primary.main }} />
              <Typography variant="body1" sx={{ mb: 1, color: 'primary.main' }}>
                <Box component="span" sx={{ fontWeight: 600 }}>Click to upload</Box> or drag and drop
              </Typography>
              <Typography variant="caption" sx={{ color: 'primary.main' }}>
                PDF (MAX. 5MB)
              </Typography>
            </Box>
          </Paper>
          <input
            id="dropzone-file"
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            style={{ display: 'none' }}
          />
        </label>
      </Box>

      {file && (
        <Typography variant="body2" sx={{ mt: 1, color: 'primary.main' }}>
          {file.name} ({formatFileSize(file.size)})
        </Typography>
      )}

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {status && (
            <Typography
              variant="body2"
              sx={{
                color: status.includes("Error") || status.includes("Unable")
                  ? 'error.main'
                  : 'success.main'
              }}
            >
              {status}
            </Typography>
          )}
          {isProcessing && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={20} color="primary" />
              <Typography variant="body2" sx={{ color: 'primary.main' }}>
                Processing resume...
              </Typography>
            </Box>
          )}
        </Box>
        {file && (
          <Button
            onClick={() => handleFileProcessing(file, true)}
            variant="contained"
            color="primary"
            disabled={isProcessing}
            sx={{ ml: 2 }}
          >
            Force Re-analyze
          </Button>
        )}
      </Box>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ color: theme.palette.success.main, fontSize: '3rem' }}
            >
              <FaCheckCircle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: 'bold',
                  color: 'success.main'
                }}
              >
                Analysis Complete!
              </Typography>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}