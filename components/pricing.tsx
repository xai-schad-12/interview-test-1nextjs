export default function Pricing() {
  const tiers = [
    { name: "Free", price: "$0", features: ["5,000 messages", "Shared inbox", "Basic analytics"] },
    { name: "Pro", price: "$19", features: ["100k messages", "Rules & automations", "Priority support"] },
    { name: "Scale", price: "Contact us", features: ["Unlimited messages", "SAML SSO", "Dedicated infra"] },
  ]
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold text-center">Simple, transparent pricing</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-sm text-white/60">{t.name}</div>
            <div className="text-4xl font-bold mt-2">{t.price}</div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {t.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-full bg-white text-black">Choose plan</a>
          </div>
        ))}
      </div>
    </section>
  )
}
