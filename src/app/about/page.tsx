"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { People, Lightbulb, RocketLaunch, Handshake } from "@mui/icons-material";
import { 
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  useTheme
} from "@mui/material";

export default function About() {
  const theme = useTheme();

  const aboutItems = [
    {
      icon: <RocketLaunch sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />,
      title: "Our Mission",
      content: "To Empower job seekers with AI-driven insights for crafting perfect resumes.",
    },
    {
      icon: <Lightbulb sx={{ fontSize: 48, mb: 2, color: 'warning.main' }} />,
      title: "Our Vision",
      content: "To revolutionize the job application process through innovative technology.",
    },
    {
      icon: <People sx={{ fontSize: 48, mb: 2, color: 'success.main' }} />,
      title: "Our Team",
      content: "A diverse group of AI experts, HR professionals, and software engineers.",
    },
    {
      icon: <Handshake sx={{ fontSize: 48, mb: 2, color: 'secondary.main' }} />,
      title: "Our Values",
      content: "Innovation, integrity, and commitment to user success.",
    },
  ];

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
            About Us
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              mb: 2,
              color: 'text.secondary'
            }}
          >
            Resume Checkers is dedicated to helping job seekers optimize their resumes using cutting-edge AI technology.
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ mb: 1 }}
          >
            <Box component="span" sx={{ fontWeight: 'bold' }}>CEO:</Box> Ranju Jha
          </Typography>
          <Link
            href="https://www.linkedin.com/in/ranju-jha-a130a5319/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              textDecoration: 'underline',
              '&:hover': {
                color: 'primary.light',
              }
            }}
          >
            LinkedIn Profile
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <Grid container spacing={4}>
            {aboutItems.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: theme.shadows[10]
                  }}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'background.paper',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    {item.icon}
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 2,
                        color: 'primary.main',
                        fontWeight: 600
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.content}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}