export type BillingCycle = 'monthly' | 'annual'

export interface Feature {
  key: string
  label: string
}

export interface Plan {
  id: 'starter' | 'growth' | 'pro'
  name: string
  monthlyPrice: number
  annualPrice: number // billed yearly
  highlight?: boolean
  ctaLabel: string
  featuresIncluded: string[] // feature keys
}