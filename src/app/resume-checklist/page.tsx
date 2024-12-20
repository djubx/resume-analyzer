"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Cookies from 'js-cookie';
import { FaCheckCircle, FaClipboardCheck, FaUserGraduate, FaTrophy, FaSearch, FaBullseye } from "react-icons/fa";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  Checkbox,
  Paper,
  useTheme,
  alpha,
} from '@mui/material';

interface ChecklistItem {
  text: string;
  checked: boolean;
  icon: JSX.Element;
}

const generalChecklistItems: ChecklistItem[] = [
  { text: "Include contact information", checked: false, icon: <FaCheckCircle /> },
  { text: "Write a compelling summary or objective", checked: false, icon: <FaBullseye /> },
  { text: "List relevant work experience", checked: false, icon: <FaClipboardCheck /> },
  { text: "Highlight key skills", checked: false, icon: <FaCheckCircle /> },
  { text: "Include education details", checked: false, icon: <FaUserGraduate /> },
  { text: "Add any certifications or awards", checked: false, icon: <FaTrophy /> },
  { text: "Proofread for errors", checked: false, icon: <FaSearch /> },
  { text: "Tailor resume to job description", checked: false, icon: <FaClipboardCheck /> },
  { text: "Use action verbs", checked: false, icon: <FaCheckCircle /> },
  { text: "Quantify achievements where possible", checked: false, icon: <FaCheckCircle /> },
];

const iconColors = {
  contact: 'primary.main',
  summary: 'success.main',
  experience: 'warning.main',
  skills: 'secondary.main',
  education: 'error.main',
  certifications: 'warning.dark',
  proofread: 'info.main',
  tailor: 'success.light',
  verbs: 'primary.light',
  achievements: 'secondary.light',
};

export default function ResumeChecklist() {
  const [generalChecklist, setGeneralChecklist] = useState<ChecklistItem[]>(generalChecklistItems);
  const [personalizedFeedback, setPersonalizedFeedback] = useState<ChecklistItem[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const savedGeneralChecklist = Cookies.get('resumeChecklist');
    if (savedGeneralChecklist) {
      setGeneralChecklist(JSON.parse(savedGeneralChecklist));
    }

    const savedFeedback = Cookies.get('personalizedFeedback');
    if (savedFeedback) {
      setPersonalizedFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const handleCheckboxChange = (index: number, isPersonalized: boolean) => {
    if (isPersonalized) {
      const newPersonalizedFeedback = [...personalizedFeedback];
      newPersonalizedFeedback[index].checked = !newPersonalizedFeedback[index].checked;
      setPersonalizedFeedback(newPersonalizedFeedback);
      Cookies.set('personalizedFeedback', JSON.stringify(newPersonalizedFeedback), { expires: 30 });
    } else {
      const newGeneralChecklist = [...generalChecklist];
      newGeneralChecklist[index].checked = !newGeneralChecklist[index].checked;
      setGeneralChecklist(newGeneralChecklist);
      Cookies.set('resumeChecklist', JSON.stringify(newGeneralChecklist), { expires: 30 });
    }
  };

  const renderChecklist = (items: ChecklistItem[], isPersonalized: boolean) => (
    <List sx={{ '& > *': { mb: 2 } }}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Paper
            elevation={2}
            sx={{
              bgcolor: 'background.paper',
              '&:hover': {
                boxShadow: theme.shadows[4],
                bgcolor: alpha(theme.palette.primary.main, 0.05),
              },
              transition: 'all 0.3s',
            }}
          >
            <ListItem
              sx={{
                p: 2,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Checkbox
                checked={item.checked}
                onChange={() => handleCheckboxChange(index, isPersonalized)}
                color="primary"
                sx={{ mr: 2 }}
              />
              <Box 
                component="span" 
                sx={{ 
                  mr: 2,
                  color: Object.values(iconColors)[index % Object.values(iconColors).length],
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                {item.text}
              </Typography>
            </ListItem>
          </Paper>
        </motion.div>
      ))}
    </List>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <Navbar />
      <Container 
        component="main" 
        sx={{ 
          flexGrow: 1,
          py: 6,
          maxWidth: 'lg',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 4,
              color: 'primary.main',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Resume Checklist
          </Typography>
          
          {personalizedFeedback.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: theme.spacing(6) }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3,
                  color: 'warning.main',
                  fontWeight: 'semibold',
                }}
              >
                Personalized Feedback on Your Resume
              </Typography>
              {renderChecklist(personalizedFeedback, true)}
              <Typography 
                variant="h4" 
                sx={{ 
                  mt: 3,
                  mb: 2,
                  color: 'success.main',
                  fontWeight: 'semibold',
                }}
              >
                Let's fix them one by one!
              </Typography>
            </motion.div>
          )}

          <Typography 
            variant="h3" 
            sx={{ 
              mb: 3,
              color: 'primary.main',
              fontWeight: 'semibold',
            }}
          >
            General Resume Checklist
          </Typography>
          {renderChecklist(generalChecklist, false)}
        </motion.div>
      </Container>
    </Box>
  );
}