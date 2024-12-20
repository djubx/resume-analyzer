import { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaUser, FaBriefcase, FaGraduationCap, FaCogs, FaCertificate, FaProjectDiagram, FaHandsHelping, FaUsers, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  useTheme,
  alpha,
  PaletteColor,
} from '@mui/material';

interface ATSScoreResultProps {
  parsedData: any;
}

type SectionColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

const sectionIcons: { [key: string]: JSX.Element } = {
  contactInformation: <FaUser />,
  workExperience: <FaBriefcase />,
  education: <FaGraduationCap />,
  skills: <FaCogs />,
  certifications: <FaCertificate />,
  projects: <FaProjectDiagram />,
  volunteerExperience: <FaHandsHelping />,
  professionalAssociations: <FaUsers />,
  additionalSections: <FaGlobe />,
};

const sectionColors: { [key: string]: SectionColor } = {
  contactInformation: 'primary',
  workExperience: 'success',
  education: 'warning',
  skills: 'secondary',
  certifications: 'error',
  projects: 'info',
  volunteerExperience: 'success',
  professionalAssociations: 'primary',
  additionalSections: 'warning',
};

const RenderSection = ({ title, content }: { title: string; content: any }) => {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();

  const toggleOpen = () => setIsOpen(!isOpen);

  const renderContent = (data: any, depth: number = 0) => {
    if (Array.isArray(data)) {
      return (
        <List sx={{ pl: depth > 0 ? 2 : 0, mt: depth > 0 ? 1 : 0 }}>
          {data.map((item, index) => (
            <ListItem key={index} sx={{ color: 'text.secondary', display: 'list-item' }}>
              <ListItemText primary={renderContent(item, depth + 1)} />
            </ListItem>
          ))}
        </List>
      );
    } else if (typeof data === 'object' && data !== null) {
      return (
        <Box sx={{ pl: depth > 0 ? 2 : 0, mt: depth > 0 ? 1 : 0 }}>
          {Object.entries(data).map(([key, value]) => (
            <Box key={key} sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 'medium', color: 'primary.main', mr: 1 }}>
                {key}:
              </Typography>
              {renderContent(value, depth + 1)}
            </Box>
          ))}
        </Box>
      );
    } else {
      return (
        <Typography component="span" sx={{ color: 'text.secondary' }}>
          {data?.toString() || 'Not found'}
        </Typography>
      );
    }
  };

  const color = sectionColors[title] || 'primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <Paper
        sx={{
          mb: 2,
          p: 2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: 1,
          borderColor: 'divider',
        }}
      >
        <Box
          onClick={toggleOpen}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              bgcolor: alpha(theme.palette[color].main, 0.1),
            },
            borderRadius: 1,
            p: 1,
          }}
        >
          <Box sx={{ color: `${color}.main`, mr: 1 }}>
            {sectionIcons[title] || <FaChevronRight />}
          </Box>
          <Typography variant="h6" sx={{ color: `${color}.main`, flexGrow: 1 }}>
            {title}
          </Typography>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <FaChevronDown />
            </IconButton>
          </motion.div>
        </Box>
        <Collapse in={isOpen}>
          <Box sx={{ mt: 2 }}>
            {renderContent(content)}
          </Box>
        </Collapse>
      </Paper>
    </motion.div>
  );
};

export default function ATSScoreResult({ parsedData }: ATSScoreResultProps) {
  return (
    <Box sx={{ bgcolor: 'background.default', p: 3, borderRadius: 2 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}>
        ATS Parsed Resume Data
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {Object.entries(parsedData).map(([key, value]) => (
          <RenderSection key={key} title={key} content={value} />
        ))}
      </motion.div>
    </Box>
  );
}