import { EducationPageContent } from './forex-basics.content';

export const brokerSelectionContent = {
  zh: {
    title: '外汇经纪商选择完整指南 - 如何识别安全可靠的外汇平台 | CC Killer',
    description: '全面讲解外汇经纪商选择标准：监管资质识别、平台类型对比（MM/STP/ECN）、资金安全保障、交易条件评估。避开黑平台陷阱，选择最适合你的外汇经纪商。',
    keywords: '外汇经纪商, 外汇平台选择, 经纪商监管, 黑平台识别, ECN经纪商, STP经纪商, 外汇平台安全',

    heroTitle: '外汇经纪商选择指南',
    heroDescription: '掌握选择安全可靠经纪商的核心标准，避开黑平台陷阱',
    readingTime: '25分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'why-important', title: '为什么经纪商选择如此重要？' },
      { id: 'regulation', title: '监管资质：首要考察标准' },
      { id: 'broker-types', title: '经纪商类型对比：MM vs STP vs ECN' },
      { id: 'trading-conditions', title: '交易条件评估' },
      { id: 'fund-security', title: '资金安全与出金保障' },
      { id: 'red-flags', title: '黑平台识别：10大危险信号' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 国内可以合法进行外汇保证金交易吗？',
        answer: '中国目前不允许境内机构开展外汇保证金交易业务。但个人通过境外持牌经纪商进行外汇交易属于个人境外投资行为，不违法。关键是选择受严格监管的国际经纪商，如英国FCA、澳洲ASIC、美国NFA等。务必确认经纪商的真实监管牌照。'
      },
      {
        question: 'Q2: 点差低就是好经纪商吗？',
        answer: '绝对不是！超低点差可能掩盖其他问题：1) 滑点严重；2) 订单执行差；3) 出金困难；4) 无真实监管。一些黑平台用超低点差吸引客户，但通过滑点、拒绝出金等方式侵吞资金。建议综合评估：监管 > 资金安全 > 交易条件 > 点差成本。'
      },
      {
        question: 'Q3: 如何验证经纪商的监管牌照真伪？',
        answer: '三步验证法：1) 访问监管机构官网（如FCA官网www.fca.org.uk）；2) 在监管机构的查询系统中输入经纪商名称或牌照号；3) 确认监管范围包括"外汇保证金交易"。警惕：一些平台虚假宣称受监管，或使用"套牌"（盗用其他公司的监管信息）。'
      },
      {
        question: 'Q4: MM、STP、ECN，新手应该选择哪种？',
        answer: 'MM账户：点差固定，适合新手和小资金。STP账户：点差浮动，执行更快，适合中级交易者。ECN账户：点差最低但收佣金，适合高频交易和大资金。新手建议：先用MM账户熟悉市场，积累经验后再升级到STP或ECN。'
      },
      {
        question: 'Q5: 经纪商破产了，我的资金会损失吗？',
        answer: '取决于监管和隔离措施。正规经纪商有两重保护：1) 资金隔离：客户资金存放在独立托管账户，与经纪商运营资金分离；2) 赔偿计划：如英国FSCS提供最高85,000英镑赔偿，澳洲FCS提供最高40万澳元。这就是为什么必须选择受严格监管的经纪商！'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/spreads-and-commissions',
        icon: '💰',
        title: '点差与佣金详解',
        description: '了解不同经纪商的交易成本结构'
      },
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: '外汇交易基础',
        description: '从零开始学习外汇市场基础知识'
      },
      {
        href: '/partners/brokers',
        icon: '🤝',
        title: 'CC Killer合作经纪商',
        description: '查看我们推荐的受监管经纪商'
      }
    ],

    ctaTitle: '寻找可靠的外汇经纪商？',
    ctaDescription: 'CC Killer只推荐受严格监管、信誉良好的合作经纪商',
    ctaPrimaryButton: '查看合作经纪商',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 点差与佣金',
    footerNextText: '交易策略入门 →',
    footerPrevHref: '/education/spreads-and-commissions',
    footerNextHref: '/education/day-trading',
  } as EducationPageContent,

  en: {
    title: 'Complete Forex Broker Selection Guide - How to Identify Safe and Reliable Platforms | CC Killer',
    description: 'Comprehensive guide to forex broker selection criteria: regulation verification, broker type comparison (MM/STP/ECN), fund security, trading conditions assessment. Avoid scam brokers and choose the best forex platform for you.',
    keywords: 'forex broker, broker selection, forex regulation, scam broker identification, ECN broker, STP broker, forex platform safety',

    heroTitle: 'Forex Broker Selection Guide',
    heroDescription: 'Master core criteria for choosing safe and reliable brokers, avoid scam platforms',
    readingTime: '25 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'why-important', title: 'Why Broker Selection Matters' },
      { id: 'regulation', title: 'Regulation: Primary Criterion' },
      { id: 'broker-types', title: 'Broker Type Comparison: MM vs STP vs ECN' },
      { id: 'trading-conditions', title: 'Trading Conditions Assessment' },
      { id: 'fund-security', title: 'Fund Security and Withdrawal Protection' },
      { id: 'red-flags', title: 'Scam Broker Identification: 10 Warning Signs' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Is forex margin trading legal in China?',
        answer: 'China currently does not allow domestic institutions to conduct forex margin trading. However, individual forex trading through offshore licensed brokers is considered personal overseas investment and is not illegal. Key is choosing internationally regulated brokers like UK FCA, Australian ASIC, US NFA. Always verify the broker\'s authentic regulatory license.'
      },
      {
        question: 'Q2: Does low spread mean good broker?',
        answer: 'Absolutely not! Ultra-low spreads may hide other issues: 1) Severe slippage; 2) Poor order execution; 3) Withdrawal difficulties; 4) No real regulation. Some scam platforms use ultra-low spreads to attract clients, then profit through slippage and withdrawal rejection. Recommend comprehensive evaluation: Regulation > Fund Safety > Trading Conditions > Spread Costs.'
      },
      {
        question: 'Q3: How to verify broker regulation authenticity?',
        answer: 'Three-step verification: 1) Visit regulator\'s official website (e.g., FCA at www.fca.org.uk); 2) Enter broker name or license number in regulator\'s search system; 3) Confirm regulatory scope includes "forex margin trading". Beware: Some platforms falsely claim regulation or use "cloned licenses" (stealing other companies\' regulatory information).'
      },
      {
        question: 'Q4: MM, STP, ECN - which should beginners choose?',
        answer: 'MM account: Fixed spreads, suitable for beginners and small capital. STP account: Floating spreads, faster execution, suitable for intermediate traders. ECN account: Lowest spreads but charges commission, suitable for high-frequency and large capital. Beginner recommendation: Start with MM to familiarize with market, upgrade to STP or ECN after gaining experience.'
      },
      {
        question: 'Q5: If broker goes bankrupt, will I lose my funds?',
        answer: 'Depends on regulation and segregation measures. Legitimate brokers have two-layer protection: 1) Fund segregation: Client funds stored in independent custodial accounts, separated from broker operational funds; 2) Compensation schemes: UK FSCS provides up to £85,000 compensation, Australian FCS up to A$400,000. This is why you must choose strictly regulated brokers!'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/spreads-and-commissions',
        icon: '💰',
        title: 'Spreads & Commissions',
        description: 'Understand different broker cost structures'
      },
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: 'Forex Trading Basics',
        description: 'Learn forex market fundamentals from scratch'
      },
      {
        href: '/partners/brokers',
        icon: '🤝',
        title: 'CC Killer Partner Brokers',
        description: 'View our recommended regulated brokers'
      }
    ],

    ctaTitle: 'Looking for Reliable Forex Brokers?',
    ctaDescription: 'CC Killer only recommends strictly regulated, reputable partner brokers',
    ctaPrimaryButton: 'View Partner Brokers',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Spreads & Commissions',
    footerNextText: 'Trading Strategies →',
    footerPrevHref: '/education/spreads-and-commissions',
    footerNextHref: '/education/day-trading',
  } as EducationPageContent,
};
