import { EducationPageContent } from './forex-basics.content';

export const swingTradingContent = {
  zh: {
    title: '波段交易完整指南 - Swing Trading策略与多日持仓技巧 | CC Killer',
    description: '深入讲解波段交易（Swing Trading）：H4/D1时间框架分析、趋势识别方法、持仓管理技巧、多日交易策略。掌握波段交易的完整系统和实战案例。',
    keywords: '波段交易, Swing Trading, H4交易, D1交易, 趋势交易, 多日持仓, 波段策略, 外汇波段交易',

    heroTitle: '波段交易完整指南',
    heroDescription: '掌握多日交易策略，捕捉中期趋势机会',
    readingTime: '26分钟',
    difficulty: '中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-swing-trading', title: '什么是波段交易？' },
      { id: 'trend-identification', title: '趋势识别与分析' },
      { id: 'entry-strategies', title: '波段交易入场策略' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'position-management', title: '持仓管理要点' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 波段交易和日内交易的主要区别是什么？',
        answer: '持仓时间和时间框架不同。波段交易持仓2-10天，主要使用H4/D1图表，目标利润100-500点；日内交易当日平仓，使用M5-H1图表，目标20-80点。波段交易需要承担隔夜风险和利息成本，但心理压力小，无需持续盯盘，信号更可靠，适合兼职交易者。'
      },
      {
        question: 'Q2: 波段交易止损应该设置多少点？',
        answer: '取决于时间框架和货币对波动性。H4图表：50-100点；D1图表：100-200点。建议使用ATR指标动态设置，通常为2-3倍ATR值。止损应设置在关键支撑阻力位下方/上方，如前高低、趋势线、重要移动平均线（50/200EMA）。波段交易止损较大，但单笔风险仍应控制在账户2%以内。'
      },
      {
        question: 'Q3: 波段交易需要盯盘吗？',
        answer: '不需要持续盯盘。使用H4图表每4小时检查一次，D1图表每天检查1-2次即可。建议在欧美盘开盘时段（北京时间15:00-24:00）检查市场，设置价格提醒。波段交易的优势就是时间灵活，非常适合有全职工作的兼职交易者。但需要定期监控持仓，及时调整止损和止盈。'
      },
      {
        question: 'Q4: 波段交易如何处理隔夜跳空？',
        answer: '隔夜跳空是波段交易的主要风险之一。应对方法：1) 设置止损单（不依赖手动平仓）；2) 避免在周末和重大事件前持仓；3) 使用较小仓位（1-1.5%风险）分散风险；4) 跳空后不要慌张，评估新的价格位置和趋势是否改变；5) 考虑使用保证止损（GSL）功能的经纪商，虽然成本更高但可完全避免跳空滑点。'
      },
      {
        question: 'Q5: 波段交易适合新手吗？',
        answer: '相对日内交易更适合新手。波段交易节奏慢，给予充足时间分析和决策，市场噪音少，信号更可靠，心理压力小。但需要更好的耐心（持仓数天）、更大的止损（100-200点）和更强的趋势判断能力。建议新手先学习趋势识别和多时间框架分析，使用模拟账户练习3-6个月后，从小仓位开始实盘交易。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/day-trading',
        icon: '⚡',
        title: '日内交易',
        description: '学习更短周期的交易策略'
      },
      {
        href: '/education/trend-following',
        icon: '📈',
        title: '趋势跟踪',
        description: '深入学习趋势识别和跟踪方法'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '计算波段交易的最佳仓位大小'
      }
    ],

    ctaTitle: '想要系统学习波段交易？',
    ctaDescription: '加入 CC Killer 培训计划，获取专业波段交易策略和中长期趋势分析',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 日内交易',
    footerNextText: '剥头皮交易 →',
    footerPrevHref: '/education/day-trading',
    footerNextHref: '/education/scalping',
  } as EducationPageContent,

  en: {
    title: 'Complete Swing Trading Guide - Strategies and Multi-Day Position Techniques | CC Killer',
    description: 'In-depth explanation of Swing Trading: H4/D1 timeframe analysis, trend identification methods, position management techniques, multi-day trading strategies. Master complete swing trading system with real cases.',
    keywords: 'swing trading, H4 trading, D1 trading, trend trading, multi-day positions, swing strategy, forex swing trading',

    heroTitle: 'Complete Swing Trading Guide',
    heroDescription: 'Master multi-day trading strategies to capture medium-term trend opportunities',
    readingTime: '26 min',
    difficulty: 'Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-swing-trading', title: 'What is Swing Trading?' },
      { id: 'trend-identification', title: 'Trend Identification and Analysis' },
      { id: 'entry-strategies', title: 'Swing Trading Entry Strategies' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'position-management', title: 'Position Management Essentials' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: What are the main differences between swing trading and day trading?',
        answer: 'Holding period and timeframes differ. Swing trading holds 2-10 days, mainly uses H4/D1 charts, targets 100-500 pips; day trading closes same day, uses M5-H1 charts, targets 20-80 pips. Swing trading bears overnight risk and swap charges, but has less psychological pressure, no constant monitoring, more reliable signals, suitable for part-time traders.'
      },
      {
        question: 'Q2: How many pips should swing trading stop-loss be?',
        answer: 'Depends on timeframe and pair volatility. H4 chart: 50-100 pips; D1 chart: 100-200 pips. Recommend using ATR indicator for dynamic setting, typically 2-3x ATR value. Stops should be set below/above key support/resistance, such as previous highs/lows, trendlines, important moving averages (50/200EMA). Swing trading stops are larger, but per-trade risk should still be within 2% of account.'
      },
      {
        question: 'Q3: Does swing trading require constant monitoring?',
        answer: 'No constant monitoring needed. Using H4 charts check every 4 hours, D1 charts check 1-2 times daily. Recommend checking during EU/US sessions (15:00-24:00 Beijing time), set price alerts. Swing trading advantage is time flexibility, very suitable for part-time traders with full-time jobs. But need to regularly monitor positions, adjust stops and targets timely.'
      },
      {
        question: 'Q4: How to handle overnight gaps in swing trading?',
        answer: 'Overnight gaps are a main swing trading risk. Solutions: 1) Set stop orders (don\'t rely on manual close); 2) Avoid positions before weekends and major events; 3) Use smaller positions (1-1.5% risk) to diversify; 4) Don\'t panic after gap, assess new price level and whether trend changed; 5) Consider brokers with Guaranteed Stop Loss (GSL), though higher cost but completely avoid gap slippage.'
      },
      {
        question: 'Q5: Is swing trading suitable for beginners?',
        answer: 'More suitable for beginners than day trading. Swing trading slower pace, provides ample time for analysis and decisions, less market noise, more reliable signals, less psychological pressure. But requires better patience (holding days), larger stops (100-200 pips), and stronger trend judgment ability. Recommend beginners first learn trend identification and multiple timeframe analysis, practice 3-6 months on demo, then start live trading with small positions.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/day-trading',
        icon: '⚡',
        title: 'Day Trading',
        description: 'Learn shorter-term trading strategies'
      },
      {
        href: '/education/trend-following',
        icon: '📈',
        title: 'Trend Following',
        description: 'Deep dive into trend identification and tracking'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Calculate optimal position size for swing trading'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Swing Trading?',
    ctaDescription: 'Join CC Killer training for professional swing trading strategies and medium-term trend analysis',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Day Trading',
    footerNextText: 'Scalping →',
    footerPrevHref: '/education/day-trading',
    footerNextHref: '/education/scalping',
  } as EducationPageContent,
};
