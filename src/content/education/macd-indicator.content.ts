import { EducationPageContent } from './forex-basics.content';

export const macdIndicatorContent = {
  zh: {
    title: 'MACD指标完整指南 - MACD交易策略与实战技巧 | CC Killer',
    description: '深入讲解MACD指标：DIF、DEA、MACD柱状图的计算公式，金叉死叉信号，背离形态识别。掌握MACD在外汇交易中的趋势确认和动能分析应用。',
    keywords: 'MACD指标, MACD策略, 金叉死叉, MACD背离, DIF DEA, 技术分析指标, 趋势指标',

    heroTitle: 'MACD指标完整指南',
    heroDescription: '掌握最经典的趋势动能指标，精准把握市场节奏',
    readingTime: '22分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-macd', title: '什么是MACD指标？' },
      { id: 'calculation', title: 'MACD的计算与参数设置' },
      { id: 'interpretation', title: '如何解读MACD信号' },
      { id: 'trading-strategies', title: '经典MACD交易策略' },
      { id: 'advanced-techniques', title: '进阶技巧与组合应用' },
      { id: 'common-mistakes', title: '常见错误与规避方法' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: MACD参数(12, 26, 9)可以修改吗？',
        answer: '可以，但需谨慎。(12, 26, 9)是经典参数，经过数十年市场验证。修改建议：短线交易可使用(5, 13, 5)或(6, 19, 9)获取更快信号；长线交易可使用(19, 39, 9)或(26, 52, 18)降低噪音。但任何修改都应在历史数据上充分回测。过度优化参数容易导致"曲线拟合"，实盘效果反而变差。'
      },
      {
        question: 'Q2: MACD金叉就一定要做多吗？',
        answer: '不一定！金叉只是潜在买入信号，需要结合市场环境。在下降趋势中的金叉往往是"死猫跳"反弹，而非趋势反转。正确做法：1) 判断整体趋势（使用均线或更大周期MACD）；2) 在上升趋势中，零轴上方的金叉才是强烈买入信号；3) 零轴下方的金叉谨慎对待，可能只是反弹；4) 结合价格形态和其他指标确认。'
      },
      {
        question: 'Q3: 什么是MACD背离？如何识别？',
        answer: 'MACD背离是价格走势与MACD指标走势相反的现象。顶背离：价格创新高，但MACD未创新高，预示上涨动能衰竭；底背离：价格创新低，但MACD未创新低，预示下跌动能衰竭。识别要点：1) 至少需要2个明显的高点/低点；2) 价格和MACD的高低点要对应；3) 周期越大，背离信号越可靠；4) 背离只是预警，需等待实际反转信号（如金叉/死叉）确认。'
      },
      {
        question: 'Q4: MACD柱状图有什么作用？',
        answer: 'MACD柱状图（Histogram）是DIF与DEA的差值，反映趋势强度变化。关键用途：1) 柱状图由负转正 = 金叉；由正转负 = 死叉；2) 柱状图扩大表示趋势加速，缩小表示趋势减速；3) 柱状图背离：价格创新高但柱状图未创新高，是最早期的反转信号；4) 零轴附近的柱状图快速收缩通常预示趋势即将转向。许多交易员主要看柱状图，而非DIF/DEA线。'
      },
      {
        question: 'Q5: 如何组合MACD与其他指标？',
        answer: '最佳组合策略：1) MACD + 移动均线：MACD确认动能，均线确认趋势方向；2) MACD + RSI：MACD看趋势，RSI看超买超卖，两者共振信号质量高；3) MACD + 支撑阻力：在关键位置的MACD信号更可靠；4) MACD + 价格形态：如头肩顶配合MACD死叉，双重底配合MACD金叉。避免使用过多指标（不超过3个），专注于信号质量而非数量。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/ema-moving-averages',
        icon: '📊',
        title: 'EMA均线',
        description: '理解MACD的计算基础'
      },
      {
        href: '/education/rsi-indicator',
        icon: '📈',
        title: 'RSI指标',
        description: '结合RSI识别超买超卖'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '根据MACD信号调整仓位'
      }
    ],

    ctaTitle: '想要系统学习技术分析？',
    ctaDescription: '加入 CC Killer 培训计划，掌握更多实战技术指标应用',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 肯特纳通道',
    footerNextText: 'EMA均线 →',
    footerPrevHref: '/education/keltner-channels',
    footerNextHref: '/education/ema-moving-averages',
  } as EducationPageContent,

  en: {
    title: 'Complete MACD Guide - MACD Trading Strategies and Practical Techniques | CC Killer',
    description: 'In-depth explanation of MACD indicator: DIF, DEA, histogram calculations, golden/death cross signals, divergence pattern recognition. Master MACD trend confirmation and momentum analysis in forex.',
    keywords: 'MACD indicator, MACD strategy, golden cross, MACD divergence, DIF DEA, technical analysis, trend indicator',

    heroTitle: 'Complete MACD Indicator Guide',
    heroDescription: 'Master the most classic trend momentum indicator for precise market timing',
    readingTime: '22 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-macd', title: 'What is MACD Indicator?' },
      { id: 'calculation', title: 'MACD Calculation and Parameters' },
      { id: 'interpretation', title: 'How to Interpret MACD Signals' },
      { id: 'trading-strategies', title: 'Classic MACD Trading Strategies' },
      { id: 'advanced-techniques', title: 'Advanced Techniques and Combinations' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Can I modify MACD parameters (12, 26, 9)?',
        answer: 'Yes, but cautiously. (12, 26, 9) are classic parameters validated by decades of market testing. Modification suggestions: short-term trading can use (5, 13, 5) or (6, 19, 9) for faster signals; long-term trading can use (19, 39, 9) or (26, 52, 18) to reduce noise. Any modification should be thoroughly backtested. Over-optimization leads to "curve fitting" with worse live results.'
      },
      {
        question: 'Q2: Should I always buy on MACD golden cross?',
        answer: 'Not always! Golden cross is only a potential buy signal, needs market context. In downtrends, golden crosses are often "dead cat bounces," not reversals. Correct approach: 1) Judge overall trend (using MAs or larger timeframe MACD); 2) In uptrends, golden cross above zero line is strong buy signal; 3) Be cautious of golden cross below zero, may just be a bounce; 4) Confirm with price patterns and other indicators.'
      },
      {
        question: 'Q3: What is MACD divergence? How to identify?',
        answer: 'MACD divergence occurs when price and MACD move in opposite directions. Bearish divergence: price makes new high, MACD doesn\'t, signals weakening upward momentum; Bullish divergence: price makes new low, MACD doesn\'t, signals weakening downward momentum. Key points: 1) Need at least 2 clear peaks/troughs; 2) Price and MACD peaks/troughs should correspond; 3) Larger timeframes = more reliable; 4) Divergence is warning, wait for actual reversal signal (cross) confirmation.'
      },
      {
        question: 'Q4: What is the purpose of MACD histogram?',
        answer: 'MACD histogram is the difference between DIF and DEA, reflecting trend strength changes. Key uses: 1) Histogram negative to positive = golden cross; positive to negative = death cross; 2) Expanding histogram = accelerating trend, contracting = decelerating; 3) Histogram divergence: price new high but histogram doesn\'t = earliest reversal signal; 4) Rapid histogram contraction near zero typically precedes trend reversal. Many traders focus primarily on histogram, not DIF/DEA lines.'
      },
      {
        question: 'Q5: How to combine MACD with other indicators?',
        answer: 'Best combination strategies: 1) MACD + Moving Averages: MACD confirms momentum, MAs confirm trend direction; 2) MACD + RSI: MACD for trend, RSI for overbought/oversold, confluence = high quality; 3) MACD + Support/Resistance: MACD signals at key levels more reliable; 4) MACD + Price Patterns: like head-shoulders with death cross, double bottom with golden cross. Avoid too many indicators (max 3), focus on signal quality not quantity.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/ema-moving-averages',
        icon: '📊',
        title: 'EMA Moving Averages',
        description: 'Understand MACD calculation foundation'
      },
      {
        href: '/education/rsi-indicator',
        icon: '📈',
        title: 'RSI Indicator',
        description: 'Combine RSI to identify overbought/oversold'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Adjust position size based on MACD signals'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Technical Analysis?',
    ctaDescription: 'Join CC Killer training to master more practical technical indicator applications',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Keltner Channels',
    footerNextText: 'EMA Moving Averages →',
    footerPrevHref: '/education/keltner-channels',
    footerNextHref: '/education/ema-moving-averages',
  } as EducationPageContent,
};
