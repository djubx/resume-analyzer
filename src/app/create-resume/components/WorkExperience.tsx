'use client';

import { StepProps, WorkExperience as WorkExperienceType } from '../types';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function WorkExperience({ data, onArrayUpdate, onArrayItemAdd, onArrayItemRemove }: StepProps) {
  const handleExperienceChange = (index: number, field: keyof WorkExperienceType, value: string) => {
    const newExp = [...data.workExperience];
    newExp[index] = { ...newExp[index], [field]: value };
    onArrayUpdate('workExperience', newExp);
  };

  const handleResponsibilityChange = (expIndex: number, respIndex: number, value: string) => {
    const newExp = [...data.workExperience];
    newExp[expIndex].responsibilities[respIndex] = value;
    onArrayUpdate('workExperience', newExp);
  };

  const addResponsibility = (expIndex: number) => {
    const newExp = [...data.workExperience];
    newExp[expIndex].responsibilities.push('');
    onArrayUpdate('workExperience', newExp);
  };

  const removeResponsibility = (expIndex: number, respIndex: number) => {
    const newExp = [...data.workExperience];
    newExp[expIndex].responsibilities = newExp[expIndex].responsibilities.filter((_, i) => i !== respIndex);
    onArrayUpdate('workExperience', newExp);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
          Work Experience
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => onArrayItemAdd('workExperience', {
            jobTitle: '',
            companyName: '',
            location: '',
            dates: '',
            responsibilities: [''],
          })}
        >
          Add Experience
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {data.workExperience.map((exp, index) => (
          <Paper key={index} elevation={2} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton
                color="error"
                onClick={() => onArrayItemRemove('workExperience', index)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  variant="outlined"
                  value={exp.jobTitle}
                  onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
                  placeholder="Enter your job title"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  variant="outlined"
                  value={exp.companyName}
                  onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
                  placeholder="Enter company name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  value={exp.location}
                  onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                  placeholder="Enter location"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Dates"
                  variant="outlined"
                  value={exp.dates}
                  onChange={(e) => handleExperienceChange(index, 'dates', e.target.value)}
                  placeholder="e.g., Jan 2020 - Present"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.primary' }}>
                Responsibilities
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <Box key={respIndex} sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={resp}
                      onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
                      placeholder="Enter responsibility"
                      size="small"
                    />
                    <IconButton
                      color="error"
                      onClick={() => removeResponsibility(index, respIndex)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => addResponsibility(index)}
                  variant="text"
                  color="primary"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Add Responsibility
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
} 