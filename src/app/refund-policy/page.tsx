'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, bgcolor: 'white' }}>
          <Typography variant="h1" component="h1" sx={{ mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Refund Policy
          </Typography>

          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Last Updated: October 22, 2025
          </Typography>

          {/* Introduction */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            1. Overview
          </Typography>
          <Typography variant="body1" paragraph>
            At Resume Checkers, we strive to provide high-quality AI-powered resume analysis and building services.
            This Refund Policy outlines the circumstances under which refunds may be granted for purchases made on
            our platform.
          </Typography>
          <Typography variant="body1" paragraph>
            All payments are processed by <strong>Paddle</strong>, our authorized payment processor and Merchant
            of Record. Paddle is responsible for handling all refund requests, payment disputes, and billing
            inquiries.
          </Typography>
          <Typography variant="body1" paragraph>
            Your purchase is subject to{' '}
            <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" style={{ color: '#009688', textDecoration: 'underline' }}>
              Paddle's Buyer Terms
            </a>, which include important consumer rights and refund provisions. This Refund Policy complies with and supplements Paddle's terms.
          </Typography>

          {/* Nature of Service */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            2. Nature of Our Services
          </Typography>
          <Typography variant="body1" paragraph>
            Resume Checkers provides <strong>digital software services</strong> that are delivered instantly and
            automatically upon purchase. Our services include:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>AI-powered resume analysis and scoring (delivered immediately)</li>
              <li>ATS compatibility checking (instant results)</li>
              <li>Resume builder with 50+ templates (immediate access)</li>
              <li>Resume optimization recommendations (automated generation)</li>
              <li>Premium features and template access (instant activation)</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Because our services are digital and delivered instantly through automated software, refund eligibility
            is limited to specific circumstances outlined below.
          </Typography>

          {/* Refund Eligibility */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            3. Refund Eligibility
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            3.1 Eligible for Refund
          </Typography>
          <Typography variant="body1" paragraph>
            Refunds may be granted in the following circumstances:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Technical Failure:</strong> The service failed to deliver due to a technical error on our end (e.g., payment processed but service not activated)</li>
              <li><strong>Duplicate Charges:</strong> You were accidentally charged more than once for the same service</li>
              <li><strong>Unauthorized Charges:</strong> A charge was made without your authorization (subject to verification)</li>
              <li><strong>Service Unavailability:</strong> Core features were unavailable for an extended period due to system outages</li>
              <li><strong>Subscription Cancellation:</strong> You cancel a subscription within 7 days of initial purchase and have not extensively used premium features</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            3.2 NOT Eligible for Refund
          </Typography>
          <Typography variant="body1" paragraph>
            Refunds will generally <strong>not</strong> be granted in the following cases:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Change of Mind:</strong> You changed your mind after the service was delivered</li>
              <li><strong>Dissatisfaction with Results:</strong> You are unhappy with the AI analysis results or recommendations (our AI provides automated suggestions, not guarantees)</li>
              <li><strong>Employment Outcomes:</strong> You did not get a job interview or employment (we do not guarantee career outcomes)</li>
              <li><strong>Service Already Used:</strong> You have already received and used the resume analysis, reports, or downloaded resumes</li>
              <li><strong>User Error:</strong> Incorrect information was uploaded, or the service was not used correctly</li>
              <li><strong>Subscription Renewal:</strong> Your subscription automatically renewed (subscriptions can be cancelled before the renewal date)</li>
              <li><strong>Feature Expectations:</strong> The service did not meet your personal expectations (when it functioned as described)</li>
            </ul>
          </Typography>

          {/* Subscription Cancellation */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            4. Subscription Cancellations
          </Typography>
          <Typography variant="body1" paragraph>
            Resume Checkers offers subscription plans (monthly or annual) that automatically renew unless cancelled.
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.1 How to Cancel
          </Typography>
          <Typography variant="body1" paragraph>
            You can cancel your subscription at any time through:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Your account settings on resumecheckers.com</li>
              <li>Contacting Paddle customer support</li>
              <li>Emailing support@resumecheckers.com</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.2 When Cancellation Takes Effect
          </Typography>
          <Typography variant="body1" paragraph>
            When you cancel your subscription:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>You will retain access to premium features until the end of your current billing period</li>
              <li>Your subscription will not renew for the next billing cycle</li>
              <li>No refund will be provided for the remaining days of the current billing period (unless eligible under Section 3.1)</li>
              <li>You can reactivate your subscription at any time</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.3 14-Day Money-Back Guarantee
          </Typography>
          <Typography variant="body1" paragraph>
            In compliance with Paddle's Buyer Terms, we offer a <strong>14-day money-back guarantee</strong>:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>You have the right to cancel your purchase within 14 days without giving any reason</li>
              <li>The cancellation period expires 14 days after the day of purchase</li>
              <li>To exercise your right to cancel, you must inform us (or Paddle) of your decision before the 14-day period expires</li>
              <li>If approved, we will reimburse all payments received from you within 14 days using the same payment method</li>
            </ul>
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            4.4 Exception to 14-Day Right to Cancel
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Important:</strong> Your right to cancel does <strong>not apply</strong> to digital content that has been delivered and consumed:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>If you have downloaded, streamed, or otherwise acquired and used our digital services (resume analysis, ATS scanning, resume building, etc.)</li>
              <li>By using our services immediately after purchase, you acknowledge that you lose your right of withdrawal once the service has been delivered</li>
              <li>This exception is in accordance with consumer protection laws for digital content</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            This means if you purchase our services and immediately use them (upload a resume, run an analysis, create a resume, etc.), the 14-day cancellation right no longer applies as the digital content has been delivered and consumed.
          </Typography>

          {/* How to Request a Refund */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            5. How to Request a Refund
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            5.1 Contact Paddle (Recommended)
          </Typography>
          <Typography variant="body1" paragraph>
            Since Paddle is the Merchant of Record for all transactions, we recommend contacting Paddle directly
            for refund requests:
          </Typography>
          <Typography variant="body1" paragraph sx={{ pl: 2 }}>
            <strong>Paddle Customer Support:</strong> Available through your Paddle receipt email or at paddle.com/support
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            5.2 Contact Resume Checkers
          </Typography>
          <Typography variant="body1" paragraph>
            You can also contact us directly, and we will work with Paddle to process your request:
          </Typography>
          <Typography variant="body1" paragraph sx={{ pl: 2 }}>
            <strong>Email:</strong> support@resumecheckers.com<br />
            <strong>Subject Line:</strong> "Refund Request - [Your Order Number]"
          </Typography>

          <Typography variant="h3" sx={{ mt: 3, mb: 1.5, fontSize: '1.2rem' }}>
            5.3 Information to Include
          </Typography>
          <Typography variant="body1" paragraph>
            When requesting a refund, please provide:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Your full name and email address associated with the purchase</li>
              <li>Order number or transaction ID (found in your receipt email)</li>
              <li>Date of purchase</li>
              <li>Reason for the refund request</li>
              <li>Description of any technical issues encountered (if applicable)</li>
            </ul>
          </Typography>

          {/* Model Cancellation Form */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            6. Model Cancellation Form
          </Typography>
          <Typography variant="body1" paragraph>
            To exercise your right to cancel within the 14-day period, you may use the following model cancellation form (though it is not obligatory):
          </Typography>
          <Box sx={{ mt: 3, mb: 4, p: 3, bgcolor: 'grey.50', borderRadius: 1, border: '1px solid #ddd' }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
              To: Resume Checkers / Paddle Support Team
              <br /><br />
              I/We (*) hereby give notice that I/We (*) cancel my/our (*) contract for the following service:
              <br /><br />
              Service name: _______________________
              <br />
              Ordered on: _______________________
              <br />
              Order number: _______________________
              <br /><br />
              Name of consumer(s): _______________________
              <br />
              Email address: _______________________
              <br />
              Address: _______________________
              <br /><br />
              Signature (only if this form is sent on paper): _______________________
              <br />
              Date: _______________________
              <br /><br />
              (*) Delete as appropriate
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            You can send this form via email to support@resumecheckers.com or contact Paddle directly through your order receipt.
          </Typography>

          {/* Refund Processing */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            7. Refund Processing Timeline
          </Typography>
          <Typography variant="body1" paragraph>
            If your refund request is approved:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li><strong>Review Time:</strong> We will review your request within 2-3 business days</li>
              <li><strong>Approval Notification:</strong> You will receive an email confirmation if approved</li>
              <li><strong>Processing Time:</strong> Paddle will process the refund within 5-10 business days</li>
              <li><strong>Credit to Account:</strong> The refund will appear in your payment method within 5-10 business days after processing (depending on your bank)</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Refunds are issued to the original payment method used for the purchase.
          </Typography>

          {/* Partial Refunds */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            8. Partial Refunds
          </Typography>
          <Typography variant="body1" paragraph>
            In certain circumstances, we may offer partial refunds:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Extended service outages that affected your ability to use premium features</li>
              <li>Technical issues that partially impacted service delivery</li>
              <li>Pro-rated refunds for annual subscriptions cancelled mid-term (at our discretion)</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Partial refund amounts are determined on a case-by-case basis.
          </Typography>

          {/* Chargebacks */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            9. Chargebacks and Disputes
          </Typography>
          <Typography variant="body1" paragraph>
            We strongly encourage you to contact us before initiating a chargeback with your bank or credit card
            company. Chargebacks can delay resolution and may result in:
          </Typography>
          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ul>
              <li>Immediate suspension of your account and services</li>
              <li>Additional fees charged by Paddle to cover chargeback processing costs</li>
              <li>Difficulty resolving the issue through normal customer service channels</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            If you have a billing concern, please reach out to us or Paddle first. We are committed to resolving
            issues fairly and promptly.
          </Typography>

          {/* Exceptions */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            10. Exceptions and Special Circumstances
          </Typography>
          <Typography variant="body1" paragraph>
            We understand that exceptional circumstances may arise. While this policy outlines our standard
            refund guidelines, we reserve the right to evaluate requests on a case-by-case basis and may make
            exceptions at our sole discretion.
          </Typography>
          <Typography variant="body1" paragraph>
            If you believe your situation warrants special consideration, please contact us at
            support@resumecheckers.com with a detailed explanation.
          </Typography>

          {/* Contact Information */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            11. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For questions about this Refund Policy or to request a refund, please contact:
          </Typography>
          <Typography variant="body1" paragraph sx={{ pl: 2 }}>
            <strong>Resume Checkers Support:</strong> support@resumecheckers.com<br />
            <strong>Paddle Support:</strong> Available at paddle.com/support<br />
            <strong>Website:</strong> resumecheckers.com
          </Typography>

          {/* Changes to Policy */}
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontSize: '1.5rem' }}>
            12. Changes to This Refund Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Refund Policy from time to time. Any changes will be posted on this page with an
            updated "Last Updated" date. Continued use of our services after such changes constitutes acceptance
            of the updated policy.
          </Typography>

          {/* Summary Box */}
          <Box sx={{ mt: 6, p: 3, bgcolor: '#e8f5e9', borderRadius: 1, border: '1px solid #4caf50' }}>
            <Typography variant="h3" sx={{ mb: 2, fontSize: '1.2rem', color: '#2e7d32' }}>
              Quick Summary
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              ✅ <strong>14-Day Money-Back Guarantee</strong> in compliance with Paddle's Buyer Terms<br />
              ✅ <strong>Full refunds</strong> for technical failures or duplicate charges<br />
              ✅ <strong>Processed by Paddle</strong> as Merchant of Record<br />
              ❌ <strong>No refunds</strong> after digital content has been used or consumed<br />
              ❌ <strong>No employment guarantees</strong> - we provide tools, not career outcomes<br />
              ⏱️ <strong>2-3 business days</strong> for review, 5-10 days for processing
            </Typography>
          </Box>

          <Box sx={{ mt: 3, p: 3, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <strong>Note:</strong> This refund policy applies to services purchased through resumecheckers.com.
              By making a purchase, you acknowledge that you have read and agree to this Refund Policy. For related
              policies, please see our{' '}
              <Link href="/terms" style={{ color: '#009688', textDecoration: 'underline' }}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" style={{ color: '#009688', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
