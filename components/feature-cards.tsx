import { Sparkles, ShieldCheck, Gauge, Boxes } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Drop‑in UI",
    desc: "Beautiful, accessible components inspired by Stripe. Themeable with Tailwind.",
  },
  { icon: ShieldCheck, title: "Secure by default", desc: "Signed webhooks, OAuth, and rate limits. OWASP-minded." },
  { icon: Gauge, title: "Blazing performance", desc: "Edge‑rendered, streamed HTML, optimized media and fonts." },
  { icon: Boxes, title: "Composable APIs", desc: "Unify email, chat, and notifications with one schema." },
]

export default function FeatureCards() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({icon:Icon, title, desc}) => (
          <div key={title} className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur hover:bg-white/10">
            <Icon className="mb-3" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-white/70 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
