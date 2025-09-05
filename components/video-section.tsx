export default function VideoSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/50">
        <video
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          poster="/images/og.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-center text-sm text-white/70 mt-4">
        Optimized video: muted, inline, with poster and metadata preload for fast LCP.
      </p>
    </section>
  )
}
