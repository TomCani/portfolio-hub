export type AnalyticsPayload = Record<string, unknown>

function pushToDataLayer(event: string, payload: AnalyticsPayload) {
  const w = window as any
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...payload })
    return true
  }
  return false
}

function pushToGtag(event: string, payload: AnalyticsPayload) {
  const w = window as any
  if (typeof w.gtag === 'function') {
    w.gtag('event', event, payload)
    return true
  }
  return false
}

export function track(event: string, payload: AnalyticsPayload = {}) {
  const ok = pushToDataLayer(event, payload) || pushToGtag(event, payload)
  if (!ok) {
    // Dev fallback so you can see events in the console.
    // Remove in production if noisy.
    // eslint-disable-next-line no-console
    console.info('[analytics]', event, payload)
  }
}