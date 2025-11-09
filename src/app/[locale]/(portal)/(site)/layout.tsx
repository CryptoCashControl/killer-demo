import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "CC Killer - 专业外汇交易员培训平台 | 30天培养职业交易员",
  description: "CC Killer 专业外汇交易员培训平台，致力于30个工作日内培养职业外汇交易员。提供系统化交易培训、实战训练和资金支持。通过考核即可获得1-20万美元资金管理权限，分润比例高达90%。严格筛选，留下极少数，劝返大多数。",
  keywords: ["外汇交易员培训", "CC Killer", "职业交易员", "30天交易培训", "交易员招募", "外汇培训", "交易实战训练", "资金管理", "交易心理培训"],
  openGraph: {
    title: "CC Killer - 专业外汇交易员培训平台",
    description: "30个工作日系统化培养职业外汇交易员，提供专业交易培训、实战训练和资金支持。通过考核即可获得资金管理权限，分润比例高达90%。",
    url: "https://cckiller.com",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "CC Killer 专业外汇交易员培训平台"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CC Killer - 专业外汇交易员培训平台",
    description: "30个工作日系统化培养职业外汇交易员，提供专业交易培训、实战训练和资金支持。",
  },
  alternates: {
    canonical: "https://cckiller.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
