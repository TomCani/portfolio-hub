import type { Feature, Plan } from '../types'

export const FEATURES: Feature[] = [
  { key: 'sites', label: 'Websites included' },
  { key: 'bandwidth', label: 'Bandwidth' },
  { key: 'analytics', label: 'Advanced Analytics' },
  { key: 'priority', label: 'Priority Support' },
  { key: 'sso', label: 'SSO / SAML' },
]

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 19,
    annualPrice: 190,
    ctaLabel: 'Start Free Trial',
    featuresIncluded: ['sites', 'bandwidth'],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 49,
    annualPrice: 490,
    highlight: true,
    ctaLabel: 'Choose Growth',
    featuresIncluded: ['sites', 'bandwidth', 'analytics', 'priority'],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 99,
    annualPrice: 990,
    ctaLabel: 'Go Pro',
    featuresIncluded: ['sites', 'bandwidth', 'analytics', 'priority', 'sso'],
  },
]