'use client';

import { useEffect, useState, createElement } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { templates } from '@/app/create-resume/constants/page-constants';
import {
  Box,
  Typography,
  Container,
  Paper,
  Skeleton,
  Alert,
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  alpha,
} from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';

export default function SharedProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { user, isLoading: isUserLoading } = useUser();
  const profileId = params?.profileId as string;
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!profileId) return;

      try {
        setLoading(true);

        const profile = await client.fetch(
          `*[_type == "shareableProfile" && profileId == $profileId][0]`,
          { profileId }
        );

        if (!profile) {
          setError('This resume link has expired or does not exist.');
          setLoading(false);
          return;
        }

        setProfileData(profile);

        // Owner check — compare logged-in user email against resume contact email
        if (user && !isUserLoading) {
          const userEmail = user.email?.toLowerCase();
          const resumeEmail = profile.resumeData?.contactInformation?.email?.toLowerCase();
          if (userEmail && resumeEmail && userEmail === resumeEmail) {
            setIsOwner(true);
          }
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load this resume. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [profileId, user, isUserLoading]);

  const handleDelete = async () => {
    if (!profileData?._id) return;
    try {
      await client.delete(profileData._id);
      router.push('/');
    } catch (err) {
      console.error('Error deleting profile:', err);
    }
  };

  // Resolve the template component from the stored selectedTemplate id
  const templateComponent = profileData?.selectedTemplate
    ? templates.find(t => t.id === profileData.selectedTemplate)?.component ?? templates[0].component
    : templates[0].component;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <Box sx={{ flexGrow: 1, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">

          {/* Owner controls */}
          {isOwner && !loading && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 2 }}>
              <Tooltip title="Delete this shared link">
                <IconButton
                  onClick={() => setDeleteDialogOpen(true)}
                  color="error"
                  sx={{ bgcolor: alpha(theme.palette.error.main, 0.08) }}
                >
                  <FaTrash size={16} />
                </IconButton>
              </Tooltip>
            </Box>
          )}

          {/* Loading */}
          {loading && (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Skeleton variant="rectangular" height={80} sx={{ mb: 2, borderRadius: 1 }} />
              <Skeleton variant="rectangular" height={500} sx={{ borderRadius: 1 }} />
            </Paper>
          )}

          {/* Error */}
          {!loading && error && (
            <Alert severity="error" sx={{ mb: 4 }}>
              {error}
            </Alert>
          )}

          {/* Resume render */}
          {!loading && !error && profileData?.resumeData && (
            <Paper
              elevation={4}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'white',
                // A4-like shadow treatment so it feels like a real document
                boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              }}
            >
              {/* Thin accent bar */}
              <Box
                sx={{
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }}
              />

              {/* The actual resume template */}
              <Box id="shared-resume-content">
                {createElement(templateComponent, { data: profileData.resumeData })}
              </Box>
            </Paper>
          )}

          {/* Fallback: no resumeData stored (older ATS-only profiles) */}
          {!loading && !error && profileData && !profileData.resumeData && (
            <Alert severity="info">
              This shared profile was created before the full resume preview feature was available.
            </Alert>
          )}

        </Container>
      </Box>

      {/* Sticky bottom CTA */}
      {!loading && !error && (
        <Box
          sx={{
            position: 'sticky',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'white',
            borderTop: `1px solid ${theme.palette.divider}`,
            boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
            py: 2,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            zIndex: 100,
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>
              Like this resume?
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Build your own in minutes — free, no sign-up needed.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/create-resume"
            variant="contained"
            size="medium"
            startIcon={<AutoAwesomeIcon fontSize="small" />}
            sx={{ whiteSpace: 'nowrap', flexShrink: 0, fontWeight: 600 }}
          >
            Create My Resume
          </Button>
        </Box>
      )}

      {/* Delete confirmation */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle sx={{ color: 'error.main', fontWeight: 'bold' }}>
          Delete Shared Link
        </DialogTitle>
        <DialogContent>
          <Typography>
            This will permanently remove the shared link. Anyone who has it will no longer be able to view your resume.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
