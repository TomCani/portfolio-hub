import type { BillingCycle, Feature, Plan } from '../types'

interface Props {
  features: Feature[]
  plans: Plan[]
  cycle: BillingCycle
}

export default function FeatureTable({ features, plans, cycle }: Props) {
  const priceOf = (p: Plan) => (cycle === 'annual' ? p.annualPrice : p.monthlyPrice)

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            {plans.map((p) => (
              <th scope="col" key={p.id} className="text-center">
                <div className="fw-semibold">{p.name}</div>
                <div className="small text-muted">${priceOf(p)} {cycle === 'annual' ? '/yr' : '/mo'}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((f) => (
            <tr key={f.key}>
              <th scope="row" className="fw-normal">{f.label}</th>
              {plans.map((p) => (
                <td key={p.id} className="text-center">
                  {p.featuresIncluded.includes(f.key) ? '✓' : '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}