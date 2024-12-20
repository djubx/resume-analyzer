'use client';

import { StepProps } from '../types';
import {
  Box,
  Typography,
  TextField,
  Grid,
} from '@mui/material';

export default function PersonalInfo({ data, onUpdate }: StepProps) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={data.contactInformation.fullName}
            onChange={(e) => onUpdate('contactInformation', 'fullName', e.target.value)}
            placeholder="Enter your full name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            variant="outlined"
            value={data.contactInformation.email}
            onChange={(e) => onUpdate('contactInformation', 'email', e.target.value)}
            placeholder="Enter your email address"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            variant="outlined"
            value={data.contactInformation.phoneNumber}
            onChange={(e) => onUpdate('contactInformation', 'phoneNumber', e.target.value)}
            placeholder="Enter your phone number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            value={data.contactInformation.location}
            onChange={(e) => onUpdate('contactInformation', 'location', e.target.value)}
            placeholder="Enter your location"
          />
        </Grid>
      </Grid>
    </Box>
  );
} 