import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const isMaintenance = process.env.MAINTENANCE_MODE === "true"
  const isMaintenancePath = url.pathname.startsWith("/maintenance")

  if (isMaintenance && !isMaintenancePath) {
    url.pathname = "/maintenance"
    return NextResponse.redirect(url)
  }

  if (!isMaintenance && isMaintenancePath) {
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|sitemap.xml|robots.txt|images|videos).*)"]
}
