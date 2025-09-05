"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{backgroundImage:"var(--gradient-2)"}} />
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.6}}
            >
              The messaging layer your product deserves
            </motion.h1>
            <p className="mt-6 text-lg text-white/70 max-w-prose">
              Sque unifies email, chat, and notifications into one programmable inbox. Ship delightful experiences with webhooks, powerful APIs, and drop‑in UI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#pricing" className="px-5 py-3 rounded-full bg-white text-black font-medium">Start for free</Link>
              <Link href="#features" className="px-5 py-3 rounded-full border border-white/20">See features</Link>
            </div>
            <p className="mt-4 text-xs text-white/60">Free plan • No credit card • Stripe‑style polish</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-24 -z-10 opacity-40 blur-3xl" style={{background:"var(--gradient-1)"}} />
            <Image
              src="/images/sque-dashboard.png"
              alt="Sque dashboard"
              width={1200}
              height={900}
              className="rounded-2xl ring-1 ring-white/10 shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
