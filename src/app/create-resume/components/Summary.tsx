'use client';

import { StepProps } from '../types';
import {
  Box,
  Typography,
  TextField,
  Paper,
} from '@mui/material';

export default function Summary({ data, onUpdate }: StepProps) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
        Professional Summary
      </Typography>
      <Paper elevation={2} sx={{ p: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          placeholder="Write a brief summary of your professional background and career objectives..."
          value={data.professionalSummary}
          onChange={(e) => onUpdate('professionalSummary', '', e.target.value)}
          variant="outlined"
        />
      </Paper>
    </Box>
  );
} 