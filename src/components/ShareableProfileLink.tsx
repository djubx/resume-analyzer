import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Paper, 
  Snackbar, 
  Alert, 
  IconButton, 
  Tooltip, 
  Switch, 
  FormControlLabel,
  useTheme,
  alpha,
  CircularProgress
} from '@mui/material';
import { FaShareAlt, FaCopy, FaCheck, FaLink, FaLock, FaLockOpen } from 'react-icons/fa';
import { client } from "@/sanity/lib/client";

interface ShareableProfileLinkProps {
  atsScoreId: string;
  contactInfo: {
    fullName: string | null;
    email: string | null;
  };
}

export default function ShareableProfileLink({ atsScoreId, contactInfo }: ShareableProfileLinkProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [profileLink, setProfileLink] = useState<string | null>(null);
  const [profileId, setProfileId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const theme = useTheme();

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const handleGenerateLink = async () => {
    setIsGenerating(true);
    try {
      // First, check if a shareable profile already exists for this ATS score
      const existingProfileQuery = `*[_type == "shareableProfile" && atsScoreRef._ref == $atsScoreId][0]{
        profileId,
        _id,
        customizations
      }`;
      
      const existingProfile = await client.fetch(existingProfileQuery, { atsScoreId });
      
      let newProfileId;
      let profileDocId;
      
      if (existingProfile) {
        // Use the existing profile
        newProfileId = existingProfile.profileId;
        profileDocId = existingProfile._id;
        
        // Update the contact info setting if it's different
        if (existingProfile.customizations?.showContactInfo !== showContactInfo) {
          await client.patch(profileDocId)
            .set({
              'customizations.showContactInfo': showContactInfo
            })
            .commit();
        }
        
        setProfileId(newProfileId);
      } else {
        // Create a new shareable profile
        newProfileId = generateRandomId();
        setProfileId(newProfileId);
        
        // Create a new shareable profile document in Sanity
        const shareableProfile = await client.create({
          _type: 'shareableProfile',
          profileId: newProfileId,
          createdAt: new Date().toISOString(),
          atsScoreRef: {
            _type: 'reference',
            _ref: atsScoreId
          },
          isPublic: true,
          customizations: {
            theme: 'default',
            showContactInfo,
            highlightedSections: []
          }
        });
      }

      // Generate the shareable link
      const baseUrl = window.location.origin;
      const shareUrl = `${baseUrl}/shared-profile/${newProfileId}`;
      
      setProfileLink(shareUrl);
      
      // Automatically copy to clipboard
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          const message = existingProfile ? 'Profile link retrieved and copied to clipboard!' : 'Profile link created and copied to clipboard!';
          showSnackbar(message, 'success');
        })
        .catch(err => {
          console.error('Failed to copy link: ', err);
          const message = existingProfile ? 'Profile link retrieved! Click the copy button to copy it.' : 'Profile link created! Click the copy button to copy it.';
          showSnackbar(message, 'success');
        });
    } catch (error) {
      console.error('Error generating shareable profile:', error);
      showSnackbar('Failed to generate profile link. Please try again.', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleToggleContactInfo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newShowContactInfo = event.target.checked;
    setShowContactInfo(newShowContactInfo);
    
    // If we already have a profile, update it
    if (profileId) {
      try {
        // Find the profile document
        const query = `*[_type == "shareableProfile" && profileId == $profileId][0]._id`;
        const profileDocId = await client.fetch(query, { profileId });
        
        if (profileDocId) {
          await client.patch(profileDocId)
            .set({
              'customizations.showContactInfo': newShowContactInfo
            })
            .commit();
          
          showSnackbar('Profile settings updated successfully!', 'success');
        }
      } catch (error) {
        console.error('Error updating profile settings:', error);
        showSnackbar('Failed to update profile settings.', 'error');
      }
    }
  };

  const copyToClipboard = () => {
    if (profileLink) {
      navigator.clipboard.writeText(profileLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      showSnackbar('Link copied to clipboard!', 'success');
    }
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mt: 4,
          borderRadius: 2,
          bgcolor: 'background.paper',
          border: `1px solid ${theme.palette.divider}`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FaShareAlt style={{ fontSize: '1.5rem', color: theme.palette.primary.main, marginRight: '0.75rem' }} />
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Share Your Resume Profile
          </Typography>
        </Box>
        
        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Create a shareable link to your resume profile that you can include in job applications or share with recruiters.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Switch
                checked={showContactInfo}
                onChange={handleToggleContactInfo}
                color="primary"
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {showContactInfo ? 
                  <FaLockOpen style={{ fontSize: '1rem', marginRight: '0.5rem', color: theme.palette.success.main }} /> : 
                  <FaLock style={{ fontSize: '1rem', marginRight: '0.5rem', color: theme.palette.error.main }} />
                }
                <Typography variant="body2">
                  Include contact information ({contactInfo.email})
                </Typography>
              </Box>
            }
          />
        </Box>

        {!profileLink ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={isGenerating ? <CircularProgress size={20} color="inherit" /> : <FaLink />}
            onClick={handleGenerateLink}
            disabled={isGenerating}
            fullWidth
            sx={{
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'medium',
              boxShadow: theme.shadows[4],
              '&:hover': {
                boxShadow: theme.shadows[8],
              },
            }}
          >
            {isGenerating ? 'Processing...' : 'Get Shareable Link'}
          </Button>
        ) : (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium', color: 'text.secondary' }}>
              Your shareable profile link:
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              p: 2,
              borderRadius: 1,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
            }}>
              <TextField
                fullWidth
                value={profileLink}
                variant="standard"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  sx: { 
                    fontSize: '0.9rem',
                    color: 'text.primary',
                    '&::selection': {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                    }
                  }
                }}
                sx={{ mr: 1 }}
              />
              <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                <IconButton 
                  onClick={copyToClipboard}
                  color={copied ? "success" : "primary"}
                  sx={{ 
                    bgcolor: copied ? alpha(theme.palette.success.main, 0.1) : alpha(theme.palette.primary.main, 0.1),
                    '&:hover': {
                      bgcolor: copied ? alpha(theme.palette.success.main, 0.2) : alpha(theme.palette.primary.main, 0.2),
                    }
                  }}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
              This link will allow others to view your resume profile{showContactInfo ? ' including your contact information' : ' without your contact information'}.
            </Typography>
          </Box>
        )}
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </motion.div>
  );
} 