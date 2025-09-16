import type { BillingCycle } from '../types'
import { clsx } from 'clsx'

interface Props {
  value: BillingCycle
  onChange: (val: BillingCycle) => void
}

export default function PricingToggle({ value, onChange }: Props) {
  return (
    <div className="d-inline-flex align-items-center gap-2" role="group" aria-label="Billing toggle">
      <button
        type="button"
        className={clsx('btn btn-sm', value === 'monthly' ? 'btn-primary' : 'btn-outline-light')}
        onClick={() => onChange('monthly')}
        aria-pressed={value === 'monthly'}
      >
        Monthly
      </button>
      <button
        type="button"
        className={clsx('btn btn-sm position-relative', value === 'annual' ? 'btn-primary' : 'btn-outline-light')}
        onClick={() => onChange('annual')}
        aria-pressed={value === 'annual'}
      >
        Annual
        <span className="badge rounded-pill bg-soft ms-2">Save</span>
      </button>
    </div>
  )
}