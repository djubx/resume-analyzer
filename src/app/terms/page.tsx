'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, bgcolor: 'white' }}>
          <Typography variant="h1" sx={{ mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Terms of Service
          </Typography>

          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Last Updated: October 22, 2025
          </Typography>

          {/* Introduction */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Resume Checkers ("we," "our," or "us"). Resume Checkers is an AI-powered software platform
            that provides automated resume analysis, ATS scoring, and resume building tools via our web application
            at resumecheckers.com. All services are delivered digitally through automated software tools. We do not
            provide human-driven consulting services—all analysis, scoring, and recommendations are generated through
            our proprietary AI and software systems.
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use our services.
          </Typography>

          {/* Services Description */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            2. Description of Services
          </Typography>
          <Typography variant="body1" paragraph>
            Resume Checkers provides the following automated software services:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>AI-powered resume analysis and scoring</li>
              <li>Automated ATS (Applicant Tracking System) compatibility checking</li>
              <li>Resume builder with 50+ professional templates</li>
              <li>Resume optimization recommendations</li>
              <li>Resume checklist and improvement suggestions</li>
              <li>Shareable resume profile links</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            All services are fully automated through software and AI technology. No human review, editing, or
            consulting services are provided as part of our platform.
          </Typography>

          {/* Account Creation */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            3. Account Creation and Access
          </Typography>
          <Typography variant="body1" paragraph>
            To use certain features of our services, you may need to create an account. You agree to:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept all responsibility for activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            You may not share your account with others or create multiple accounts. We reserve the right to terminate
            accounts that violate these terms.
          </Typography>

          {/* Acceptable Use */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            4. Acceptable Use Policy
          </Typography>
          <Typography variant="body1" paragraph>
            You agree not to:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems or other users' data</li>
              <li>Use automated tools (bots, scrapers) to access our services without permission</li>
              <li>Resell, redistribute, or commercialize our services without authorization</li>
              <li>Upload resumes or content you do not have the right to use</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Reverse engineer, decompile, or attempt to extract our source code</li>
            </ul>
          </Typography>

          {/* Intellectual Property */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            5. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Our Property:</strong> All content, features, functionality, software, templates, and AI algorithms
            on Resume Checkers are owned by us and protected by copyright, trademark, and other intellectual property laws.
            You may not copy, modify, distribute, sell, or lease any part of our services without explicit permission.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Your Content:</strong> You retain ownership of any resume content you upload to our platform.
            By uploading content, you grant us a limited license to process, analyze, and display your content solely
            for the purpose of providing our services to you.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Generated Output:</strong> Resume analysis reports, scores, and recommendations generated by our
            AI are provided for your personal use. You may use the generated resumes and reports for your job search
            and professional purposes.
          </Typography>

          {/* Payment and Subscriptions */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            6. Payments and Subscriptions
          </Typography>
          <Typography variant="body1" paragraph>
            Certain features of Resume Checkers require payment. All payments are processed securely by{' '}
            <strong>Paddle</strong>, our authorized payment processor and Merchant of Record. Paddle is responsible
            for handling all payment transactions, billing, and payment-related customer service.
          </Typography>
          <Typography variant="body1" paragraph>
            By making a purchase, you agree to:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Provide valid payment information to Paddle</li>
              <li>Authorize Paddle to charge your payment method for applicable fees</li>
              <li>Pay all fees and applicable taxes</li>
              <li>Comply with Paddle's terms and conditions</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Subscription fees are billed in advance on a recurring basis (monthly or annually). Your subscription
            will automatically renew unless you cancel before the renewal date.
          </Typography>

          {/* Refunds */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            7. Refunds and Cancellations
          </Typography>
          <Typography variant="body1" paragraph>
            Please refer to our{' '}
            <Link href="/refund-policy" style={{ color: '#009688', textDecoration: 'underline' }}>
              Refund Policy
            </Link>{' '}
            for detailed information about refunds and cancellations. Refunds, when eligible, are processed by Paddle
            as the Merchant of Record.
          </Typography>

          {/* Disclaimers */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            8. Disclaimers and Limitations of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>No Guarantee of Employment:</strong> Resume Checkers is a tool to help you improve your resume.
            We do not guarantee job interviews, employment, or any specific career outcomes. Your success depends on
            many factors beyond the quality of your resume.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Service "As Is":</strong> Our services are provided "as is" and "as available" without warranties
            of any kind, either express or implied, including but not limited to warranties of merchantability, fitness
            for a particular purpose, or non-infringement.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, Resume Checkers shall
            not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss
            of profits, data, or opportunities, arising out of your use or inability to use our services.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>AI Accuracy:</strong> While we strive for accuracy, our AI-powered analysis and recommendations
            are automated and may contain errors or limitations. You should review all suggestions and use your
            judgment before implementing changes to your resume.
          </Typography>

          {/* Data and Privacy */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            9. Data and Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            Your privacy is important to us. Please review our{' '}
            <Link href="/privacy-policy" style={{ color: '#009688', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>{' '}
            to understand how we collect, use, and protect your personal information and resume data.
          </Typography>

          {/* Termination */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            10. Account Termination
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to suspend or terminate your account and access to our services at any time,
            without notice, for conduct that we believe violates these Terms of Service or is harmful to other users,
            us, or third parties, or for any other reason at our sole discretion.
          </Typography>
          <Typography variant="body1" paragraph>
            You may cancel your account at any time through your account settings. Upon termination, your right to
            use the services will immediately cease.
          </Typography>

          {/* Changes to Terms */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            11. Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We may update these Terms of Service from time to time. We will notify you of any material changes by
            posting the new terms on this page and updating the "Last Updated" date. Your continued use of our
            services after such changes constitutes your acceptance of the new terms.
          </Typography>

          {/* Governing Law */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            12. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction
            where Resume Checkers operates, without regard to its conflict of law provisions.
          </Typography>

          {/* Contact */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            13. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms of Service, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph sx={{ pl: 2 }}>
            <strong>Email:</strong> support@resumecheckers.com<br />
            <strong>Website:</strong> resumecheckers.com
          </Typography>

          {/* Paddle Information */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            14. Payment Processor
          </Typography>
          <Typography variant="body1" paragraph>
            Paddle.com Market Limited (Paddle) is the authorized reseller and Merchant of Record for all payments
            processed through Resume Checkers. Paddle is responsible for payment processing, billing inquiries,
            and payment-related customer service.
          </Typography>

          <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              By using Resume Checkers, you acknowledge that you have read, understood, and agree to be bound by
              these Terms of Service.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
