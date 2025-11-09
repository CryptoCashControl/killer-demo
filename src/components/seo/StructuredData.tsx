"use client";

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StructuredData() {
  const pathname = usePathname();
  const { language } = useLanguage();

  // 组织信息
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": language === 'zh' ? "军刀 CC Killer" : "CC Killer",
    "alternateName": language === 'zh' ? "CC Killer" : "军刀",
    "url": "https://cckiller.com",
    "logo": "https://cckiller.com/logo.png",
    "description": language === 'zh'
      ? "专注于外汇交易的职业交易员培训平台。提供系统化外汇交易培训、实战训练和资金支持。通过专业考核即可获得资金管理权限，分润比例高达90%。"
      : "Professional FX trader training platform. Systematic forex trading education, practical training, and funded trading accounts. Pass professional assessment to get fund management privileges with up to 90% profit split.",
    "sameAs": [
      "https://twitter.com/cckiller",
      "https://www.linkedin.com/company/cckiller",
      "https://www.youtube.com/@cckiller"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@cckiller.com"
    }
  };

  // 网站信息
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CC Killer",
    "url": "https://cckiller.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cckiller.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // 课程信息（用于培训页面）
  const courseSchema = pathname.includes('/splan/courses') ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": language === 'zh' ? "CC Killer 职业交易员培训课程" : "CC Killer Professional Trader Training Course",
    "description": language === 'zh'
      ? "全面系统的外汇交易培训课程，涵盖基础知识、技术分析、风险管理、交易心理等"
      : "Comprehensive forex trading training course covering fundamentals, technical analysis, risk management, and trading psychology",
    "provider": {
      "@type": "Organization",
      "name": "CC Killer"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced"
  } : null;

  const schemas = [organizationSchema, websiteSchema, courseSchema].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
