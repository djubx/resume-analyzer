"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { createClient } from '@sanity/client';
import { Email, Person, Chat, Send } from "@mui/icons-material";
import { 
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  Paper,
  useTheme
} from "@mui/material";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2023-05-03',
});

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      _type: 'contact',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      submittedAt: new Date().toISOString(),
    };

    try {
      const result = await client.create(contactData);
      setFormStatus("Thank you for your message. We'll get back to you soon!");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary'
      }}
    >
      <Navbar />
      <Container 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          py: 12
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: theme.spacing(6) }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '3rem', sm: '4rem' },
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Get in Touch
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              color: 'text.secondary'
            }}
          >
            We're excited to hear from you! Drop us a message and let's start a conversation.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ width: '100%', maxWidth: '32rem' }}
        >
          <Paper 
            component="form"
            onSubmit={handleSubmit}
            elevation={8}
            sx={{ 
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 2
            }}
          >
            <Box sx={{ mb: 3, position: 'relative' }}>
              <TextField
                fullWidth
                required
                name="name"
                label="Your Name"
                variant="outlined"
                InputProps={{
                  startAdornment: <Person sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Box>
            <Box sx={{ mb: 3, position: 'relative' }}>
              <TextField
                fullWidth
                required
                name="email"
                type="email"
                label="Your Email"
                variant="outlined"
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Box>
            <Box sx={{ mb: 3, position: 'relative' }}>
              <TextField
                fullWidth
                required
                name="message"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                InputProps={{
                  startAdornment: <Chat sx={{ mr: 1, mt: 1, color: 'primary.main' }} />,
                }}
              />
            </Box>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ 
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
                startIcon={
                  isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send />
                    </motion.div>
                  ) : (
                    <Send />
                  )
                }
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </Paper>
        </motion.div>

        {formStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '32rem', marginTop: theme.spacing(3) }}
          >
            <Alert 
              severity={formStatus.includes('Error') ? 'error' : 'success'}
              variant="filled"
            >
              {formStatus}
            </Alert>
          </motion.div>
        )}
      </Container>
    </Box>
  );
}