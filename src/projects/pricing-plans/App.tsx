import { PLANS, FEATURES } from './data/plans'
import PricingToggle from './components/PricingToggle'
import PlanCard from './components/PlanCard'
import FeatureTable from './components/FeatureTable'
import { useBillingCycle } from './hooks/useBillingCycle'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { cycle, setCycle, isAnnual, savingsLabel } = useBillingCycle()
  const { theme } = useTheme() // ← stays in sync with your hub

  return (
    <div className="pricing-theme" data-theme={theme}>
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="fw-bold mb-3">Simple, transparent pricing</h1>
          <p className="text-muted">Switch anytime. No contracts.</p>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
            <PricingToggle value={cycle} onChange={setCycle} />
            {isAnnual && <span className="badge bg-soft">{savingsLabel}</span>}
          </div>
        </header>

        <section className="row g-4 mb-5">
          {PLANS.map((plan) => (
            <div className="col-12 col-md-4" key={plan.id}>
              <PlanCard plan={plan} cycle={cycle} />
            </div>
          ))}
        </section>

        <section>
          <h2 className="h4 mb-3">Compare features</h2>
          <FeatureTable features={FEATURES} plans={PLANS} cycle={cycle} />
        </section>

        <footer className="text-center mt-5 text-muted small">
          Prices in USD. Taxes may apply.
        </footer>
      </div>
    </div>
  )
}
