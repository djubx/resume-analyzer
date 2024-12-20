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

export default function Skills({ data, onArrayUpdate, onArrayItemAdd, onArrayItemRemove }: StepProps) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
        Skills & Certifications
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {data.skills.map((skill, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter skill"
                    value={skill}
                    onChange={(e) => {
                      const newSkills = [...data.skills];
                      newSkills[index] = e.target.value;
                      onArrayUpdate('skills', newSkills);
                    }}
                    variant="outlined"
                  />
                  <IconButton
                    color="error"
                    onClick={() => onArrayItemRemove('skills', index)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() => onArrayItemAdd('skills', '')}
                variant="text"
                color="primary"
                sx={{ alignSelf: 'flex-start' }}
              >
                Add Skill
              </Button>
            </Box>
          </Box>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
              Certifications
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {data.certifications.map((cert, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter certification"
                    value={cert}
                    onChange={(e) => {
                      const newCerts = [...data.certifications];
                      newCerts[index] = e.target.value;
                      onArrayUpdate('certifications', newCerts);
                    }}
                    variant="outlined"
                  />
                  <IconButton
                    color="error"
                    onClick={() => onArrayItemRemove('certifications', index)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() => onArrayItemAdd('certifications', '')}
                variant="text"
                color="primary"
                sx={{ alignSelf: 'flex-start' }}
              >
                Add Certification
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
} 