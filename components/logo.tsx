import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src="/images/logo.svg" alt="Sque" width={24} height={24} />
      <span className="font-semibold tracking-tight">Sque</span>
    </div>
  )
}
