import { EducationPageContent } from './forex-basics.content';

export const spreadsCommissionsContent = {
  zh: {
    title: '外汇点差与佣金完整指南 - 交易成本详解与优化策略 | CC Killer',
    description: '全面解析外汇交易成本：点差类型（固定vs浮动）、佣金模式、隐藏费用、以及如何选择低成本经纪商。掌握降低交易成本的实用技巧，提升长期盈利能力。',
    keywords: '外汇点差, 外汇佣金, 交易成本, 固定点差, 浮动点差, ECN账户, STP账户, 外汇经纪商对比',

    heroTitle: '外汇点差与佣金详解',
    heroDescription: '理解交易成本构成，学会选择最具性价比的交易条件',
    readingTime: '16分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-spread', title: '什么是点差？' },
      { id: 'spread-types', title: '固定点差 vs 浮动点差' },
      { id: 'commission-models', title: '佣金模式：无佣金 vs 佣金账户' },
      { id: 'account-types', title: '账户类型对比：MM、STP、ECN' },
      { id: 'hidden-costs', title: '隐藏成本：滑点、库存费、出金费' },
      { id: 'cost-calculation', title: '交易成本计算与优化' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 点差越低越好吗？',
        answer: '不完全是。虽然低点差降低了交易成本，但还需要考虑其他因素：经纪商监管资质、订单执行质量、滑点情况、出金速度等。某些超低点差经纪商可能在其他方面存在问题。建议综合评估，选择点差合理、综合服务优质的经纪商。'
      },
      {
        question: 'Q2: 固定点差好还是浮动点差好？',
        answer: '取决于交易风格。固定点差适合新手和剥头皮交易者，成本可预测，数据发布时不会突然扩大。浮动点差在平时市场可能更低，适合趋势交易和波段交易。但在重大新闻时点差会显著扩大。建议新手先用固定点差熟悉市场。'
      },
      {
        question: 'Q3: ECN账户真的比标准账户更好吗？',
        answer: 'ECN账户提供更透明的市场价格和更快的执行速度，点差通常更低，但会收取佣金。适合日内交易和剥头皮策略，以及有一定经验的交易者。标准账户无佣金，点差稍高，更适合新手和长线交易者。选择应基于你的交易频率和风格。'
      },
      {
        question: 'Q4: 如何计算我的实际交易成本？',
        answer: '总成本 = 点差成本 + 佣金 + 滑点 + 隔夜利息（如持仓过夜）。举例：交易1标准手EUR/USD，点差2点，佣金$7，滑点0.5点，开仓+平仓总成本约$32。计算公式：(点差+滑点) × 手数 × 合约大小 × 点值 + 佣金。建议用Excel表格记录每笔交易的真实成本。'
      },
      {
        question: 'Q5: 点差突然扩大是经纪商操纵吗？',
        answer: '大多数情况下不是。点差扩大通常发生在：1) 重大经济数据发布前后；2) 市场开盘/收盘时段；3) 流动性不足时段（如深夜）；4) 突发重大事件。这是正常的市场现象。但如果点差频繁异常扩大，且远超同行水平，可能需要考虑更换经纪商。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: '外汇交易基础',
        description: '从零开始了解外汇市场的基本概念和运作机制'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '精确计算交易成本和潜在盈亏'
      },
      {
        href: '/education/broker-selection-guide',
        icon: '🏦',
        title: '经纪商选择指南',
        description: '学习如何选择安全可靠的外汇经纪商'
      }
    ],

    ctaTitle: '想要获得更优质的交易条件？',
    ctaDescription: 'CC Killer 合作经纪商提供极具竞争力的点差和佣金',
    ctaPrimaryButton: '查看合作经纪商',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 交易时段指南',
    footerNextText: '杠杆与保证金 →',
    footerPrevHref: '/education/trading-sessions-guide',
    footerNextHref: '/education/leverage-and-margin',
  } as EducationPageContent,

  en: {
    title: 'Complete Guide to Forex Spreads and Commissions - Trading Costs Explained | CC Killer',
    description: 'Comprehensive analysis of forex trading costs: spread types (fixed vs floating), commission models, hidden fees, and how to choose low-cost brokers. Master cost reduction strategies for long-term profitability.',
    keywords: 'forex spreads, forex commissions, trading costs, fixed spread, floating spread, ECN account, STP account, broker comparison',

    heroTitle: 'Forex Spreads and Commissions Explained',
    heroDescription: 'Understand trading cost structures and choose the most cost-effective conditions',
    readingTime: '16 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-spread', title: 'What is a Spread?' },
      { id: 'spread-types', title: 'Fixed vs Floating Spreads' },
      { id: 'commission-models', title: 'Commission Models: Commission-Free vs Commission-Based' },
      { id: 'account-types', title: 'Account Type Comparison: MM, STP, ECN' },
      { id: 'hidden-costs', title: 'Hidden Costs: Slippage, Swap, Withdrawal Fees' },
      { id: 'cost-calculation', title: 'Trading Cost Calculation & Optimization' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Are lower spreads always better?',
        answer: 'Not necessarily. While low spreads reduce trading costs, consider other factors: broker regulation, order execution quality, slippage, withdrawal speed, etc. Some ultra-low spread brokers may have issues in other areas. We recommend comprehensive evaluation, choosing brokers with reasonable spreads and quality overall service.'
      },
      {
        question: 'Q2: Fixed or floating spreads - which is better?',
        answer: 'Depends on trading style. Fixed spreads suit beginners and scalpers - costs are predictable and won\'t suddenly widen during data releases. Floating spreads can be lower during normal markets, suitable for trend and swing trading. But they widen significantly during major news. Beginners should start with fixed spreads.'
      },
      {
        question: 'Q3: Are ECN accounts truly better than standard accounts?',
        answer: 'ECN accounts offer more transparent market pricing and faster execution, typically lower spreads, but charge commissions. Suitable for day trading and scalping strategies, and experienced traders. Standard accounts have no commission but slightly higher spreads, better for beginners and long-term traders. Choose based on your trading frequency and style.'
      },
      {
        question: 'Q4: How do I calculate my actual trading costs?',
        answer: 'Total cost = Spread cost + Commission + Slippage + Overnight interest (if holding positions). Example: Trading 1 standard lot EUR/USD, 2 pip spread, $7 commission, 0.5 pip slippage, total open+close cost ~$32. Formula: (Spread+Slippage) × Lots × Contract size × Pip value + Commission. Track real costs per trade in Excel.'
      },
      {
        question: 'Q5: Is sudden spread widening broker manipulation?',
        answer: 'Usually not. Spread widening typically occurs during: 1) Major economic data releases; 2) Market open/close; 3) Low liquidity periods (late night); 4) Sudden major events. This is normal market behavior. However, if spreads frequently widen abnormally far beyond industry standards, consider changing brokers.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: 'Forex Trading Basics',
        description: 'Learn fundamental concepts and market mechanics from scratch'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Accurately calculate trading costs and potential profit/loss'
      },
      {
        href: '/education/broker-selection-guide',
        icon: '🏦',
        title: 'Broker Selection Guide',
        description: 'Learn how to choose safe and reliable forex brokers'
      }
    ],

    ctaTitle: 'Want Better Trading Conditions?',
    ctaDescription: 'CC Killer partner brokers offer highly competitive spreads and commissions',
    ctaPrimaryButton: 'View Partner Brokers',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Trading Sessions',
    footerNextText: 'Leverage & Margin →',
    footerPrevHref: '/education/trading-sessions-guide',
    footerNextHref: '/education/leverage-and-margin',
  } as EducationPageContent,
};
