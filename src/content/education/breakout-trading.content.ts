import { EducationPageContent } from './forex-basics.content';

export const breakoutTradingContent = {
  zh: {
    title: '突破交易完整指南 - Breakout Trading策略与假突破识别 | CC Killer',
    description: '深入讲解突破交易（Breakout Trading）：支撑阻力突破、成交量确认、假突破识别技巧、突破入场时机。掌握专业突破交易的完整系统。',
    keywords: '突破交易, Breakout Trading, 支撑阻力, 假突破, 成交量确认, 突破策略, 区间突破, 趋势突破',

    heroTitle: '突破交易完整指南',
    heroDescription: '掌握突破交易精髓，捕捉爆发性行情',
    readingTime: '24分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-breakout', title: '什么是突破交易？' },
      { id: 'breakout-types', title: '突破类型与识别' },
      { id: 'entry-timing', title: '突破入场时机' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'false-breakout', title: '假突破识别要点' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 如何区分真假突破？',
        answer: '真突破特征：1) 突破K线实体大，收盘价远离突破位；2) 成交量显著放大（如有数据）；3) 突破后价格不回测或回测后继续运行；4) 配合其他指标确认（MACD金叉/死叉、RSI突破50）；5) 发生在高流动性时段。假突破特征：1) 小实体K线带长影线；2) 收盘价未能站稳突破位；3) 无成交量配合；4) 快速回测并跌破突破位；5) 发生在低流动性或新闻时段。建议等待收盘确认，或等待回测后再入场。'
      },
      {
        question: 'Q2: 突破交易的最佳止损位置在哪里？',
        answer: '止损设置原则：设在"突破失效"位置。常用方法：1) 突破点下方/上方：向上突破止损设在突破阻力位下方20-30点；2) 区间另一边界：突破区间上沿，止损设在区间下沿；3) 突破K线最低点：保守做法，给予更多空间；4) ATR动态止损：突破点 - 1.5倍ATR。止损大小取决于时间框架和突破幅度，但单笔风险仍应控制在账户2%以内。'
      },
      {
        question: 'Q3: 突破交易应该追入还是等回测？',
        answer: '两种方法各有利弊。激进追入：优点是不错过强势突破，缺点是可能遭遇假突破，风险回报比差。保守等回测：优点是确认突破有效性，更好的入场价格，缺点是强势突破可能不回测直接上涨/下跌。建议策略：如果突破强劲（大阳线/大阴线、成交量放大、突破重要位置），可追入50%仓位；如果突破犹豫（小K线、无成交量），等待回测或放弃。经验丰富者可根据市场结构灵活选择。'
      },
      {
        question: 'Q4: 突破交易的目标利润如何设定？',
        answer: '有三种常用方法：1) 区间高度测算：突破区间高度的1-2倍。例如区间1.2700-1.2800（100点），向上突破目标1.2900-1.3000；2) 前高/低位置：突破后运行至下一个重要阻力/支撑位；3) 风险回报比：固定使用2:1或3:1风险回报比。建议使用追踪止损，因为强势突破后趋势可能延续数日，固定止盈可能过早离场错失大行情。部分平仓策略：第一目标平50%，剩余50%用追踪止损持有。'
      },
      {
        question: 'Q5: 什么时候不应该做突破交易？',
        answer: '避免以下情况：1) 低流动性时段（亚洲午间、周五晚间）；2) 重大新闻发布前后30分钟（假突破概率高）；3) 市场开盘/收盘时段（跳空风险）；4) 过度延伸后的突破（价格已远离MA，超买/超卖）；5) 窄幅震荡后的小突破（区间高度<50点）；6) 多次假突破后的再次突破（市场可能在试探）。最佳突破机会：经过充分盘整（至少3小时或1天以上）、区间明确、突破位重要、发生在高流动性时段。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/trend-following',
        icon: '📈',
        title: '趋势跟踪',
        description: '学习突破后的趋势跟踪方法'
      },
      {
        href: '/education/day-trading',
        icon: '⚡',
        title: '日内交易',
        description: '掌握日内突破交易技巧'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '计算突破交易的仓位大小'
      }
    ],

    ctaTitle: '想要系统学习突破交易？',
    ctaDescription: '加入 CC Killer 培训计划，获取专业突破交易策略和实时信号',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 趋势跟踪',
    footerNextText: '技术指标 →',
    footerPrevHref: '/education/trend-following',
    footerNextHref: '/education/bollinger-bands',
  } as EducationPageContent,

  en: {
    title: 'Complete Breakout Trading Guide - Strategies and False Breakout Identification | CC Killer',
    description: 'In-depth explanation of Breakout Trading: support/resistance breaks, volume confirmation, false breakout identification, breakout entry timing. Master professional breakout trading complete system.',
    keywords: 'breakout trading, support resistance, false breakout, volume confirmation, breakout strategy, range breakout, trend breakout',

    heroTitle: 'Complete Breakout Trading Guide',
    heroDescription: 'Master breakout trading essentials to catch explosive moves',
    readingTime: '24 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-breakout', title: 'What is Breakout Trading?' },
      { id: 'breakout-types', title: 'Breakout Types and Identification' },
      { id: 'entry-timing', title: 'Breakout Entry Timing' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'false-breakout', title: 'False Breakout Identification Essentials' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: How to distinguish true from false breakouts?',
        answer: 'True breakout characteristics: 1) Large breakout candle body, close far from breakout level; 2) Significant volume increase (if data available); 3) Price doesn\'t retest or continues after retest; 4) Other indicator confirmation (MACD golden/death cross, RSI breaking 50); 5) Occurs during high liquidity session. False breakout: 1) Small body candle with long shadow; 2) Close fails to hold above breakout; 3) No volume confirmation; 4) Quickly retests and breaks below breakout; 5) Occurs during low liquidity or news. Recommend waiting for close confirmation, or entering after retest.'
      },
      {
        question: 'Q2: Where is the best stop-loss for breakout trading?',
        answer: 'Stop-loss principle: set at "breakout invalidation" position. Common methods: 1) Below/above breakout point: upward breakout stop 20-30 pips below resistance; 2) Opposite range boundary: breaking range top, stop at range bottom; 3) Breakout candle low: conservative approach, more room; 4) ATR dynamic stop: breakout point - 1.5x ATR. Stop size depends on timeframe and breakout magnitude, but single trade risk should stay within 2% of account.'
      },
      {
        question: 'Q3: Should I chase breakout or wait for retest?',
        answer: 'Both methods have pros/cons. Aggressive chase: advantage is not missing strong breakout, disadvantage is possible false breakout, poor risk-reward. Conservative wait for retest: advantage is confirming breakout validity, better entry price, disadvantage is strong breakout may not retest. Recommended strategy: if breakout strong (large bullish/bearish candle, volume increase, breaking important level), can chase 50% position; if breakout hesitant (small candle, no volume), wait for retest or skip. Experienced traders can choose flexibly based on market structure.'
      },
      {
        question: 'Q4: How to set profit targets for breakout trading?',
        answer: 'Three common methods: 1) Range height projection: 1-2x breakout range height. E.g., range 1.2700-1.2800 (100 pips), upward breakout target 1.2900-1.3000; 2) Previous high/low: run to next important resistance/support after breakout; 3) Risk-reward ratio: fixed 2:1 or 3:1 risk-reward. Recommend using trailing stop, because after strong breakout trend may continue for days, fixed target may exit too early missing big move. Partial profit strategy: close 50% at first target, hold remaining 50% with trailing stop.'
      },
      {
        question: 'Q5: When should I avoid breakout trading?',
        answer: 'Avoid these situations: 1) Low liquidity sessions (Asian afternoon, Friday evening); 2) 30 minutes around major news releases (high false breakout probability); 3) Market open/close periods (gap risk); 4) Breakouts after over-extension (price far from MA, overbought/oversold); 5) Small breakouts after narrow range (range height <50 pips); 6) Breakout after multiple false breakouts (market may be testing). Best breakout opportunities: after sufficient consolidation (at least 3 hours or 1+ day), clear range, important breakout level, occurs during high liquidity session.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/trend-following',
        icon: '📈',
        title: 'Trend Following',
        description: 'Learn trend following after breakouts'
      },
      {
        href: '/education/day-trading',
        icon: '⚡',
        title: 'Day Trading',
        description: 'Master intraday breakout trading'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Calculate breakout trading position size'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Breakout Trading?',
    ctaDescription: 'Join CC Killer training for professional breakout strategies and real-time signals',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Trend Following',
    footerNextText: 'Technical Indicators →',
    footerPrevHref: '/education/trend-following',
    footerNextHref: '/education/bollinger-bands',
  } as EducationPageContent,
};
