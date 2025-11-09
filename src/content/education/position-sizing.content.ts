import { EducationPageContent } from './forex-basics.content';

export const positionSizingContent = {
  zh: {
    title: '仓位控制与资金管理 - 凯利公式与动态仓位调整策略 | CC Killer',
    description: '深入讲解外汇交易仓位控制核心方法：固定比例法、凯利公式、ATR动态调整、最大回撤控制。职业交易员分享实战仓位管理技巧，助你优化资金利用率并控制风险。',
    keywords: '仓位控制, 资金管理, 凯利公式, 固定比例法, 动态仓位, ATR仓位, 最大回撤, 外汇仓位管理',

    heroTitle: '仓位控制与资金管理',
    heroDescription: '掌握科学仓位计算方法，实现资金高效利用与风险控制',
    readingTime: '28分钟',
    difficulty: '中级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-position-sizing', title: '什么是仓位控制？' },
      { id: 'fixed-fractional', title: '固定比例法详解' },
      { id: 'kelly-criterion', title: '凯利公式应用' },
      { id: 'dynamic-sizing', title: '动态仓位调整策略' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'advanced-optimization', title: '仓位优化技巧' },
      { id: 'faq', title: '常见问题解答' },
    ],

    sections: [],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 固定比例法和凯利公式，哪个更适合新手？',
        answer: '固定比例法更适合新手。它简单、易执行、风险可控，只需确定一个固定的风险百分比（如1-2%）即可。凯利公式虽然理论上能实现最优增长，但需要准确的胜率和平均盈亏比数据，且推荐使用半凯利或1/4凯利降低波动。新手应先掌握固定比例法（至少6-12个月），积累足够数据后再考虑凯利公式。记住：简单且执行到位的固定比例法，远胜于计算错误的凯利公式。'
      },
      {
        question: 'Q2: 账户增长后，应该如何调整仓位？',
        answer: '仓位应该随账户净值自然增长，而非主观调整。例如：初始$10,000账户，2%风险=$200/笔。6个月后账户增至$15,000，2%风险=$300/笔。仓位自动随账户增长而增加，无需刻意调整。关键原则：1) 始终保持固定风险百分比（如2%）；2) 基于当前账户净值计算，而非初始资金；3) 每周或每月更新一次计算；4) 绝不因为"手感好"而主观增加风险百分比。复利增长的秘诀在于稳定的百分比，而非冲动的加仓。'
      },
      {
        question: 'Q3: 如何确定合理的止损距离来计算仓位？',
        answer: '止损距离应基于市场结构，而非固定点数。推荐方法：1) 技术止损：设置在关键支撑/阻力位外侧（如前低点下方10-20点）；2) ATR止损：使用1-2倍ATR值作为止损距离，自动适应市场波动；3) 百分比止损：根据账户风险反推，如$10,000账户、2%风险=$200，如果开1手EUR/USD（每点$10），止损=200÷10=20点。不同时间框架建议：M5图表15-25点，M15图表25-40点，H1图表40-60点，H4图表60-100点。关键是先确定止损位置，再计算仓位，而非先决定仓位再设止损。'
      },
      {
        question: 'Q4: 连续亏损时应该减仓还是保持原仓位？',
        answer: '视情况而定，但建议适度减仓。专业做法：1) 连续3笔亏损后，风险从2%降至1.5%，观察是否是策略问题还是运气不佳；2) 连续5笔亏损后，降至1%，并暂停交易1-2天，重新评估策略；3) 如果回撤超过15%，降至0.5-1%，或切换到模拟账户练习。原因：连续亏损可能意味着市场环境变化、策略失效，或者你的心理状态受影响。减仓可以：降低进一步回撤风险、减轻心理压力、给你时间冷静分析。记住：保护剩余本金比快速回本更重要。'
      },
      {
        question: 'Q5: 是否应该对不同货币对使用不同的仓位大小？',
        answer: '应该！不同货币对的波动性差异巨大，应该调整仓位以保持风险一致。方法：1) 使用ATR标准化：高波动性货币对（GBP/JPY、GBP/NZD）的ATR可能是低波动性货币对（EUR/CHF）的3-5倍，相应减少仓位；2) 固定风险金额：无论交易什么货币对，单笔风险都是$200，但EUR/USD可能开0.7手，GBP/JPY只开0.3手；3) 点差成本考虑：高点差货币对（exotics）应减小仓位，因为成本占比高。简单规则：主要货币对（EUR/USD、GBP/USD）使用标准仓位，交叉盘减少20-30%，exotic货币对减少50%或避免交易。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: '风险管理基础',
        description: '学习风险管理核心原则和2%规则'
      },
      {
        href: '/education/stop-loss-strategies',
        icon: '🎯',
        title: '止损策略大全',
        description: '掌握各种止损设置技巧'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '自动计算最佳仓位大小'
      }
    ],

    ctaTitle: '想要优化你的仓位管理？',
    ctaDescription: '使用 CC Killer 专业仓位计算工具，实现自动化风险控制',
    ctaPrimaryButton: '免费使用工具',
    ctaSecondaryButton: '了解培训计划',

    footerPrevText: '← 风险管理',
    footerNextText: '止损策略 →',
    footerPrevHref: '/education/risk-management',
    footerNextHref: '/education/stop-loss-strategies',
  } as EducationPageContent,

  en: {
    title: 'Position Sizing & Money Management - Kelly Criterion & Dynamic Position Strategies | CC Killer',
    description: 'Comprehensive guide to forex position sizing methods: fixed fractional, Kelly Criterion, ATR dynamic adjustment, maximum drawdown control. Professional trader shares practical position management techniques to optimize capital efficiency and control risk.',
    keywords: 'position sizing, money management, Kelly Criterion, fixed fractional, dynamic position, ATR position, maximum drawdown, forex position management',

    heroTitle: 'Position Sizing & Money Management',
    heroDescription: 'Master scientific position calculation for efficient capital utilization and risk control',
    readingTime: '28 min',
    difficulty: 'Intermediate',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-position-sizing', title: 'What is Position Sizing?' },
      { id: 'fixed-fractional', title: 'Fixed Fractional Method' },
      { id: 'kelly-criterion', title: 'Kelly Criterion Application' },
      { id: 'dynamic-sizing', title: 'Dynamic Position Strategies' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'advanced-optimization', title: 'Position Optimization Techniques' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    sections: [],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Fixed fractional or Kelly Criterion - which is better for beginners?',
        answer: 'Fixed fractional is better for beginners. It\'s simple, easy to execute, risk-controlled - just determine a fixed risk percentage (1-2%). Kelly Criterion, while theoretically achieving optimal growth, requires accurate win rate and average profit/loss data, and recommends using half-Kelly or 1/4-Kelly to reduce volatility. Beginners should master fixed fractional first (at least 6-12 months), accumulate sufficient data, then consider Kelly. Remember: simple and well-executed fixed fractional far exceeds incorrectly calculated Kelly Criterion.'
      },
      {
        question: 'Q2: How should position be adjusted as account grows?',
        answer: 'Position should naturally grow with account equity, not subjectively adjusted. Example: Initial $10,000 account, 2% risk = $200/trade. After 6 months account grows to $15,000, 2% risk = $300/trade. Position automatically increases with account growth, no deliberate adjustment needed. Key principles: 1) Always maintain fixed risk percentage (e.g., 2%); 2) Calculate based on current account equity, not initial capital; 3) Update calculation weekly or monthly; 4) Never subjectively increase risk percentage because "feeling good". Secret of compound growth is stable percentage, not impulsive position increases.'
      },
      {
        question: 'Q3: How to determine reasonable stop distance for position calculation?',
        answer: 'Stop distance should be based on market structure, not fixed pips. Recommended methods: 1) Technical stop: set outside key support/resistance (e.g., 10-20 pips below previous low); 2) ATR stop: use 1-2x ATR value as stop distance, automatically adapts to market volatility; 3) Percentage stop: reverse calculate from account risk, e.g., $10,000 account, 2% risk = $200, if opening 1 lot EUR/USD ($10/pip), stop = 200÷10 = 20 pips. Different timeframe recommendations: M5 chart 15-25 pips, M15 chart 25-40 pips, H1 chart 40-60 pips, H4 chart 60-100 pips. Key is determine stop location first, then calculate position, not decide position first then set stop.'
      },
      {
        question: 'Q4: Should position be reduced during consecutive losses or maintained?',
        answer: 'Depends on situation, but recommend moderate reduction. Professional approach: 1) After 3 consecutive losses, reduce risk from 2% to 1.5%, observe if strategy issue or bad luck; 2) After 5 consecutive losses, reduce to 1%, pause trading 1-2 days, re-evaluate strategy; 3) If drawdown exceeds 15%, reduce to 0.5-1%, or switch to demo account practice. Reason: consecutive losses may indicate market environment change, strategy failure, or your mental state affected. Reducing position can: lower further drawdown risk, reduce psychological pressure, give you time to calmly analyze. Remember: protecting remaining capital more important than quick recovery.'
      },
      {
        question: 'Q5: Should different currency pairs use different position sizes?',
        answer: 'Yes! Different pairs have vastly different volatility, should adjust position to maintain consistent risk. Methods: 1) Use ATR standardization: high volatility pairs (GBP/JPY, GBP/NZD) ATR may be 3-5x low volatility pairs (EUR/CHF), reduce position accordingly; 2) Fixed risk amount: regardless of pair traded, per-trade risk is $200, but EUR/USD might open 0.7 lots, GBP/JPY only 0.3 lots; 3) Spread cost consideration: high spread pairs (exotics) should reduce position as cost proportion high. Simple rule: major pairs (EUR/USD, GBP/USD) use standard position, crosses reduce 20-30%, exotic pairs reduce 50% or avoid trading.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: 'Risk Management Basics',
        description: 'Learn core risk management principles and 2% rule'
      },
      {
        href: '/education/stop-loss-strategies',
        icon: '🎯',
        title: 'Stop Loss Strategies',
        description: 'Master various stop-loss setting techniques'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Automatically calculate optimal position size'
      }
    ],

    ctaTitle: 'Want to Optimize Your Position Management?',
    ctaDescription: 'Use CC Killer professional position calculation tools for automated risk control',
    ctaPrimaryButton: 'Use Tools Free',
    ctaSecondaryButton: 'Learn About Training',

    footerPrevText: '← Risk Management',
    footerNextText: 'Stop Loss Strategies →',
    footerPrevHref: '/education/risk-management',
    footerNextHref: '/education/stop-loss-strategies',
  } as EducationPageContent,
};
