import Header from "@/components/header"
import Hero from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import VideoSection from "@/components/video-section"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <VideoSection />
        <Pricing />
        <section id="cta" className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Ready to ship with Sque?</h2>
          <p className="text-white/70 mt-2">Build delightful messaging in minutes.</p>
          <a href="#" className="inline-block mt-6 px-6 py-3 rounded-full bg-white text-black font-medium">Create account</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
