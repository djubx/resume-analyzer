"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Cookies from 'js-cookie';
import { FaCheckCircle, FaClipboardCheck, FaUserGraduate, FaTrophy, FaSearch, FaBullseye, FaSync } from "react-icons/fa";
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
  Button,
} from '@mui/material';
import Link from 'next/link';

interface ChecklistItem {
  text: string;
  checked: boolean;
  icon: JSX.Element;
}

interface StoredChecklistItem {
  text: string;
  checked: boolean;
  iconType: string;
}

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case 'FaCheckCircle':
      return <FaCheckCircle />;
    case 'FaBullseye':
      return <FaBullseye />;
    case 'FaClipboardCheck':
      return <FaClipboardCheck />;
    case 'FaUserGraduate':
      return <FaUserGraduate />;
    case 'FaTrophy':
      return <FaTrophy />;
    case 'FaSearch':
      return <FaSearch />;
    default:
      return <FaCheckCircle />;
  }
};

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

const getIconType = (index: number): string => {
  switch (index % 7) {
    case 0:
      return 'FaCheckCircle';
    case 1:
      return 'FaBullseye';
    case 2:
      return 'FaClipboardCheck';
    case 3:
      return 'FaCheckCircle';
    case 4:
      return 'FaUserGraduate';
    case 5:
      return 'FaTrophy';
    case 6:
      return 'FaSearch';
    default:
      return 'FaCheckCircle';
  }
};

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
      const parsedChecklist: StoredChecklistItem[] = JSON.parse(savedGeneralChecklist);
      const reconstructedChecklist: ChecklistItem[] = parsedChecklist.map((item, index) => ({
        text: item.text,
        checked: item.checked,
        icon: getIconComponent(item.iconType || getIconType(index))
      }));
      setGeneralChecklist(reconstructedChecklist);
    }

    const savedFeedback = Cookies.get('personalizedFeedback');
    if (savedFeedback) {
      const parsedFeedback: StoredChecklistItem[] = JSON.parse(savedFeedback);
      const reconstructedFeedback: ChecklistItem[] = parsedFeedback.map((item, index) => ({
        text: item.text,
        checked: item.checked,
        icon: getIconComponent(item.iconType || getIconType(index))
      }));
      setPersonalizedFeedback(reconstructedFeedback);
    }
  }, []);

  const handleCheckboxChange = (index: number, isPersonalized: boolean) => {
    if (isPersonalized) {
      const newPersonalizedFeedback = [...personalizedFeedback];
      newPersonalizedFeedback[index].checked = !newPersonalizedFeedback[index].checked;
      setPersonalizedFeedback(newPersonalizedFeedback);
      
      // Store only serializable data
      const storedFeedback: StoredChecklistItem[] = newPersonalizedFeedback.map((item, idx) => ({
        text: item.text,
        checked: item.checked,
        iconType: getIconType(idx)
      }));
      Cookies.set('personalizedFeedback', JSON.stringify(storedFeedback), { expires: 30 });
    } else {
      const newGeneralChecklist = [...generalChecklist];
      newGeneralChecklist[index].checked = !newGeneralChecklist[index].checked;
      setGeneralChecklist(newGeneralChecklist);
      
      // Store only serializable data
      const storedChecklist: StoredChecklistItem[] = newGeneralChecklist.map((item, idx) => ({
        text: item.text,
        checked: item.checked,
        iconType: getIconType(idx)
      }));
      Cookies.set('resumeChecklist', JSON.stringify(storedChecklist), { expires: 30 });
    }
  };

  const renderChecklist = (items: ChecklistItem[], isPersonalized: boolean) => (
    <List sx={{ '& > *': { mb: 2 } }}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1, x: 0 }}
          animate={{ 
            opacity: item.checked ? 0 : 1,
            x: item.checked ? 500 : 0,
            height: item.checked ? 0 : 'auto',
            marginBottom: item.checked ? 0 : 16
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
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
              position: 'relative',
              overflow: 'hidden'
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
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.primary',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    width: item.checked ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: theme.palette.error.main,
                    transition: 'width 0.3s ease-in-out',
                  }
                }}
              >
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
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4 
          }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Resume Checklist
            </Typography>
          </Box>
          
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
              mb: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                component={Link}
                href="/resume-analyzer"
                variant="contained"
                color="primary"
                startIcon={<FaSync />}
                sx={{
                  borderRadius: '50px',
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: theme.shadows[8],
                    backgroundColor: theme.palette.primary.dark,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Reanalyze Your Resume
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}