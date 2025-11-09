import { EducationPageContent } from './forex-basics.content';

export const riskRewardContent = {
  zh: {
    title: '风险回报比详解 - R:R计算、最优比例与期望值优化完整指南 | CC Killer',
    description: '深入讲解外汇交易风险回报比核心知识：R:R计算公式、盈亏比与胜率关系、期望值计算、目标设定策略、最优比例选择。职业交易员分享实战盈亏比优化技巧，助你实现长期稳定盈利。',
    keywords: '风险回报比, 盈亏比, R:R比例, 期望值, 胜率平衡, 目标设定, 风险收益比, 交易数学',

    heroTitle: '风险回报比详解',
    heroDescription: '掌握盈亏比优化方法，实现胜率与回报的最佳平衡',
    readingTime: '30分钟',
    difficulty: '中级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-risk-reward', title: '什么是风险回报比？' },
      { id: 'calculation-methods', title: 'R:R计算与应用' },
      { id: 'winrate-relationship', title: '胜率与盈亏比关系' },
      { id: 'expectancy-formula', title: '期望值计算优化' },
      { id: 'target-setting', title: '目标设定策略' },
      { id: 'case-studies', title: '盈亏比案例对比' },
      { id: 'optimization-techniques', title: '盈亏比优化技巧' },
      { id: 'faq', title: '常见问题解答' },
    ],

    sections: [],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 风险回报比1:3和胜率60%哪个更重要？',
        answer: '两者都重要，但必须平衡。单独强调任何一个都是误区。真相：1) 高胜率低回报（如胜率70%但R:R只有1:0.5）反而亏损，因为7笔赢0.5R、3笔亏1R，净利3.5R-3R=0.5R，扣除点差后可能亏损；2) 高回报低胜率（如R:R为1:5但胜率只有10%）也难盈利，因为心理压力巨大，连续9笔止损很难坚持；3) 最佳平衡：胜率40-50%配R:R 1:2-1:3，或胜率55-65%配R:R 1:1.5-1:2。公式：期望值=胜率×平均盈利-败率×平均亏损。例如：50%胜率×2R-50%×1R=0.5R期望，长期盈利。建议：先测试你的策略真实胜率，再设定相应的R:R目标。不要追求不现实的"高胜率+高回报"，那是圣杯幻想。'
      },
      {
        question: 'Q2: 如何计算我的交易期望值？期望值多少算合格？',
        answer: '期望值（Expectancy）是评估策略盈利能力的核心指标。计算公式：期望值R = (胜率 × 平均盈利R数) - (败率 × 平均亏损R数)。示例：你的100笔交易数据：45笔盈利（胜率45%）、平均盈利2.2R；55笔亏损（败率55%）、平均亏损1R（因为严格止损）。期望值 = 0.45×2.2R - 0.55×1R = 0.99R - 0.55R = 0.44R。这意味着每笔交易平均赚0.44R。如果单笔风险$200，平均每笔赚$88，100笔赚$8,800。合格标准：期望值≥0.3R为合格（长期盈利），≥0.5R为优秀，≥1R为顶尖（极少数策略能达到）。负期望值说明策略亏损，必须改进。提示：期望值计算需要至少50-100笔交易数据，样本太小不准确。'
      },
      {
        question: 'Q3: 止盈目标应该设固定R:R还是根据市场结构动态调整？',
        answer: '推荐根据市场结构动态调整，但设定最低R:R标准。两种方法对比：固定R:R（如永远1:2）：优点：简单、一致、易于回测；缺点：可能在强势趋势中过早止盈，也可能在震荡市中目标过大难以达成。动态R:R（基于技术位）：优点：止盈设在关键阻力/支撑位，更符合市场结构，提高达成率；缺点：R:R不一致，可能某些交易只有1:1.2。最佳实践：1) 设定最低R:R要求（如1:1.5），低于此比例不进场；2) 止盈优先考虑技术位（前高/低、斐波那契、整数关口），但不超过3-5倍R:R（过大难以达成）；3) 分批止盈：50%仓位在1:2平仓，剩余50%在2:3或追踪止损；4) 记录数据：统计不同R:R设置的实际达成率，优化策略。例如：如果你的1:3目标达成率只有20%，但1:2达成率有55%，那1:2可能更优。'
      },
      {
        question: 'Q4: 如何提高我的风险回报比？是增大止盈还是缩小止损？',
        answer: '优先优化入场位置，而非简单增大止盈或缩小止损。常见错误做法：1) 缩小止损：从40点缩至20点，提高R:R，但止损太近容易被正常波动触发，胜率骤降；2) 增大止盈：从60点增至120点，提高R:R，但目标过大难以达成，实际盈利反而减少。正确优化方法：1) 改善入场时机：等待更好的入场点（如突破后回踩确认），可以用更小止损达到相同目标，自然提高R:R；2) 选择高波动时段：在欧美盘重叠时段交易，单边行情更容易达成大目标；3) 顺势而为：只做趋势方向交易，止盈更容易达成；4) 使用追踪止损：初始R:R可能1:2，但通过追踪止损最终实现1:3甚至1:5；5) 避免低质量交易：提高进场标准，只做高概率交易，自然提高胜率和R:R。实例：与其在震荡区域入场（止损30点、止盈60点、R:R 1:2、胜率30%），不如等待突破确认后入场（止损20点、止盈60点、R:R 1:3、胜率50%）。'
      },
      {
        question: 'Q5: 不同交易风格（剥头皮/日内/波段）应该用什么R:R？',
        answer: '不同风格对应不同最优R:R，不能一概而论。推荐设置：剥头皮（M1-M5，持仓<30分钟）：R:R 1:0.8-1:1.5，胜率需≥60%。原因：快进快出、点差成本高、市场噪音大，难以达成大目标。策略：高频交易、薄利多销。日内短线（M15-H1，持仓<4小时）：R:R 1:1.5-1:2.5，胜率≥45%。原因：有足够时间达成2-3倍目标，但不持仓过夜，避免跳空风险。策略：抓取日内波段，结合欧美盘波动。日内波段（H1-H4，持仓<24小时）：R:R 1:2-1:3，胜率≥40%。原因：顺应趋势，止盈空间大，可以追求更高回报。策略：趋势跟踪+关键位突破。多日波段（H4-D1，持仓数天）：R:R 1:3-1:5，胜率≥35%。原因：抓取大级别趋势，单笔盈利可观，可承受较低胜率。策略：趋势跟踪+追踪止损。关键：根据你的持仓时间和交易频率选择R:R，不要在M5图表追求1:5目标，也不要在D1图表只追求1:1。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: '风险管理基础',
        description: '学习风险管理核心原则'
      },
      {
        href: '/education/position-sizing',
        icon: '📊',
        title: '仓位控制与资金管理',
        description: '掌握仓位计算与优化'
      },
      {
        href: '/tools/risk-reward-calculator',
        icon: '🧮',
        title: '盈亏比计算器',
        description: '自动计算最优盈亏比'
      }
    ],

    ctaTitle: '想要优化你的盈亏比？',
    ctaDescription: '先了解自己的交易心理，才能更好地执行盈亏比策略',
    ctaPrimaryButton: '免费心理测评',
    ctaSecondaryButton: '了解培训计划',

    footerPrevText: '← 交易心理',
    footerNextText: '技术分析 →',
    footerPrevHref: '/education/trading-psychology',
    footerNextHref: '/education/bollinger-bands',
  } as EducationPageContent,

  en: {
    title: 'Risk-Reward Ratio Guide - R:R Calculation, Optimal Ratios & Expectancy Optimization | CC Killer',
    description: 'Comprehensive guide to forex risk-reward ratio: R:R calculation formula, profit/loss ratio and win rate relationship, expectancy calculation, target setting strategies, optimal ratio selection. Professional trader shares practical R:R optimization techniques for long-term stable profitability.',
    keywords: 'risk reward ratio, profit loss ratio, R:R ratio, expectancy, win rate balance, target setting, risk return ratio, trading mathematics',

    heroTitle: 'Risk-Reward Ratio Guide',
    heroDescription: 'Master profit/loss ratio optimization for optimal balance between win rate and reward',
    readingTime: '30 min',
    difficulty: 'Intermediate',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-risk-reward', title: 'What is Risk-Reward Ratio?' },
      { id: 'calculation-methods', title: 'R:R Calculation & Application' },
      { id: 'winrate-relationship', title: 'Win Rate & R:R Relationship' },
      { id: 'expectancy-formula', title: 'Expectancy Calculation Optimization' },
      { id: 'target-setting', title: 'Target Setting Strategies' },
      { id: 'case-studies', title: 'R:R Case Comparisons' },
      { id: 'optimization-techniques', title: 'R:R Optimization Techniques' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    sections: [],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Which is more important - 1:3 risk-reward or 60% win rate?',
        answer: 'Both important, but must be balanced. Emphasizing either alone is a misconception. Truth: 1) High win rate low reward (like 70% win rate but R:R only 1:0.5) actually loses, because 7 wins at 0.5R, 3 losses at 1R, net 3.5R-3R=0.5R, after spread may lose; 2) High reward low win rate (like R:R 1:5 but only 10% win rate) also hard to profit, because psychological pressure enormous, hard to persist through 9 consecutive losses; 3) Optimal balance: 40-50% win rate with R:R 1:2-1:3, or 55-65% win rate with R:R 1:1.5-1:2. Formula: Expectancy = Win Rate × Avg Profit - Loss Rate × Avg Loss. Example: 50% win rate × 2R - 50% × 1R = 0.5R expectancy, long-term profitable. Recommendation: first test your strategy\'s true win rate, then set corresponding R:R target. Don\'t pursue unrealistic "high win rate + high reward", that\'s holy grail fantasy.'
      },
      {
        question: 'Q2: How to calculate my trading expectancy? What expectancy is acceptable?',
        answer: 'Expectancy is core metric for evaluating strategy profitability. Calculation formula: Expectancy in R = (Win Rate × Avg Profit in R) - (Loss Rate × Avg Loss in R). Example: your 100 trade data: 45 wins (45% win rate), avg profit 2.2R; 55 losses (55% loss rate), avg loss 1R (due to strict stops). Expectancy = 0.45×2.2R - 0.55×1R = 0.99R - 0.55R = 0.44R. This means each trade averages 0.44R profit. If per-trade risk $200, average profit $88 per trade, 100 trades earn $8,800. Acceptable standards: expectancy ≥0.3R is acceptable (long-term profitable), ≥0.5R is excellent, ≥1R is top-tier (very few strategies achieve this). Negative expectancy means losing strategy, must improve. Tip: expectancy calculation needs at least 50-100 trade data, too small sample inaccurate.'
      },
      {
        question: 'Q3: Should profit target be fixed R:R or dynamically adjusted by market structure?',
        answer: 'Recommend dynamically adjust by market structure, but set minimum R:R standard. Two method comparison: Fixed R:R (like always 1:2): Pros: simple, consistent, easy to backtest; Cons: may exit too early in strong trends, also target too large in ranging markets hard to achieve. Dynamic R:R (based on technical levels): Pros: profit target at key resistance/support, better fits market structure, improves achievement rate; Cons: inconsistent R:R, some trades may only be 1:1.2. Best practice: 1) Set minimum R:R requirement (like 1:1.5), below this ratio don\'t enter; 2) Profit target prioritize technical levels (previous high/low, Fibonacci, round numbers), but not exceed 3-5x R:R (too large hard to achieve); 3) Partial profit taking: 50% position close at 1:2, remaining 50% at 2:3 or trailing stop; 4) Record data: track actual achievement rate of different R:R settings, optimize strategy. Example: if your 1:3 target achievement rate only 20%, but 1:2 achievement rate 55%, then 1:2 may be better.'
      },
      {
        question: 'Q4: How to improve my risk-reward ratio? Increase target or tighten stop?',
        answer: 'Prioritize optimizing entry position, not simply increasing target or tightening stop. Common wrong approaches: 1) Tighten stop: from 40 pips to 20 pips, improve R:R, but stop too tight easily hit by normal volatility, win rate plummets; 2) Increase target: from 60 pips to 120 pips, improve R:R, but target too large hard to achieve, actual profit actually decreases. Correct optimization methods: 1) Improve entry timing: wait for better entry (like breakout then retest confirmation), can use smaller stop to reach same target, naturally improve R:R; 2) Choose high volatility periods: trade during European-US overlap, trending moves easier to achieve large targets; 3) Trade with trend: only trade trend direction, profit target easier to achieve; 4) Use trailing stops: initial R:R may be 1:2, but through trailing stop ultimately achieve 1:3 or even 1:5; 5) Avoid low-quality trades: raise entry standards, only take high-probability trades, naturally improve win rate and R:R. Example: rather than enter in ranging area (30 pip stop, 60 pip target, R:R 1:2, 30% win rate), better wait for breakout confirmation (20 pip stop, 60 pip target, R:R 1:3, 50% win rate).'
      },
      {
        question: 'Q5: What R:R should different trading styles (scalping/day/swing) use?',
        answer: 'Different styles correspond to different optimal R:R, cannot generalize. Recommended settings: Scalping (M1-M5, hold <30 min): R:R 1:0.8-1:1.5, win rate need ≥60%. Reason: quick in-out, high spread cost, market noise large, hard to achieve large targets. Strategy: high frequency trading, small profits quick turnover. Intraday short-term (M15-H1, hold <4 hours): R:R 1:1.5-1:2.5, win rate ≥45%. Reason: sufficient time to achieve 2-3x targets, but no overnight holding, avoid gap risk. Strategy: capture intraday swings, combine European-US volatility. Intraday swing (H1-H4, hold <24 hours): R:R 1:2-1:3, win rate ≥40%. Reason: follow trends, large profit space, can pursue higher rewards. Strategy: trend following + key level breakouts. Multi-day swing (H4-D1, hold days): R:R 1:3-1:5, win rate ≥35%. Reason: capture large timeframe trends, single trade profit substantial, can tolerate lower win rate. Strategy: trend following + trailing stops. Key: choose R:R based on your holding time and trade frequency, don\'t pursue 1:5 targets on M5 chart, also don\'t only pursue 1:1 on D1 chart.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: 'Risk Management Basics',
        description: 'Learn core risk management principles'
      },
      {
        href: '/education/position-sizing',
        icon: '📊',
        title: 'Position Sizing & Money Management',
        description: 'Master position calculation and optimization'
      },
      {
        href: '/tools/risk-reward-calculator',
        icon: '🧮',
        title: 'Risk-Reward Calculator',
        description: 'Automatically calculate optimal R:R'
      }
    ],

    ctaTitle: 'Want to Optimize Your Risk-Reward Ratio?',
    ctaDescription: 'Understand your trading psychology first to better execute R:R strategies',
    ctaPrimaryButton: 'Free Psychology Test',
    ctaSecondaryButton: 'Learn About Training',

    footerPrevText: '← Trading Psychology',
    footerNextText: 'Technical Analysis →',
    footerPrevHref: '/education/trading-psychology',
    footerNextHref: '/education/bollinger-bands',
  } as EducationPageContent,
};
