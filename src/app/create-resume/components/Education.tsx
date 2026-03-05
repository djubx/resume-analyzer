'use client';

import { StepProps, Education as EducationType } from '../types';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function Education({ data, onArrayUpdate, onArrayItemAdd, onArrayItemRemove }: StepProps) {
  const handleEducationChange = (index: number, field: keyof EducationType, value: string) => {
    const newEdu = [...data.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    onArrayUpdate('education', newEdu);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
          Education
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => onArrayItemAdd('education', {
            degree: '',
            institution: '',
            graduationDate: '',
          })}
        >
          Add Education
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {data.education.map((edu, index) => (
          <Paper key={index} elevation={2} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton
                color="error"
                onClick={() => onArrayItemRemove('education', index)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Degree"
                  variant="outlined"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  placeholder="Enter your degree"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Institution"
                  variant="outlined"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  placeholder="Enter institution name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Graduation Date"
                  variant="outlined"
                  value={edu.graduationDate}
                  onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
                  placeholder="e.g., May 2023"
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
} 