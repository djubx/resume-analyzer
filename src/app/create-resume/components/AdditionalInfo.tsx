'use client';

import { StepProps } from '../types';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function AdditionalInfo({ data, onArrayUpdate }: StepProps) {
  const handleArrayChange = (section: 'languages' | 'publications' | 'awards', index: number, value: string) => {
    const newArray = [...data.additionalSections[section]];
    newArray[index] = value;
    onArrayUpdate('additionalSections', {
      ...data.additionalSections,
      [section]: newArray,
    });
  };

  const addItem = (section: 'languages' | 'publications' | 'awards') => {
    const newArray = [...data.additionalSections[section], ''];
    onArrayUpdate('additionalSections', {
      ...data.additionalSections,
      [section]: newArray,
    });
  };

  const removeItem = (section: 'languages' | 'publications' | 'awards', index: number) => {
    const newArray = data.additionalSections[section].filter((_, i) => i !== index);
    onArrayUpdate('additionalSections', {
      ...data.additionalSections,
      [section]: newArray,
    });
  };

  const renderSection = (
    title: string,
    section: 'languages' | 'publications' | 'awards',
    placeholder: string
  ) => (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, color: 'text.primary' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {data.additionalSections[section].map((item, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TextField
              fullWidth
              size="small"
              placeholder={placeholder}
              value={item}
              onChange={(e) => handleArrayChange(section, index, e.target.value)}
              variant="outlined"
            />
            <IconButton
              color="error"
              onClick={() => removeItem(section, index)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          startIcon={<AddIcon />}
          onClick={() => addItem(section)}
          variant="text"
          color="primary"
          sx={{ alignSelf: 'flex-start' }}
        >
          Add {title}
        </Button>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
        Additional Information
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {renderSection('Languages', 'languages', 'Enter language')}
        {renderSection('Publications', 'publications', 'Enter publication')}
        {renderSection('Awards', 'awards', 'Enter award')}
      </Box>
    </Box>
  );
} 