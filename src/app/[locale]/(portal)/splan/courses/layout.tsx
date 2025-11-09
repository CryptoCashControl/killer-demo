import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "培训体系 - 30天外汇交易员训练营",
  description: "CC Killer 外汇交易员训练营培训体系：规则练习(3天)、盈利练习(20天)、小额实盘(20天)、大额矩阵。严格的考核标准，完善的风控要求，系统化的职业外汇交易员培养流程。通过率<18%。",
  keywords: ["外汇交易员培训", "交易培训体系", "交易规则学习", "盈利考核", "实盘训练", "风控管理", "交易纪律", "CC Killer"],
  openGraph: {
    title: "培训体系 - 30天外汇交易员训练营",
    description: "系统化的外汇交易员培养流程：规则练习、盈利练习、小额实盘、大额矩阵。通过率<18%，留下极少数。",
    url: "https://cckiller.com/splan/courses",
    type: "website",
  },
  alternates: {
    canonical: "https://cckiller.com/splan/courses",
  },
};

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
