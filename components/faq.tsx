const faqs = [
  { q: "What is Sque?", a: "Sque is a fictional product for this assignment: a Stripe‑quality messaging platform." },
  { q: "How is this optimized?", a: "Using Next.js App Router, next/image, Tailwind, responsive images, and preloaded metadata poster for video." },
  { q: "Is there maintenance mode?", a: "Yes. Set MAINTENANCE_MODE=true in env and all routes redirect to /maintenance." },
]

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
      <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
        {faqs.map(({q,a})=>(
          <details key={q} className="p-6 bg-white/5 open:bg-white/10">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-white/70">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
