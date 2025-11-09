import { EducationPageContent } from './forex-basics.content';

export const currencyPairsGuideContent = {
  zh: {
    title: '货币对完整解析 - 主要、次要与异国货币对交易指南 | CC Killer',
    description: '深入讲解外汇货币对：EUR/USD、GBP/USD、USD/JPY等主要货币对特性，货币对相关性分析，点值计算方法，最佳交易时段选择。掌握货币对选择与交易技巧。',
    keywords: '货币对, 主要货币对, EUR/USD, GBP/USD, USD/JPY, 货币对相关性, 点值计算, 外汇货币对',

    heroTitle: '货币对完整解析',
    heroDescription: '理解货币对特性，选择最适合你的交易品种',
    readingTime: '30分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-are-currency-pairs', title: '什么是货币对？' },
      { id: 'major-pairs', title: '主要货币对深度分析' },
      { id: 'minor-exotic-pairs', title: '次要与异国货币对' },
      { id: 'correlation', title: '货币对相关性与选择' },
      { id: 'pip-value', title: '点值计算与风险管理' },
      { id: 'trading-times', title: '交易时段优化策略' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 新手应该从哪个货币对开始交易？',
        answer: '强烈建议从EUR/USD开始。EUR/USD是全球流动性最高、点差最小（0.5-1点）、走势最稳定的货币对，技术分析效果最好，适合新手学习和积累经验。其次可以考虑GBP/USD和USD/JPY。避免交易异国货币对（如USD/TRY），它们点差大、波动剧烈、难以预测。'
      },
      {
        question: 'Q2: 为什么EUR/USD的点差比GBP/JPY小那么多？',
        answer: '点差取决于流动性和交易量。EUR/USD日交易量占全球外汇市场30%，买卖双方极多，供需匹配快，点差自然小（0.5-1点）。GBP/JPY是交叉货币对，需要通过GBP/USD和USD/JPY合成计算，流动性较低，点差通常2-4点。流动性越高，点差越小，交易成本越低。'
      },
      {
        question: 'Q3: 如何计算不同货币对的点值？',
        answer: '公式：点值 = (0.0001 / 当前汇率) × 手数 × 合约单位。EUR/USD交易1标准手（100,000单位），当前价格1.1000，点值 = (0.0001 / 1.1000) × 1 × 100,000 = $9.09。USD/JPY以日元报价，1标准手点值固定约$9.09（汇率145时）。使用CC Killer仓位计算器可自动计算点值和仓位。'
      },
      {
        question: 'Q4: 什么是货币对相关性？为什么要关注？',
        answer: '相关性指两个货币对价格走势的关联度。正相关（如EUR/USD和GBP/USD，相关系数+0.8）意味着同向运动；负相关（如EUR/USD和USD/CHF，相关系数-0.9）意味着反向运动。同时做多两个高度正相关的货币对（如EUR/USD和GBP/USD）实际上是双倍风险，一旦错误会双倍亏损。应分散到低相关或负相关的货币对以降低风险。'
      },
      {
        question: 'Q5: 每个货币对的最佳交易时段是什么时候？',
        answer: 'EUR/USD最佳时段：欧洲开盘（15:00-18:00北京时间）和欧美重叠（20:00-24:00），日均波动80-100点。GBP/USD：伦敦开盘（15:00-19:00），波动最剧烈，日均120-150点。USD/JPY：东京开盘（8:00-10:00）和纽约开盘（20:00-24:00），日均70-90点。AUD/USD：悉尼/东京开盘（6:00-12:00）。在货币所属国家的交易时段交易，流动性最好。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: '外汇基础知识',
        description: '了解外汇市场的基本概念'
      },
      {
        href: '/education/trading-sessions-guide',
        icon: '🕐',
        title: '交易时段指南',
        description: '掌握全球外汇交易时间'
      },
      {
        href: '/partners/brokers',
        icon: '🏦',
        title: '经纪商对比',
        description: '找到点差最低的交易平台'
      }
    ],

    ctaTitle: '想要找到最适合你的货币对？',
    ctaDescription: '对比顶级外汇经纪商，找到点差最低、执行最快的交易平台',
    ctaPrimaryButton: '对比经纪商',
    ctaSecondaryButton: '免费模拟账户',

    footerPrevText: '← 外汇基础',
    footerNextText: '市场参与者 →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/market-participants',
  } as EducationPageContent,

  en: {
    title: 'Complete Currency Pairs Guide - Major, Minor & Exotic Pairs Trading | CC Killer',
    description: 'In-depth explanation of forex currency pairs: EUR/USD, GBP/USD, USD/JPY characteristics, correlation analysis, pip value calculation, optimal trading sessions. Master currency pair selection and trading techniques.',
    keywords: 'currency pairs, major pairs, EUR/USD, GBP/USD, USD/JPY, currency correlation, pip value, forex pairs',

    heroTitle: 'Complete Currency Pairs Guide',
    heroDescription: 'Understand currency pair characteristics and choose the best pairs for your trading',
    readingTime: '30 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-are-currency-pairs', title: 'What are Currency Pairs?' },
      { id: 'major-pairs', title: 'Major Currency Pairs Analysis' },
      { id: 'minor-exotic-pairs', title: 'Minor & Exotic Pairs' },
      { id: 'correlation', title: 'Currency Correlation & Selection' },
      { id: 'pip-value', title: 'Pip Value Calculation & Risk' },
      { id: 'trading-times', title: 'Trading Session Optimization' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Which currency pair should beginners start with?',
        answer: 'Strongly recommend starting with EUR/USD. EUR/USD has the highest global liquidity, smallest spread (0.5-1 pip), most stable movement, best technical analysis effectiveness, ideal for beginners to learn and gain experience. Next consider GBP/USD and USD/JPY. Avoid exotic pairs (like USD/TRY) - they have large spreads, extreme volatility, difficult to predict.'
      },
      {
        question: 'Q2: Why is EUR/USD spread so much smaller than GBP/JPY?',
        answer: 'Spread depends on liquidity and trading volume. EUR/USD accounts for 30% of global forex daily volume, extremely many buyers and sellers, fast supply-demand matching, naturally small spread (0.5-1 pip). GBP/JPY is a cross pair, needs synthetic calculation through GBP/USD and USD/JPY, lower liquidity, typically 2-4 pips spread. Higher liquidity = smaller spread = lower trading costs.'
      },
      {
        question: 'Q3: How to calculate pip value for different currency pairs?',
        answer: 'Formula: Pip Value = (0.0001 / Current Rate) × Lot Size × Contract Size. EUR/USD trading 1 standard lot (100,000 units), current price 1.1000, pip value = (0.0001 / 1.1000) × 1 × 100,000 = $9.09. USD/JPY quoted in yen, 1 standard lot pip value fixed ~$9.09 (at 145 rate). Use CC Killer position calculator to automatically calculate pip values and positions.'
      },
      {
        question: 'Q4: What is currency correlation and why should I care?',
        answer: 'Correlation indicates the relationship between two currency pairs\' price movements. Positive correlation (e.g., EUR/USD and GBP/USD, coefficient +0.8) means they move together; negative correlation (e.g., EUR/USD and USD/CHF, coefficient -0.9) means opposite movements. Longing two highly positive correlated pairs (EUR/USD and GBP/USD) is actually double risk - if wrong, double loss. Should diversify to low or negative correlated pairs to reduce risk.'
      },
      {
        question: 'Q5: What are the best trading sessions for each currency pair?',
        answer: 'EUR/USD best sessions: European open (15:00-18:00 Beijing) and EU-US overlap (20:00-24:00), daily range 80-100 pips. GBP/USD: London open (15:00-19:00), most volatile, daily range 120-150 pips. USD/JPY: Tokyo open (08:00-10:00) and New York open (20:00-24:00), daily range 70-90 pips. AUD/USD: Sydney/Tokyo open (06:00-12:00). Trade during the currency\'s home country session for best liquidity.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: 'Forex Basics',
        description: 'Understand fundamental forex concepts'
      },
      {
        href: '/education/trading-sessions-guide',
        icon: '🕐',
        title: 'Trading Sessions Guide',
        description: 'Master global forex trading hours'
      },
      {
        href: '/partners/brokers',
        icon: '🏦',
        title: 'Broker Comparison',
        description: 'Find platforms with lowest spreads'
      }
    ],

    ctaTitle: 'Want to Find the Best Currency Pairs for You?',
    ctaDescription: 'Compare top forex brokers to find platforms with lowest spreads and fastest execution',
    ctaPrimaryButton: 'Compare Brokers',
    ctaSecondaryButton: 'Free Demo Account',

    footerPrevText: '← Forex Basics',
    footerNextText: 'Market Participants →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/market-participants',
  } as EducationPageContent,
};
