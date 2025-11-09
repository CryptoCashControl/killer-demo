import { EducationPageContent } from './forex-basics.content';

export const bollingerBandsContent = {
  zh: {
    title: '布林带指标完整指南 - Bollinger Bands交易策略与实战技巧 | CC Killer',
    description: '深入讲解布林带（Bollinger Bands）指标：计算公式、参数设置、经典交易策略（布林带突破、挤压、回归）。结合实战案例，掌握布林带在外汇交易中的应用。',
    keywords: '布林带, Bollinger Bands, BB指标, 布林带策略, 布林带突破, 布林带挤压, 技术分析指标, 波动性指标',

    heroTitle: '布林带指标完整指南',
    heroDescription: '掌握最实用的波动性指标，提升交易精准度',
    readingTime: '22分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-bb', title: '什么是布林带？' },
      { id: 'calculation', title: '布林带的计算与参数设置' },
      { id: 'interpretation', title: '如何解读布林带信号' },
      { id: 'trading-strategies', title: '经典布林带交易策略' },
      { id: 'advanced-techniques', title: '进阶技巧与组合应用' },
      { id: 'common-mistakes', title: '常见错误与规避方法' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 布林带参数(20, 2)是最佳设置吗？',
        answer: '(20, 2)是默认参数，适合大多数情况。但最佳参数取决于交易品种和时间框架。波动性大的货币对可以使用(20, 2.5)或(20, 3)以减少假信号；日内交易可以尝试(10, 2)或(15, 2)。建议在历史数据上回测验证。'
      },
      {
        question: 'Q2: 价格触及布林带上轨就应该做空吗？',
        answer: '不一定！在强趋势中，价格可能沿着布林带上轨/下轨持续运行（称为"沿轨运行"）。触轨信号需要结合市场环境：在震荡市中触轨是反转信号，在趋势市中可能是继续信号。建议配合其他指标（如RSI、MACD）确认。'
      },
      {
        question: 'Q3: 布林带收窄（挤压）后一定会大涨或大跌吗？',
        answer: '布林带挤压表明波动性极低，通常预示即将出现大行情。但方向不确定！需要等待价格突破上轨或下轨后再入场。过早入场可能遭遇假突破。建议结合成交量和价格动能指标确认突破有效性。'
      },
      {
        question: 'Q4: 可以单独使用布林带交易吗？',
        answer: '不建议。布林带是优秀的辅助指标，但单独使用容易产生假信号。建议组合使用：1) BB + RSI（识别超买超卖）；2) BB + MACD（确认趋势和动能）；3) BB + 支撑阻力（提高精准度）。多重确认可以显著提升胜率。'
      },
      {
        question: 'Q5: 日内交易和波段交易的布林带策略有何不同？',
        answer: '时间框架不同，策略重点也不同。日内交易：使用5分钟/15分钟图，参数(10-15, 2)，关注快速反转机会。波段交易：使用4小时/日线图，参数(20, 2)，关注趋势延续和重大反转。更长的时间框架信号更可靠，但机会更少。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education#technical',
        icon: '📊',
        title: '肯特纳通道',
        description: '与布林带类似但基于ATR的波动性指标'
      },
      {
        href: '/education#technical',
        icon: '📈',
        title: 'RSI指标详解',
        description: '结合RSI识别超买超卖区域'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '根据布林带宽度调整仓位大小'
      }
    ],

    ctaTitle: '想要系统学习技术分析？',
    ctaDescription: '加入 CC Killer 培训计划，掌握更多实战技术指标应用',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 杠杆与保证金',
    footerNextText: '肯特纳通道 →',
    footerPrevHref: '/education/leverage-and-margin',
    footerNextHref: '/education/keltner-channels',
  } as EducationPageContent,

  en: {
    title: 'Complete Bollinger Bands Guide - Trading Strategies and Practical Techniques | CC Killer',
    description: 'In-depth explanation of Bollinger Bands indicator: calculation formulas, parameter settings, classic trading strategies (BB breakout, squeeze, reversion). Master Bollinger Bands application in forex trading with real cases.',
    keywords: 'Bollinger Bands, BB indicator, BB strategy, BB breakout, BB squeeze, technical analysis, volatility indicator',

    heroTitle: 'Complete Bollinger Bands Guide',
    heroDescription: 'Master the most practical volatility indicator to improve trading precision',
    readingTime: '22 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-bb', title: 'What is Bollinger Bands?' },
      { id: 'calculation', title: 'Calculation and Parameter Settings' },
      { id: 'interpretation', title: 'How to Interpret BB Signals' },
      { id: 'trading-strategies', title: 'Classic BB Trading Strategies' },
      { id: 'advanced-techniques', title: 'Advanced Techniques and Combinations' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Is (20, 2) the best Bollinger Bands parameter?',
        answer: '(20, 2) is the default parameter, suitable for most situations. But optimal parameters depend on trading instrument and timeframe. High-volatility pairs can use (20, 2.5) or (20, 3) to reduce false signals; day trading can try (10, 2) or (15, 2). Recommend backtesting on historical data for verification.'
      },
      {
        question: 'Q2: Should I short when price touches the upper band?',
        answer: 'Not necessarily! In strong trends, price may run along the upper/lower band (called "walking the bands"). Band touch signals need market context: in ranging markets it\'s a reversal signal, in trending markets it may be a continuation signal. Recommend confirming with other indicators (RSI, MACD).'
      },
      {
        question: 'Q3: Does BB squeeze always lead to big moves?',
        answer: 'BB squeeze indicates extremely low volatility, typically preceding significant moves. But direction is uncertain! Wait for price to break above upper or below lower band before entering. Early entry may encounter false breakouts. Recommend confirming breakout validity with volume and momentum indicators.'
      },
      {
        question: 'Q4: Can I trade using Bollinger Bands alone?',
        answer: 'Not recommended. BB is an excellent auxiliary indicator, but using it alone easily produces false signals. Recommend combinations: 1) BB + RSI (identify overbought/oversold); 2) BB + MACD (confirm trend and momentum); 3) BB + Support/Resistance (improve precision). Multiple confirmations significantly improve win rate.'
      },
      {
        question: 'Q5: How do day trading and swing trading BB strategies differ?',
        answer: 'Different timeframes require different strategy focus. Day trading: Use 5min/15min charts, parameters (10-15, 2), focus on quick reversals. Swing trading: Use 4H/daily charts, parameters (20, 2), focus on trend continuation and major reversals. Longer timeframes provide more reliable signals but fewer opportunities.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education#technical',
        icon: '📊',
        title: 'Keltner Channels',
        description: 'Volatility indicator similar to BB but based on ATR'
      },
      {
        href: '/education#technical',
        icon: '📈',
        title: 'RSI Indicator',
        description: 'Combine RSI to identify overbought/oversold zones'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Adjust position size based on BB width'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Technical Analysis?',
    ctaDescription: 'Join CC Killer training to master more practical technical indicator applications',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Leverage & Margin',
    footerNextText: 'Keltner Channels →',
    footerPrevHref: '/education/leverage-and-margin',
    footerNextHref: '/education/keltner-channels',
  } as EducationPageContent,
};
