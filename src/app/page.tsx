"use client";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFileAlt, FaChartLine, FaClipboardCheck, FaExclamationTriangle, FaCheckCircle, FaQuoteLeft, FaGraduationCap, FaBriefcase, FaUserTie } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
  CardActions,
  Avatar,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', color: 'text.primary' }}>
      <SpeedInsights />
      <Analytics />
      <Navbar />
      
      <Container component="main" sx={{ flexGrow: 1, py: 8 }}>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h0" sx={{ mb: 4, color: 'primary.main', fontWeight: 'bold' }}>
              Transform Your Resume into a Job-Winning Asset with AI
            </Typography>
            <Typography variant="h4" sx={{ mb: 4, color: 'text.secondary' }}>
              Don't let your dream job slip away. Our AI-powered tools help you craft a resume that stands out and gets you hired faster.
            </Typography>
            <Button
              component={Link}
              href="/resume-analyzer"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ py: 2, px: 4, fontSize: '1.2rem' }}
            >
              Get Instant Feedback Now
            </Button>
          </Box>
        </motion.div>

        {/* Our solutions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h2" sx={{ mb: 6, color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaCheckCircle style={{ marginRight: '0.5rem', color: theme.palette.success.main }} />
              Powerful Tools for Resume Success
            </Typography>
            <Grid container spacing={4}>
              {[
                { 
                  icon: <FaFileAlt />, 
                  title: "AI Resume Checker", 
                  description: "Get personalized insights to make your resume stand out",
                  link: "/resume-analyzer"
                },
                { 
                  icon: <FaChartLine />, 
                  title: "ATS Score", 
                  description: "Optimize your resume to pass 95% of ATS filters",
                  link: "/ats-score"
                },
                { 
                  icon: <FaClipboardCheck />, 
                  title: "Resume Checklist", 
                  description: "Ensure your resume covers all essential elements",
                  link: "/resume-checklist"
                },
              ].map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      '&:hover': { boxShadow: theme.shadows[10] }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Box sx={{ color: 'primary.main', fontSize: '3rem', mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h3" component="h3" sx={{ mb: 2, color: 'primary.main' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                      <Button
                        component={Link}
                        href={feature.link}
                        variant="contained"
                        color="primary"
                      >
                        Get Started
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', color: 'primary.main' }}>
              Success Stories
            </Typography>
            <Grid container spacing={4}>
              {[
                { name: "John D.", position: "Marketing Director at Tech Giant", text: "Landed my dream job at a Fortune 500 company!", image: "/john.png" },
                { name: "Sarah M.", position: "Senior Software Engineer", text: "50% increase in interview callbacks!", image: "/sarah.png" },
                { name: "Alex K.", position: "Data Analyst at Startup", text: "Secured my first job right out of college!", image: "/alex.png" },
              ].map((testimonial, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      bgcolor: 'background.paper',
                      '&:hover': { borderColor: 'primary.main' },
                      border: 1,
                      borderColor: 'divider'
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 64, height: 64, mr: 2 }}
                    />
                    <Box>
                      <FaQuoteLeft style={{ color: theme.palette.primary.main, marginBottom: '1rem', fontSize: '1.5rem' }} />
                      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                        {testimonial.text}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        - {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Career Stage Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
              Tailored for Every Career Stage
            </Typography>
            <Grid container spacing={3}>
              {[
                { icon: <FaGraduationCap />, title: "New Graduates", description: "Stand out in entry-level job applications" },
                { icon: <FaBriefcase />, title: "Mid-Career Professionals", description: "Highlight your growing expertise and achievements" },
                { icon: <FaUserTie />, title: "Executives", description: "Showcase your leadership and industry impact" },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper' }}>
                    <Box sx={{ color: 'primary.main', fontSize: '2.5rem', mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h4" sx={{ mb: 1, color: 'primary.main' }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
              Ready to Supercharge Your Job Search?
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, color: 'text.secondary' }}>
              Join over 10,000 professionals who've landed their dream jobs with our AI tools.
            </Typography>
            <Typography variant="h3" sx={{ mb: 4, color: 'secondary.main', fontWeight: 'bold' }}>
              15,000+ resumes improved and counting!
            </Typography>
            <Button
              component={Link}
              href="/resume-analyzer"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ py: 2, px: 4 }}
            >
              Get Insights Now
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>Quick Links</Typography>
              <List>
                <ListItem component={Link} href="/blog" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  Resume Tips Blog
                </ListItem>
                <ListItem component={Link} href="/resources" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  Free Resources
                </ListItem>
                <ListItem component={Link} href="/about" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  About Us
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>Legal</Typography>
              <List>
                <ListItem component={Link} href="/privacy" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  Privacy Policy
                </ListItem>
                <ListItem component={Link} href="/terms" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  Terms of Service
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>Connect With Us</Typography>
              <Typography variant="body2" color="text.secondary">
                Stay updated on the latest resume trends and job search tips.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
