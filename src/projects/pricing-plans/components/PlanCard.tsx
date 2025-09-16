import { track } from '../lib/analytics'
import type { BillingCycle, Plan } from '../types'

interface Props {
  plan: Plan
  cycle: BillingCycle
}

export default function PlanCard({ plan, cycle }: Props) {
  const price = cycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
  const priceUnit = cycle === 'annual' ? '/yr' : '/mo'

  const handleClick = () => {
    track('pricing_cta_click', {
      plan_id: plan.id,
      plan_name: plan.name,
      billing_cycle: cycle,
      price,
    })
  }

  return (
    <div className={`card h-100 shadow-sm ${plan.highlight ? 'border-primary' : ''}`}>
      <div className="card-body d-flex flex-column">
        <div className="mb-2 d-flex align-items-center justify-content-between">
          <h5 className="card-title mb-0">{plan.name}</h5>
          {plan.highlight && <span className="badge text-bg-primary">Popular</span>}
        </div>

        <div className="mb-3">
          <div className="display-6 fw-bold">
            ${price}
            <span className="fs-6 text-muted">{priceUnit}</span>
          </div>
          {cycle === 'annual' && (
            <div className="text-success small">≈ {plan.monthlyPrice * 12 - plan.annualPrice}$ saved/year</div>
          )}
        </div>

        <ul className="list-unstyled small flex-grow-1">
          {plan.featuresIncluded.map((f) => (
            <li key={f} className="mb-2">✓ {f}</li>
          ))}
        </ul>

        <button
          type="button"
          className={`btn mt-auto ${plan.highlight ? 'btn-primary' : 'btn-outline-light'}`}
          onClick={handleClick}
          data-plan={plan.id}
          data-billing={cycle}
        >
          {plan.ctaLabel}
        </button>
      </div>
    </div>
  )
}