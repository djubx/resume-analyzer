import { FaExclamationTriangle, FaCheckCircle, FaStar, FaClipboardList } from "react-icons/fa";
import Link from 'next/link';
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  useTheme,
} from '@mui/material';

interface AnalysisResult {
  issues?: Array<{
    type: string;
    description: string;
    suggestion: string;
  }>;
  strengths?: string[];
  overallScore?: number;
}

interface ResumeAnalysisProps {
  result: AnalysisResult;
}

export default function ResumeAnalysis({ result }: ResumeAnalysisProps) {
  const theme = useTheme();

  if (!result) {
    return <Typography color="text.secondary">No analysis result available.</Typography>;
  }

  return (
    <Box sx={{ width: '100%', color: 'text.primary' }}>
      <Typography variant="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 'bold' }}>
        Analysis Results
      </Typography>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ 
            mb: 2, 
            color: 'success.main',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <FaStar /> Strengths
          </Typography>
          {result.strengths && result.strengths.length > 0 ? (
            <List>
              {result.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem>
                    <ListItemText 
                      primary={strength}
                      sx={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          ) : (
            <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              No specific strengths identified.
            </Typography>
          )}
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ 
            mb: 2, 
            color: 'warning.main',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <FaExclamationTriangle /> Areas for Improvement
          </Typography>
          {result.issues && result.issues.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {result.issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                      <FaExclamationTriangle style={{ color: theme.palette.warning.main }} />
                      <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        {issue.type}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'error.main', mb: 1 }}>
                      {issue.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FaCheckCircle style={{ color: theme.palette.success.main }} />
                      <Typography variant="body1" sx={{ color: 'success.main' }}>
                        Suggestion: {issue.suggestion}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          ) : (
            <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              No specific areas for improvement identified.
            </Typography>
          )}
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Paper sx={{ p: 3, mb: 4, bgcolor: 'background.paper' }}>
          <Typography variant="h2" sx={{ mb: 1, color: 'primary.main' }}>
            Overall Score
          </Typography>
          <Typography variant="h1" sx={{ color: 'primary.main', mb: 2, fontWeight: 'bold' }}>
            {result.overallScore ?? 'N/A'}/100
          </Typography>
          <Button
            component={Link}
            href="/resume-checklist"
            startIcon={<FaClipboardList />}
            sx={{ color: 'primary.main', '&:hover': { color: 'primary.light' } }}
          >
            Go to Resume Checklist
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            Use the checklist to track your improvements. Once you've made changes, please reupload your resume for a fresh analysis.
          </Typography>
        </Paper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'success.main' }}>
            Next Steps
          </Typography>
          <List>
            {[
              'Review the areas for improvement and suggestions above.',
              'Use the Resume Checklist to track your progress.',
              'Make necessary changes to your resume.',
              'Reupload your improved resume for a new analysis.'
            ].map((step, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={step}
                  sx={{ color: 'text.secondary' }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </motion.div>
    </Box>
  );
}