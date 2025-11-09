import { EducationPageContent } from './forex-basics.content';

export const riskManagementContent = {
  zh: {
    title: '外汇风险管理基础 - 仓位控制与资金管理完整指南 | CC Killer',
    description: '深入讲解外汇交易风险管理核心知识：2%规则、风险回报比、仓位控制、最大回撤、风险承受能力评估。专业交易员分享实战风险管理策略，助你长期稳定盈利。',
    keywords: '风险管理, 仓位控制, 资金管理, 止损设置, 风险回报比, 2%规则, 最大回撤, 外汇风险管理',

    heroTitle: '外汇风险管理基础',
    heroDescription: '掌握风险管理核心原则，保护资金实现长期盈利',
    readingTime: '30分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-risk-management', title: '什么是风险管理？' },
      { id: 'core-principles', title: '风险管理核心原则' },
      { id: 'position-sizing-basics', title: '仓位控制基础' },
      { id: 'risk-reward-ratio', title: '风险回报比详解' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'advanced-techniques', title: '进阶风险管理技巧' },
      { id: 'faq', title: '常见问题解答' },
    ],

    sections: [],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 为什么风险管理比交易策略更重要？',
        answer: '因为即使是最好的交易策略也无法保证100%胜率。专业统计显示，胜率60%的策略配合糟糕的风险管理（如不设止损、重仓交易）仍会导致爆仓；而胜率40%的策略配合严格的风险管理（2%规则、1:3风险回报比）却能实现长期盈利。风险管理决定你能在市场中存活多久，而策略只是决定盈利速度。记住：保护本金是第一要务。'
      },
      {
        question: 'Q2: 2%规则是否过于保守？能否提高到5%或10%？',
        answer: '2%规则绝非保守，而是经过无数交易者验证的最佳实践。如果单笔风险提高至5%，连续10次止损就亏损50%，需要100%收益才能回本；如果是10%，连续5次止损就亏损40%。而2%风险下，连续10次止损仅亏20%，只需25%收益即可回本。职业交易者通常使用1-2%风险，激进交易者最多3%。除非账户资金极小（<$500）且愿意承担高风险，否则绝不建议超过3%。'
      },
      {
        question: 'Q3: 如何确定自己的风险承受能力？',
        answer: '通过以下问题自我评估：1) 如果连续亏损5笔，账户回撤10%，你会恐慌还是继续执行策略？2) 如果单笔亏损$200，会影响你的情绪和日常生活吗？3) 你能否接受连续3-6个月不盈利的学习期？如果答案是"会恐慌""会影响""无法接受"，说明你的风险承受能力较低，应该：1) 减少单笔风险至1%或更低；2) 使用更小的账户（如$500-1000）；3) 从模拟账户开始。只用"输得起"的钱交易，永远不要借钱或用生活必需资金交易。'
      },
      {
        question: 'Q4: 风险回报比1:2和1:3哪个更好？',
        answer: '没有绝对的"更好"，取决于你的策略胜率。数学上，胜率50%时，1:1风险回报比盈亏平衡；1:2可盈利；1:3盈利更多。但问题是，目标利润越大，达成难度越高，胜率可能下降。建议：1) 短线策略（M5-M15）使用1:1.5-1:2，因为市场噪音多，难以达成大目标；2) 日内策略（H1）使用1:2-1:3；3) 波段策略（H4-D1）可以追求1:3-1:5。关键是测试你的策略，找到胜率和风险回报比的最佳平衡点。'
      },
      {
        question: 'Q5: 最大回撤20%是否意味着我失败了？',
        answer: '不一定。最大回撤是交易生涯中的正常现象，即使是职业交易者也会经历。关键是：1) 回撤原因：是因为市场环境变化、策略失效，还是因为违反纪律（移动止损、重仓交易）？如果是前者，调整策略即可；如果是后者，需要改正行为。2) 回撤速度：缓慢回撤（3-6个月）比快速回撤（1-2周）更可接受，说明你仍在控制风险。3) 回撤后反应：如果回撤20%后你仍能保持冷静，继续执行策略，这是成熟的标志。但如果超过20%，建议：暂停交易，重新评估策略，减少仓位至1%，或回到模拟账户练习。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/position-sizing',
        icon: '📊',
        title: '仓位控制与资金管理',
        description: '深入学习仓位计算方法和动态调整策略'
      },
      {
        href: '/education/stop-loss-strategies',
        icon: '🛡️',
        title: '止损策略大全',
        description: '掌握各种止损技巧，保护交易资金'
      },
      {
        href: '/education/trading-psychology',
        icon: '🧠',
        title: '交易心理学',
        description: '了解交易心理和情绪管理技巧'
      }
    ],

    ctaTitle: '想要系统学习风险管理？',
    ctaDescription: '加入 CC Killer 培训计划，获取专业风险管理工具和一对一指导',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 外汇基础',
    footerNextText: '仓位控制 →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/position-sizing',
  } as EducationPageContent,

  en: {
    title: 'Forex Risk Management Fundamentals - Complete Position Sizing & Money Management Guide | CC Killer',
    description: 'Comprehensive guide to forex risk management: 2% rule, risk-reward ratio, position sizing, maximum drawdown, risk tolerance assessment. Professional trader shares practical risk management strategies for long-term success.',
    keywords: 'risk management, position sizing, money management, stop loss, risk reward ratio, 2% rule, maximum drawdown, forex risk management',

    heroTitle: 'Forex Risk Management Fundamentals',
    heroDescription: 'Master risk management principles to protect capital and achieve long-term profitability',
    readingTime: '30 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-risk-management', title: 'What is Risk Management?' },
      { id: 'core-principles', title: 'Core Risk Management Principles' },
      { id: 'position-sizing-basics', title: 'Position Sizing Basics' },
      { id: 'risk-reward-ratio', title: 'Risk-Reward Ratio Explained' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'advanced-techniques', title: 'Advanced Risk Management Techniques' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    sections: [],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Why is risk management more important than trading strategy?',
        answer: 'Because even the best trading strategy cannot guarantee 100% win rate. Professional statistics show that a 60% win rate strategy with poor risk management (no stops, overleveraging) still leads to account blowup; while a 40% win rate strategy with strict risk management (2% rule, 1:3 risk-reward) achieves long-term profitability. Risk management determines how long you survive in the market, while strategy only determines profit speed. Remember: protecting capital is the first priority.'
      },
      {
        question: 'Q2: Is the 2% rule too conservative? Can I increase to 5% or 10%?',
        answer: 'The 2% rule is not conservative but a best practice validated by countless traders. If you increase per-trade risk to 5%, 10 consecutive losses mean 50% drawdown, requiring 100% return to break even; at 10%, 5 consecutive losses mean 40% drawdown. With 2% risk, 10 consecutive losses only cause 20% drawdown, needing just 25% return to recover. Professional traders typically use 1-2% risk, aggressive traders maximum 3%. Unless account is extremely small (<$500) and you accept high risk, never exceed 3%.'
      },
      {
        question: 'Q3: How to determine my risk tolerance?',
        answer: 'Self-assess with these questions: 1) If you lose 5 consecutive trades with 10% drawdown, will you panic or continue executing strategy? 2) If single loss is $200, will it affect your emotions and daily life? 3) Can you accept 3-6 months without profit during learning period? If answers are "will panic" "will affect" "cannot accept", your risk tolerance is low. You should: 1) Reduce per-trade risk to 1% or less; 2) Use smaller account (e.g., $500-1000); 3) Start with demo account. Only trade money you can afford to lose, never borrow or use essential living funds for trading.'
      },
      {
        question: 'Q4: Which is better - 1:2 or 1:3 risk-reward ratio?',
        answer: 'No absolute "better" - depends on your strategy win rate. Mathematically, at 50% win rate, 1:1 risk-reward breaks even; 1:2 profits; 1:3 profits more. But problem is, larger profit targets are harder to achieve, win rate may decrease. Recommendations: 1) Scalping strategies (M5-M15) use 1:1.5-1:2, as market noise makes large targets difficult; 2) Day trading strategies (H1) use 1:2-1:3; 3) Swing strategies (H4-D1) can pursue 1:3-1:5. Key is testing your strategy to find optimal balance between win rate and risk-reward ratio.'
      },
      {
        question: 'Q5: Does 20% maximum drawdown mean I failed?',
        answer: 'Not necessarily. Maximum drawdown is normal in trading career, even professional traders experience it. Key factors: 1) Drawdown cause: market environment change, strategy failure, or discipline violation (moving stops, overleveraging)? If former, adjust strategy; if latter, correct behavior. 2) Drawdown speed: gradual drawdown (3-6 months) more acceptable than rapid (1-2 weeks), shows you still control risk. 3) Post-drawdown reaction: if after 20% drawdown you remain calm and continue executing strategy, this shows maturity. But if exceeds 20%, recommend: pause trading, re-evaluate strategy, reduce position to 1%, or return to demo account practice.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/position-sizing',
        icon: '📊',
        title: 'Position Sizing & Money Management',
        description: 'Deep dive into position calculation methods and dynamic adjustment strategies'
      },
      {
        href: '/education/stop-loss-strategies',
        icon: '🛡️',
        title: 'Stop Loss Strategies',
        description: 'Master various stop-loss techniques to protect trading capital'
      },
      {
        href: '/education/trading-psychology',
        icon: '🧠',
        title: 'Trading Psychology',
        description: 'Understand trading psychology and emotional management techniques'
      }
    ],

    ctaTitle: 'Want to Systematically Learn Risk Management?',
    ctaDescription: 'Join CC Killer training program for professional risk management tools and one-on-one guidance',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Assessment',

    footerPrevText: '← Forex Basics',
    footerNextText: 'Position Sizing →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/position-sizing',
  } as EducationPageContent,
};
