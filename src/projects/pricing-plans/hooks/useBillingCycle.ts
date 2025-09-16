import { useMemo, useState } from 'react'
import type { BillingCycle } from '../types'

// Owns billing cycle state and exposes helpers.
export function useBillingCycle() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  const isAnnual = cycle === 'annual'
  const savingsLabel = useMemo(() => (isAnnual ? 'Save ~2 months' : ''), [isAnnual])

  return { cycle, setCycle, isAnnual, savingsLabel }
}