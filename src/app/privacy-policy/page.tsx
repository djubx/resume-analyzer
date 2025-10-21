'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, bgcolor: 'white' }}>
          <Typography variant="h1" sx={{ mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Privacy Policy
          </Typography>

          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Last Updated: October 22, 2025
          </Typography>

          {/* Introduction */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Resume Checkers ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our AI-powered
            resume analysis and building platform at resumecheckers.com.
          </Typography>
          <Typography variant="body1" paragraph>
            By using our services, you consent to the data practices described in this policy. If you do not agree
            with our policies and practices, please do not use our services.
          </Typography>

          {/* Information We Collect */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            2. Information We Collect
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            2.1 Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            We collect the following types of personal information:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, password (encrypted)</li>
              <li><strong>Resume Content:</strong> All information contained in uploaded resumes including contact details, work history, education, skills, and other professional information</li>
              <li><strong>Profile Information:</strong> Any additional information you provide through your profile settings</li>
              <li><strong>Payment Information:</strong> Processed and stored by Paddle (our payment processor), not on our servers</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            2.2 Automatically Collected Information
          </Typography>
          <Typography variant="body1" paragraph>
            When you access our services, we automatically collect:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, features used, time spent, interaction patterns</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type, IP address</li>
              <li><strong>Analytics Data:</strong> We use Amplitude Analytics and Vercel Analytics to track user behavior and improve our services</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Session cookies, authentication tokens, and analytics cookies</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            2.3 Resume File Data
          </Typography>
          <Typography variant="body1" paragraph>
            When you upload a resume PDF, we:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Extract text content from your PDF file</li>
              <li>Store the file temporarily in Sanity CMS for analysis</li>
              <li>Use AI (OpenAI/Gemini) to analyze and extract structured data</li>
              <li>Generate a unique hash of your file to prevent duplicate processing</li>
              <li>Store analysis results and recommendations associated with your account</li>
            </ul>
          </Typography>

          {/* How We Use Information */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            3. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the collected information for the following purposes:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Service Delivery:</strong> To provide resume analysis, ATS scoring, resume building, and related features</li>
              <li><strong>Account Management:</strong> To create and maintain your account, authenticate users, and manage subscriptions</li>
              <li><strong>AI Processing:</strong> To analyze your resume using our AI algorithms and generate recommendations</li>
              <li><strong>Product Improvement:</strong> To understand user behavior, improve features, and develop new functionality</li>
              <li><strong>Communication:</strong> To send service updates, respond to inquiries, and provide customer support</li>
              <li><strong>Analytics:</strong> To monitor usage patterns, measure performance, and improve user experience</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </Typography>

          {/* Data Sharing and Disclosure */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            4. How We Share Your Information
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.1 Third-Party Service Providers
          </Typography>
          <Typography variant="body1" paragraph>
            We share your information with trusted third-party service providers who assist us in operating our platform:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Paddle:</strong> Payment processing and billing (as Merchant of Record)</li>
              <li><strong>Sanity CMS:</strong> Content management and data storage</li>
              <li><strong>OpenAI/Gemini:</strong> AI-powered resume analysis and text extraction</li>
              <li><strong>Amplitude Analytics:</strong> User behavior analytics and product insights</li>
              <li><strong>Vercel:</strong> Hosting, deployment, and analytics</li>
              <li><strong>Auth0:</strong> Authentication and user identity management</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            These service providers are contractually obligated to protect your data and use it only for the
            purposes we specify.
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.2 We Do Not Sell Your Data
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>We do not sell, rent, or trade your personal information or resume data to third parties
            for marketing purposes.</strong>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.3 Legal Requirements
          </Typography>
          <Typography variant="body1" paragraph>
            We may disclose your information if required by law, court order, or government regulation, or if
            we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </Typography>

          {/* Data Storage and Security */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            5. Data Storage and Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement industry-standard security measures to protect your data:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Encryption:</strong> All data transmitted between your browser and our servers uses SSL/TLS encryption (HTTPS)</li>
              <li><strong>Secure Storage:</strong> Data is stored in secure, encrypted databases with Sanity CMS</li>
              <li><strong>Access Controls:</strong> Strict access controls limit who can view or modify your data</li>
              <li><strong>Password Security:</strong> Passwords are hashed and encrypted using industry-standard algorithms</li>
              <li><strong>Regular Security Audits:</strong> We regularly review and update our security practices</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            However, no method of transmission over the internet is 100% secure. While we strive to protect your
            information, we cannot guarantee absolute security.
          </Typography>

          {/* Data Retention */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            6. Data Retention
          </Typography>
          <Typography variant="body1" paragraph>
            We retain your personal information for as long as necessary to provide our services and comply with
            legal obligations:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after closure</li>
              <li><strong>Resume Data:</strong> Stored in your account until you delete it or close your account</li>
              <li><strong>Analytics Data:</strong> Aggregated usage data may be retained indefinitely for product improvement</li>
              <li><strong>Payment Records:</strong> Retained by Paddle according to their policies and legal requirements</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            You may request deletion of your data at any time by contacting us or deleting your account through
            your account settings.
          </Typography>

          {/* Your Rights (GDPR/CCPA) */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            7. Your Privacy Rights
          </Typography>
          <Typography variant="body1" paragraph>
            Depending on your location, you may have the following rights regarding your personal data:
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            7.1 General Rights
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain types of processing of your data</li>
              <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            7.2 GDPR Rights (European Users)
          </Typography>
          <Typography variant="body1" paragraph>
            If you are located in the European Economic Area (EEA), you have additional rights under the General
            Data Protection Regulation (GDPR), including the right to lodge a complaint with your local data
            protection authority.
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            7.3 CCPA Rights (California Users)
          </Typography>
          <Typography variant="body1" paragraph>
            If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA),
            including the right to know what personal information we collect and the right to opt-out of any sale
            of your data (note: we do not sell personal data).
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            7.4 How to Exercise Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            To exercise any of these rights, please contact us at <strong>privacy@resumecheckers.com</strong> or
            through your account settings. We will respond to your request within 30 days.
          </Typography>

          {/* Cookies */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            8. Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to enhance your experience:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for authentication and core functionality</li>
              <li><strong>Analytics Cookies:</strong> Used by Amplitude and Vercel to track usage patterns</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            You can control cookies through your browser settings, but disabling certain cookies may affect
            functionality.
          </Typography>

          {/* Children's Privacy */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            9. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            Resume Checkers is not intended for users under 16 years of age. We do not knowingly collect personal
            information from children. If you believe we have collected information from a child, please contact
            us immediately so we can delete it.
          </Typography>

          {/* International Data Transfers */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            10. International Data Transfers
          </Typography>
          <Typography variant="body1" paragraph>
            Your information may be transferred to and processed in countries other than your country of residence.
            These countries may have different data protection laws. We ensure that appropriate safeguards are in
            place to protect your data in accordance with this Privacy Policy.
          </Typography>

          {/* Changes to Privacy Policy */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            11. Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal
            requirements. We will notify you of any material changes by posting the new policy on this page and
            updating the "Last Updated" date. We encourage you to review this policy periodically.
          </Typography>

          {/* Contact Information */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            12. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
            please contact us at:
          </Typography>
          <Typography variant="body1" paragraph sx={{ pl: 2 }}>
            <strong>Email:</strong> privacy@resumecheckers.com<br />
            <strong>Support Email:</strong> support@resumecheckers.com<br />
            <strong>Website:</strong> resumecheckers.com
          </Typography>

          {/* Summary Box */}
          <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="h3" sx={{ mb: 2, fontSize: '1.2rem' }}>
              Privacy Policy Summary
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <strong>We collect:</strong> Account information, resume content, and usage data<br />
              <strong>We use it to:</strong> Provide AI-powered resume analysis and improve our services<br />
              <strong>We share with:</strong> Only essential service providers (Paddle, Sanity, OpenAI, Amplitude, etc.)<br />
              <strong>We do NOT:</strong> Sell your data to third parties<br />
              <strong>Your rights:</strong> Access, delete, correct, and export your data at any time
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
