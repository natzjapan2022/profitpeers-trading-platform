export interface Plan {
  id: string
  name: string
  price: number
  productId: string
  description: string
  features: string[]
  popular?: boolean
}

export const plans: Record<string, Plan> = {
  master: {
    id: 'master',
    name: 'Master Access Pass',
    price: 99,
    productId: process.env.NEXT_PUBLIC_WHOP_MASTER_PRODUCT_ID || 'plan_owbOHZEF1FCwM',
    description: 'Step into ProfitPeers Trading Collective with the Master Access Pass. Unlock members-only live market breakdowns, an exclusive resource library, and real-time discussions with experienced traders.',
    features: [
      'Members-only live market breakdowns',
      'Exclusive resource library (50+ guides)',
      'Real-time discussions with experienced traders',
      'Priority access to tools and strategies',
      'Weekly strategy updates',
      'Risk management workshops',
      'Position sizing calculators',
      'Market scanners & custom indicators',
      '24/7 active community support',
      'Mentor feedback sessions',
      'Performance tracking tools',
      'Lifetime access & updates'
    ],
    popular: true
  }
}

export function getPlan(planId: string): Plan | null {
  return plans[planId] || null
}

export function isValidPlan(planId: string): boolean {
  return planId in plans
}