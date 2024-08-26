import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export function middleware(request: NextRequest) {
	const cookieStore = cookies()
	const accessToken = cookieStore.get("accesToken")?.value
	if (accessToken) return  NextResponse.redirect(new URL("/store", request.url))
}

export const config = {
	matcher: ["/login/:path", "/signup/:path"]
}
 