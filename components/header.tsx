"use client"
import Link from "next/link"
import { Logo } from "./logo"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="opacity-80">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#cta" className="hidden sm:inline-block px-4 py-2 rounded-full border border-white/20 hover:border-white/40">Sign in</Link>
          <Link href="#cta" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:scale-[1.02]">Get started</Link>
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-white/80">
          <a href="#features" onClick={()=>setOpen(false)}>Features</a>
          <a href="#pricing" onClick={()=>setOpen(false)}>Pricing</a>
          <a href="#faq" onClick={()=>setOpen(false)}>FAQ</a>
        </div>
      )}
    </header>
  )
}
