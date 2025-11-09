import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会员招募 - 90天外汇交易员集训计划",
  description: "CC Killer 全球会员招募：成为90天会员，参与顶尖外汇交易员集训、21天教练陪跑。成绩优异可挑战晋级，获得终身进阶受训资格和1-20万美元MOM操作权。仅接受USDT/USDC加密货币。",
  keywords: ["外汇会员", "交易员集训", "教练陪跑", "加密货币", "交易资金支持", "MOM操作权", "90天培训", "CC Killer"],
  openGraph: {
    title: "会员招募 - 90天外汇交易员集训计划",
    description: "90天会员培训，顶尖外汇交易员集训+21天教练陪跑。挑战成功可获得1-20万美元MOM操作权。",
    url: "https://cckiller.com/splan/donate",
    type: "website",
  },
  alternates: {
    canonical: "https://cckiller.com/splan/donate",
  },
};

export default function DonateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
