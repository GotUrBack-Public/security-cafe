import type { NextConfig } from "next";
const headers=[{key:"X-Content-Type-Options",value:"nosniff"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},{key:"X-Frame-Options",value:"DENY"},{key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},{key:"Cross-Origin-Opener-Policy",value:"same-origin"}];
const config:NextConfig={poweredByHeader:false,reactStrictMode:true,async headers(){return [{source:"/:path*",headers}];}};
export default config;