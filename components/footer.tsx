import { Logo } from "./logo"
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <Logo />
        <p>© {new Date().getFullYear()} Sque, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
