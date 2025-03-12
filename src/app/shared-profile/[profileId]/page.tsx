'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { client } from '@/sanity/lib/client';
import Navbar from '@/components/Navbar';
import ATSScoreResult from '@/components/ATSScoreResult';
import { useUser } from '@auth0/nextjs-auth0/client';
import {
  Box,
  Typography,
  Container,
  Paper,
  Skeleton,
  Alert,
  useTheme,
  Divider,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  alpha,
} from '@mui/material';
import { 
  FaUserCircle, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLock, 
  FaEdit, 
  FaTrash, 
  FaShare, 
  FaDownload,
  FaEye,
  FaEyeSlash,
  FaPalette,
  FaCog
} from 'react-icons/fa';

export default function SharedProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { user, isLoading: isUserLoading } = useUser();
  const profileId = params?.profileId as string;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [atsScoreData, setAtsScoreData] = useState<any>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!profileId) return;
      
      try {
        setLoading(true);
        
        // Fetch the shareable profile
        const profileQuery = `*[_type == "shareableProfile" && profileId == $profileId][0]{
          ...,
          _id,
          atsScoreRef->{
            _id,
            title,
            formattedFileSize,
            uploadedAt,
            analysisResult,
            extractedText
          }
        }`;
        
        const profile = await client.fetch(profileQuery, { profileId });
        
        if (!profile) {
          setError('Profile not found or has expired');
          setLoading(false);
          return;
        }
        
        setProfileData(profile);
        setAtsScoreData(profile.atsScoreRef?.analysisResult || null);
        
        // Check if the current user is the owner of this profile
        if (user && !isUserLoading) {
          const userEmail = user.email;
          const profileEmail = profile.atsScoreRef?.analysisResult?.contactInformation?.email;
          
          if (userEmail && profileEmail && userEmail.toLowerCase() === profileEmail.toLowerCase()) {
            setIsOwner(true);
          }
        }
        
        // Set the current customization values
        if (profile.customizations) {
          setShowContactInfo(profile.customizations.showContactInfo ?? true);
          setSelectedTheme(profile.customizations.theme || 'default');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile data');
        setLoading(false);
      }
    };
    
    fetchProfileData();
  }, [profileId, user, isUserLoading]);

  const handleEditProfile = async () => {
    if (!profileData || !profileData._id) return;
    
    try {
      await client.patch(profileData._id)
        .set({
          'customizations.showContactInfo': showContactInfo,
          'customizations.theme': selectedTheme
        })
        .commit();
      
      // Update local state
      setProfileData({
        ...profileData,
        customizations: {
          ...profileData.customizations,
          showContactInfo,
          theme: selectedTheme
        }
      });
      
      setEditDialogOpen(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteProfile = async () => {
    if (!profileData || !profileData._id) return;
    
    try {
      await client.delete(profileData._id);
      setDeleteDialogOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const handleThemeChange = (event: SelectChangeEvent) => {
    setSelectedTheme(event.target.value);
  };

  const renderContactInfo = () => {
    if (!atsScoreData?.contactInformation || !profileData?.customizations?.showContactInfo) {
      return (
        <Box sx={{ 
          p: 3, 
          textAlign: 'center',
          color: 'text.secondary',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}>
          <FaLock style={{ fontSize: '2rem', color: theme.palette.warning.main }} />
          <Typography variant="body1">
            Contact information is not shared in this profile
          </Typography>
        </Box>
      );
    }

    const { fullName, email, phoneNumber, location } = atsScoreData.contactInformation;

    return (
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {fullName && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FaUserCircle style={{ color: theme.palette.primary.main }} />
              <Typography variant="body1">{fullName}</Typography>
            </Box>
          )}
          
          {email && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FaEnvelope style={{ color: theme.palette.primary.main }} />
              <Typography variant="body1">
                <a href={`mailto:${email}`} style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>
                  {email}
                </a>
              </Typography>
            </Box>
          )}
          
          {phoneNumber && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FaPhone style={{ color: theme.palette.primary.main }} />
              <Typography variant="body1">
                <a href={`tel:${phoneNumber}`} style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                  {phoneNumber}
                </a>
              </Typography>
            </Box>
          )}
          
          {location && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FaMapMarkerAlt style={{ color: theme.palette.primary.main }} />
              <Typography variant="body1">{location}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  const getThemeStyles = () => {
    switch (selectedTheme) {
      case 'professional':
        return {
          headerBg: theme.palette.primary.dark,
          headerText: theme.palette.primary.contrastText,
          gradientStart: theme.palette.primary.dark,
          gradientEnd: theme.palette.primary.main,
        };
      case 'creative':
        return {
          headerBg: theme.palette.secondary.main,
          headerText: theme.palette.secondary.contrastText,
          gradientStart: theme.palette.secondary.main,
          gradientEnd: theme.palette.secondary.light,
        };
      case 'technical':
        return {
          headerBg: theme.palette.info.main,
          headerText: theme.palette.info.contrastText,
          gradientStart: theme.palette.info.dark,
          gradientEnd: theme.palette.info.light,
        };
      default:
        return {
          headerBg: 'transparent',
          headerText: 'text.primary',
          gradientStart: theme.palette.primary.main,
          gradientEnd: theme.palette.secondary.main,
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <Navbar />
      <Container 
        component="main" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          py: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '800px' }}
        >
          <Box sx={{ 
            mb: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            position: 'relative'
          }}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2,
                textAlign: 'center',
                color: 'primary.main',
                fontWeight: 'bold',
              }}
            >
              Resume Profile
            </Typography>
            
            {isOwner && !loading && (
              <Box sx={{ 
                display: 'flex', 
                gap: 1, 
                position: 'absolute', 
                top: 0, 
                right: 0 
              }}>
                <Tooltip title="Edit profile settings">
                  <IconButton 
                    onClick={() => setEditDialogOpen(true)}
                    color="primary"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  >
                    <FaEdit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete profile">
                  <IconButton 
                    onClick={() => setDeleteDialogOpen(true)}
                    color="error"
                    sx={{ bgcolor: alpha(theme.palette.error.main, 0.1) }}
                  >
                    <FaTrash />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            
            {!loading && profileData && (
              <Chip 
                label={`Created: ${new Date(profileData.createdAt).toLocaleDateString()}`}
                variant="outlined"
                size="small"
                sx={{ mb: 2 }}
              />
            )}
          </Box>

          {loading ? (
            <Paper 
              elevation={3}
              sx={{ p: 4, borderRadius: 2 }}
            >
              <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" height={400} />
            </Paper>
          ) : error ? (
            <Alert severity="error" sx={{ mb: 4 }}>
              {error}
            </Alert>
          ) : (
            <>
              <Paper 
                elevation={3}
                sx={{ 
                  mb: 4, 
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: `linear-gradient(90deg, ${themeStyles.gradientStart}, ${themeStyles.gradientEnd})`,
                  }
                }}
              >
                <Box sx={{ 
                  p: 3, 
                  bgcolor: themeStyles.headerBg,
                  color: themeStyles.headerText,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Contact Information
                  </Typography>
                  {profileData?.customizations?.showContactInfo ? (
                    <Tooltip title="Contact information is visible">
                      <FaEye style={{ fontSize: '1.2rem' }} />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Contact information is hidden">
                      <FaEyeSlash style={{ fontSize: '1.2rem' }} />
                    </Tooltip>
                  )}
                </Box>
                <Divider />
                {renderContactInfo()}
              </Paper>

              {atsScoreData && (
                <Paper 
                  elevation={3}
                  sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: `linear-gradient(90deg, ${themeStyles.gradientStart}, ${themeStyles.gradientEnd})`,
                    }
                  }}
                >
                  <ATSScoreResult 
                    parsedData={atsScoreData} 
                    hideContactInfo={true}
                  />
                </Paper>
              )}

              <Box sx={{ mt: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/ats-score"
                  startIcon={<FaShare />}
                  sx={{ 
                    px: 3, 
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'medium',
                  }}
                >
                  Create Your Own Profile
                </Button>
                
                {isOwner && (
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<FaEdit />}
                    onClick={() => setEditDialogOpen(true)}
                    sx={{ 
                      px: 3, 
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 'medium',
                    }}
                  >
                    Edit Settings
                  </Button>
                )}
              </Box>
            </>
          )}
        </motion.div>
      </Container>
      
      {/* Edit Profile Dialog */}
      <Dialog 
        open={editDialogOpen} 
        onClose={() => setEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 'bold', pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FaCog />
            Edit Profile Settings
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ py: 1 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={showContactInfo}
                  onChange={(e) => setShowContactInfo(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {showContactInfo ? 
                    <FaEye style={{ fontSize: '1rem', marginRight: '0.5rem', color: theme.palette.success.main }} /> : 
                    <FaEyeSlash style={{ fontSize: '1rem', marginRight: '0.5rem', color: theme.palette.error.main }} />
                  }
                  <Typography>
                    Show contact information
                  </Typography>
                </Box>
              }
            />
          </Box>
          
          <Box sx={{ mt: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="theme-select-label">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FaPalette />
                  Profile Theme
                </Box>
              </InputLabel>
              <Select
                labelId="theme-select-label"
                value={selectedTheme}
                label="Profile Theme"
                onChange={handleThemeChange}
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="creative">Creative</MenuItem>
                <MenuItem value="technical">Technical</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleEditProfile} 
            variant="contained" 
            color="primary"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle sx={{ color: 'error.main', fontWeight: 'bold' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FaTrash />
            Delete Profile
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this shared profile? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleDeleteProfile} 
            variant="contained" 
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 