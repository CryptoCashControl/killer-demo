import { EducationPageContent } from './forex-basics.content';

export const candlestickPatternsContent = {
  zh: {
    title: 'K线形态识别指南 - Doji、Hammer、Engulfing等反转与持续形态详解 | CC Killer',
    description: '深入讲解外汇K线形态：Doji十字星、Hammer锤子线、Engulfing吞没形态、Morning/Evening Star等。掌握反转形态、持续形态识别技巧，提高交易胜率。',
    keywords: 'K线形态, 蜡烛图, Doji, Hammer, Engulfing, Morning Star, K线识别, 反转形态',

    heroTitle: 'K线形态识别指南',
    heroDescription: '掌握K线语言，读懂市场情绪与多空博弈',
    readingTime: '32分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-22',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'candlestick-basics', title: 'K线基础与解读' },
      { id: 'reversal-patterns', title: '反转形态深度分析' },
      { id: 'continuation-patterns', title: '持续形态识别' },
      { id: 'pattern-reliability', title: '形态可靠性评估' },
      { id: 'false-signals', title: '假信号识别与规避' },
      { id: 'practical-cases', title: '实战案例分析' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: K线形态的胜率到底有多高？',
        answer: '单纯依靠K线形态交易，胜率通常在50-60%。但结合其他因素可提升至70%+：1) 在关键支撑/阻力位出现；2) 顺应H4/D1主趋势；3) 成交量配合（看涨形态伴随量增）；4) 多个形态同时出现（如锤子线+看涨吞没）。记住：K线形态是"概率游戏"而非"必胜法则"，需要配合风险管理。'
      },
      {
        question: 'Q2: 为什么我看到的K线形态总是失败？',
        answer: '常见原因：1) 逆势交易（在下降趋势中做多看涨形态）；2) 位置错误（在无关紧要的位置交易形态）；3) 未确认（形态未完成就提前入场）；4) 忽视更大时间框架（M5形态可能被H1趋势压制）；5) 过度解读（强行看出形态）。解决方法：只交易出现在关键位置、顺应主趋势、收盘确认的形态。'
      },
      {
        question: 'Q3: 单根K线形态（如Doji、Hammer）可靠吗？',
        answer: '单根K线形态可靠性较低（胜率50-55%），需要满足以下条件才值得交易：1) 出现在关键支撑/阻力位（前高低、整数关口）；2) 前后K线配合（Hammer前是大阴线，后是阳线）；3) 成交量放大；4) 顺应更大时间框架趋势。相比之下，多根K线组合形态（如Morning Star、Three White Soldiers）更可靠（胜率60-70%）。'
      },
      {
        question: 'Q4: 如何区分真正的反转和仅仅是回调？',
        answer: '真正的反转特征：1) 出现在趋势末端（如上升趋势运行300点后）；2) 出现多个反转信号（Evening Star + MACD死叉 + RSI超买）；3) 更大时间框架也出现反转（H1和H4都出现Evening Star）；4) 成交量显著放大。回调特征：1) 出现在趋势中段；2) 单一反转K线；3) 仅在小时间框架出现；4) 成交量正常。建议：趋势初期和中期的反转形态主要用于"回调入场"而非"反转交易"。'
      },
      {
        question: 'Q5: 哪些K线形态最值得关注？',
        answer: '新手优先掌握5种高可靠性形态（按重要性排序）：1) Engulfing吞没形态（胜率65-70%，信号强烈，易识别）；2) Pin Bar（胜率60-65%，在关键位置极有效）；3) Inside Bar（持续形态，突破方向胜率70%）；4) Morning/Evening Star（胜率65-70%，但出现频率低）；5) Doji十字星（辅助信号，单独使用胜率低）。避免：过度复杂的多K线组合（如Three Line Strike），出现频率低且难以实时识别。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/support-resistance',
        icon: '📏',
        title: '支撑阻力',
        description: 'K线形态结合关键位置使用'
      },
      {
        href: '/education/price-action',
        icon: '📈',
        title: '价格行为交易',
        description: '裸K交易的完整策略'
      },
      {
        href: '/splan/join-us',
        icon: '🎓',
        title: '培训课程',
        description: '系统学习技术分析'
      }
    ],

    ctaTitle: '想要系统学习K线形态交易？',
    ctaDescription: '加入CC Killer培训计划，获取专业K线分析工具和实战指导',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费技术分析工具',

    footerPrevText: '← 市场参与者',
    footerNextText: '支撑阻力 →',
    footerPrevHref: '/education/market-participants',
    footerNextHref: '/education/support-resistance',
  } as EducationPageContent,

  en: {
    title: 'Candlestick Patterns Guide - Doji, Hammer, Engulfing Reversal & Continuation Patterns | CC Killer',
    description: 'In-depth explanation of forex candlestick patterns: Doji, Hammer, Engulfing, Morning/Evening Star, etc. Master reversal and continuation pattern recognition to improve trading win rate.',
    keywords: 'candlestick patterns, Doji, Hammer, Engulfing, Morning Star, candle recognition, reversal patterns',

    heroTitle: 'Candlestick Patterns Guide',
    heroDescription: 'Master candlestick language to understand market sentiment and bull-bear dynamics',
    readingTime: '32 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 22, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'candlestick-basics', title: 'Candlestick Basics & Reading' },
      { id: 'reversal-patterns', title: 'Reversal Patterns Analysis' },
      { id: 'continuation-patterns', title: 'Continuation Pattern Recognition' },
      { id: 'pattern-reliability', title: 'Pattern Reliability Assessment' },
      { id: 'false-signals', title: 'False Signal Identification' },
      { id: 'practical-cases', title: 'Practical Case Studies' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: What is the actual win rate of candlestick patterns?',
        answer: 'Trading solely on candlestick patterns typically yields 50-60% win rate. But combining with other factors can improve to 70%+: 1) Appears at key support/resistance; 2) Aligns with H4/D1 main trend; 3) Volume confirmation (bullish pattern with volume increase); 4) Multiple patterns simultaneously (e.g., hammer + bullish engulfing). Remember: candlestick patterns are a "probability game" not a "guaranteed win", requires risk management.'
      },
      {
        question: 'Q2: Why do the patterns I see always fail?',
        answer: 'Common reasons: 1) Counter-trend trading (longing bullish pattern in downtrend); 2) Wrong location (trading patterns in irrelevant positions); 3) No confirmation (entering before pattern completes); 4) Ignoring larger timeframes (M5 pattern suppressed by H1 trend); 5) Over-interpretation (forcing pattern recognition). Solution: Only trade patterns appearing at key locations, with main trend, after close confirmation.'
      },
      {
        question: 'Q3: Are single candlestick patterns (like Doji, Hammer) reliable?',
        answer: 'Single candlestick patterns have lower reliability (50-55% win rate), worth trading only when meeting: 1) At key support/resistance (previous highs/lows, round numbers); 2) Surrounding candle support (Hammer preceded by large bearish, followed by bullish); 3) Volume increase; 4) Aligns with larger timeframe trend. In comparison, multi-candle combinations (like Morning Star, Three White Soldiers) more reliable (60-70% win rate).'
      },
      {
        question: 'Q4: How to distinguish true reversal from mere pullback?',
        answer: 'True reversal characteristics: 1) At trend end (e.g., after 300 pip uptrend); 2) Multiple reversal signals (Evening Star + MACD bearish cross + RSI overbought); 3) Larger timeframes also reverse (H1 and H4 both show Evening Star); 4) Significant volume increase. Pullback characteristics: 1) At trend middle; 2) Single reversal candle; 3) Only on small timeframe; 4) Normal volume. Recommendation: Reversal patterns in early/mid trend mainly for "pullback entry" not "reversal trading".'
      },
      {
        question: 'Q5: Which candlestick patterns are most worth focusing on?',
        answer: 'Beginners priority master 5 high-reliability patterns (by importance): 1) Engulfing (65-70% win rate, strong signal, easy identify); 2) Pin Bar (60-65% win rate, extremely effective at key levels); 3) Inside Bar (continuation, breakout direction 70% win rate); 4) Morning/Evening Star (65-70% win rate, but low frequency); 5) Doji (auxiliary signal, low win rate alone). Avoid: Overly complex multi-candle combinations (like Three Line Strike), low frequency and hard to identify real-time.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/support-resistance',
        icon: '📏',
        title: 'Support Resistance',
        description: 'Use patterns with key levels'
      },
      {
        href: '/education/price-action',
        icon: '📈',
        title: 'Price Action Trading',
        description: 'Complete naked trading strategy'
      },
      {
        href: '/splan/join-us',
        icon: '🎓',
        title: 'Training Course',
        description: 'Systematically learn technical analysis'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Candlestick Trading?',
    ctaDescription: 'Join CC Killer training for professional candlestick analysis tools and practical guidance',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Technical Analysis Tools',

    footerPrevText: '← Market Participants',
    footerNextText: 'Support Resistance →',
    footerPrevHref: '/education/market-participants',
    footerNextHref: '/education/support-resistance',
  } as EducationPageContent,
};
