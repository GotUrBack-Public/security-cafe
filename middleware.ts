import {NextRequest,NextResponse} from "next/server";
/** Basic response hardening only. Enforce authentication inside every protected server operation. */
export function middleware(_request:NextRequest){const response=NextResponse.next();response.headers.set("X-Robots-Tag","noindex, nofollow");return response;}
export const config={matcher:["/main/userpanel/:path*","/main/admin/:path*"]};