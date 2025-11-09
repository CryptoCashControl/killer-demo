import { EducationPageContent } from './forex-basics.content';

export const stopLossStrategiesContent = {
  zh: {
    title: '止损策略大全 - 固定止损、ATR止损、技术止损与追踪止损完整指南 | CC Killer',
    description: '深入讲解外汇交易止损策略核心方法：固定点数止损、百分比止损、ATR动态止损、技术位止损、时间止损、追踪止损。职业交易员分享实战止损设置技巧，助你保护资金并优化盈利。',
    keywords: '止损策略, 止损设置, ATR止损, 技术止损, 追踪止损, 移动止损, 止损执行, 外汇止损',

    heroTitle: '止损策略大全',
    heroDescription: '掌握各类止损技巧，保护资金实现风险可控盈利',
    readingTime: '32分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'why-stop-loss', title: '为什么止损是生命线？' },
      { id: 'fixed-stop-loss', title: '固定止损策略' },
      { id: 'atr-stop-loss', title: 'ATR动态止损' },
      { id: 'technical-stop-loss', title: '技术位止损策略' },
      { id: 'trailing-stop-loss', title: '追踪止损技巧' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'stop-loss-discipline', title: '止损执行纪律' },
      { id: 'faq', title: '常见问题解答' },
    ],

    sections: [],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 止损总是被打掉后价格就反转，是不是被猎杀了？',
        answer: '这是最常见的误解。大多数情况不是"猎杀"，而是止损位置设置不当。真相：1) 止损设在整数关口（如1.1000）或前低点/前高点正好位置，容易被触及；2) 止损距离太近，正常市场波动就能触发；3) 确认偏差：你只记住被止损后反转的交易，忘记了止损救了你的交易。解决方法：1) 止损设在关键技术位外侧10-20点，而非正好位置；2) 使用ATR止损适应市场波动；3) 统计你的止损数据，真正被"猎杀"的比例通常<5%。记住：即使10%被猎杀，设止损仍比不设安全。'
      },
      {
        question: 'Q2: 止损距离多大合适？太近容易被打，太远亏损太大',
        answer: '止损距离应基于市场结构和波动性，而非主观判断。推荐方法：1) ATR倍数法：使用1-2倍ATR值。EUR/USD的14期ATR如果是15点，止损设置15-30点；GBP/JPY的ATR如果是50点，止损设置50-100点；2) 技术位法：止损设在关键支撑/阻力外侧。如果入场价1.1050，前低点1.1030，止损设1.1020（低于前低10点）；3) 风险倒推法：基于账户风险反推。如$10,000账户、2%风险=$200、开1手EUR/USD（每点$10），止损=200÷10=20点。不同时间框架：M5为15-25点、M15为25-40点、H1为40-60点、H4为60-100点、D1为100-200点。关键是一致性，而非完美。'
      },
      {
        question: 'Q3: 追踪止损应该何时启动？移动多快？',
        answer: '追踪止损的最佳实践：启动时机：1) 价格达到1R（1倍风险回报）后，移动止损至盈亏平衡点（入场价）；2) 价格达到1.5R后，启动追踪止损，每移动10-20点就跟进止损10-15点；3) 价格达到2R后，锁定至少1R利润，追踪距离可缩短。移动速度：1) 短线交易（M5-M15）：快速追踪，止损距离10-20点，每移动15点就跟进10点；2) 日内交易（H1）：中等追踪，止损距离20-40点，每移动30点就跟进20点；3) 波段交易（H4-D1）：慢速追踪，止损距离50-100点，每移动100点就跟进50点。技巧：使用抛物线SAR或移动平均线作为追踪止损参考。'
      },
      {
        question: 'Q4: 能否使用心理止损（不设置止损单，手动平仓）？',
        answer: '绝对不行！心理止损是95%交易者亏损的主要原因之一。为什么心理止损失败：1) 网络故障、平台卡顿时无法手动平仓，小亏变爆仓；2) 情绪干扰：看到亏损扩大，心理上产生"也许会反转"的幻想，延迟平仓；3) 反应延迟：从发现价格到点击平仓需要5-30秒，期间价格可能继续恶化；4) 周末跳空：如果持仓过周末，周一开盘跳空100-300点，心理止损完全无效。职业交易者100%使用止损单，从不依赖心理止损。唯一例外：剥头皮交易者（持仓<5分钟）可能使用心理止损，但必须有严格纪律和快速执行能力。对于日内及以上时间框架，必须设置止损单。'
      },
      {
        question: 'Q5: 止损被触发后应该立即反手开仓吗？',
        answer: '99%的情况不应该。止损被触发说明你的分析错误，市场走势与预期相反。此时反手开仓属于"情绪化交易"，风险极高。问题：1) 止损后反手是基于"不甘心"而非理性分析；2) 价格触发止损后可能只是短暂波动，并非趋势反转；3) 连续止损+反手容易导致双重亏损（原方向止损、反手方向再止损）。正确做法：1) 止损后暂停5-30分钟，冷静分析为何止损；2) 重新评估市场结构，是否有明确的反方向信号？3) 如果确实出现反方向高概率机会（如突破关键阻力、形成反转形态），可以考虑新开仓，但必须重新计算仓位和止损。唯一例外：突破失败交易策略，专门设计在假突破后反手，但这需要严格的规则和回测验证。'
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
        href: '/education/position-sizing',
        icon: '📊',
        title: '仓位控制与资金管理',
        description: '掌握仓位计算与动态调整'
      },
      {
        href: '/education/trading-psychology',
        icon: '🧠',
        title: '交易心理学',
        description: '了解止损执行中的心理障碍'
      }
    ],

    ctaTitle: '想要优化你的止损策略？',
    ctaDescription: '使用 CC Killer 专业止损工具，实现自动化止损管理',
    ctaPrimaryButton: '免费使用工具',
    ctaSecondaryButton: '了解培训计划',

    footerPrevText: '← 仓位控制',
    footerNextText: '交易心理 →',
    footerPrevHref: '/education/position-sizing',
    footerNextHref: '/education/trading-psychology',
  } as EducationPageContent,

  en: {
    title: 'Complete Stop Loss Strategies - Fixed, ATR, Technical & Trailing Stops Guide | CC Killer',
    description: 'Comprehensive guide to forex stop-loss strategies: fixed pip stops, percentage stops, ATR dynamic stops, technical stops, time stops, trailing stops. Professional trader shares practical stop-loss setting techniques to protect capital and optimize profits.',
    keywords: 'stop loss strategies, stop loss setting, ATR stop loss, technical stop loss, trailing stop, moving stop, stop loss discipline, forex stop loss',

    heroTitle: 'Complete Stop Loss Strategies',
    heroDescription: 'Master all stop-loss techniques to protect capital and achieve risk-controlled profitability',
    readingTime: '32 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'why-stop-loss', title: 'Why Stop-Loss is Your Lifeline' },
      { id: 'fixed-stop-loss', title: 'Fixed Stop-Loss Strategies' },
      { id: 'atr-stop-loss', title: 'ATR Dynamic Stop-Loss' },
      { id: 'technical-stop-loss', title: 'Technical Stop-Loss Strategies' },
      { id: 'trailing-stop-loss', title: 'Trailing Stop-Loss Techniques' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'stop-loss-discipline', title: 'Stop-Loss Execution Discipline' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    sections: [],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: My stops always get hit then price reverses - am I being hunted?',
        answer: 'This is the most common misconception. Most cases are not "stop hunting" but improper stop placement. Truth: 1) Stops placed at round numbers (like 1.1000) or exactly at previous lows/highs are easily hit; 2) Stop distance too tight, normal market volatility triggers it; 3) Confirmation bias: you only remember trades that reversed after stop, forget trades where stop saved you. Solutions: 1) Place stops 10-20 pips outside key technical levels, not exactly at them; 2) Use ATR stops to adapt to market volatility; 3) Track your stop data, true "hunting" is typically <5%. Remember: even if 10% are hunted, setting stops is still safer than not setting them.'
      },
      {
        question: 'Q2: How wide should stop-loss be? Too tight gets hit, too wide loses too much',
        answer: 'Stop distance should be based on market structure and volatility, not subjective judgment. Recommended methods: 1) ATR multiple: use 1-2x ATR value. If EUR/USD 14-period ATR is 15 pips, set stop 15-30 pips; if GBP/JPY ATR is 50 pips, set stop 50-100 pips; 2) Technical level method: stop outside key support/resistance. If entry 1.1050, previous low 1.1030, set stop 1.1020 (10 pips below previous low); 3) Risk reverse calculation: based on account risk. E.g., $10,000 account, 2% risk=$200, open 1 lot EUR/USD ($10/pip), stop=200÷10=20 pips. Different timeframes: M5 is 15-25 pips, M15 is 25-40 pips, H1 is 40-60 pips, H4 is 60-100 pips, D1 is 100-200 pips. Key is consistency, not perfection.'
      },
      {
        question: 'Q3: When should trailing stop start? How fast should it move?',
        answer: 'Trailing stop best practices: Start timing: 1) When price reaches 1R (1x risk-reward), move stop to breakeven (entry price); 2) When price reaches 1.5R, start trailing stop, every 10-20 pip move follow with 10-15 pip stop adjustment; 3) When price reaches 2R, lock in at least 1R profit, can tighten trailing distance. Movement speed: 1) Scalping (M5-M15): fast trailing, 10-20 pip stop distance, follow 10 pips for every 15 pip move; 2) Day trading (H1): medium trailing, 20-40 pip stop distance, follow 20 pips for every 30 pip move; 3) Swing trading (H4-D1): slow trailing, 50-100 pip stop distance, follow 50 pips for every 100 pip move. Tip: Use Parabolic SAR or moving averages as trailing stop reference.'
      },
      {
        question: 'Q4: Can I use mental stop-loss (no stop order, manual close)?',
        answer: 'Absolutely not! Mental stops are a primary reason 95% of traders lose. Why mental stops fail: 1) Network failure, platform freeze prevents manual close, small loss becomes account blowup; 2) Emotional interference: seeing loss expand, psychological illusion "maybe it will reverse", delayed closing; 3) Reaction delay: from noticing price to clicking close takes 5-30 seconds, price may worsen during this time; 4) Weekend gaps: if holding over weekend, Monday opening gaps 100-300 pips, mental stop completely ineffective. Professional traders 100% use stop orders, never rely on mental stops. Only exception: scalpers (positions <5 minutes) may use mental stops, but must have strict discipline and fast execution ability. For intraday and longer timeframes, must set stop orders.'
      },
      {
        question: 'Q5: Should I immediately reverse position after stop is hit?',
        answer: '99% of cases no. Stop being hit means your analysis was wrong, market movement contrary to expectation. Reversing position at this point is "emotional trading", extremely risky. Problems: 1) Reversing after stop is based on "refusal to accept" not rational analysis; 2) Price hitting stop may just be temporary volatility, not trend reversal; 3) Consecutive stop + reverse easily leads to double losses (original direction stopped, reverse direction also stopped). Correct approach: 1) After stop, pause 5-30 minutes, calmly analyze why stopped; 2) Re-evaluate market structure, is there clear opposite direction signal? 3) If truly appears high-probability opposite opportunity (like breaking key resistance, forming reversal pattern), can consider new position, but must recalculate position size and stop. Only exception: failed breakout strategy, specifically designed to reverse after false breakout, but this needs strict rules and backtest validation.'
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
        href: '/education/position-sizing',
        icon: '📊',
        title: 'Position Sizing & Money Management',
        description: 'Master position calculation and dynamic adjustment'
      },
      {
        href: '/education/trading-psychology',
        icon: '🧠',
        title: 'Trading Psychology',
        description: 'Understand psychological barriers in stop-loss execution'
      }
    ],

    ctaTitle: 'Want to Optimize Your Stop-Loss Strategy?',
    ctaDescription: 'Use CC Killer professional stop-loss tools for automated stop management',
    ctaPrimaryButton: 'Use Tools Free',
    ctaSecondaryButton: 'Learn About Training',

    footerPrevText: '← Position Sizing',
    footerNextText: 'Trading Psychology →',
    footerPrevHref: '/education/position-sizing',
    footerNextHref: '/education/trading-psychology',
  } as EducationPageContent,
};
