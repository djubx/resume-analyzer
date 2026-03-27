// Server Component — no "use client" directive.
// Renders JSON-LD structured data in SSR HTML so AI/LLM crawlers
// (Perplexity, GPT-4, Google AIO) can extract entities without JS execution.

export default function HomeStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://resumecheckers.com/#organization",
    "name": "Resume Checkers",
    "url": "https://resumecheckers.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://resumecheckers.com/logo.png"
    },
    "description": "AI-powered resume checker and ATS scanner helping job seekers optimize their resumes for success.",
    "foundingDate": "2024",
    "knowsAbout": [
      "Resume Writing",
      "ATS Optimization",
      "Job Search",
      "Career Development",
      "Applicant Tracking Systems"
    ],
    "sameAs": [
      "https://twitter.com/resumecheckers",
      "https://www.linkedin.com/company/resumecheckers"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://resumecheckers.com/contact"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://resumecheckers.com/#website",
    "name": "Resume Checkers",
    "url": "https://resumecheckers.com",
    "description": "Free AI Resume Checker & ATS Scanner - Analyze your resume instantly",
    "publisher": {
      "@id": "https://resumecheckers.com/#organization"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://resumecheckers.com/#software",
    "name": "Resume Checkers - AI Resume Analyzer",
    "url": "https://resumecheckers.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "AI Resume Checker",
      "ATS Compatibility Scanner",
      "Resume Score",
      "Resume Builder with 50+ Templates",
      "Keyword Analysis"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    },
    "description": "AI-powered resume checker and ATS scanner. Analyze your resume, check ATS compatibility, and build professional resumes with 50+ templates."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
