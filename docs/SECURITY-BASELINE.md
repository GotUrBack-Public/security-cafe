# Security baseline

## Trust boundaries
1. Browser/client: untrusted; UI checks are advisory.
2. Next.js server: validates requests and authorizes protected operations.
3. Database: least privilege, parameterized queries and row-level access policies.
4. Third parties: explicit allowlists, minimal data transfer and reviewed embeds.

## Required before production
- Real authentication, secure HttpOnly/SameSite cookies, session rotation and CSRF strategy.
- Role- and resource-based authorization on every server operation.
- Zod validation at every API/server-action boundary.
- Rate limits for login, submissions, token resolution and expensive operations.
- CSP with nonces/hashes; never use unsafe-inline/eval as a shortcut.
- SSRF defenses for URL fetchers: scheme/host allowlist, DNS/IP validation, redirect revalidation and egress controls.
- Secret scanning, dependency updates, backup/restore tests and audit logging.
- No secrets in NEXT_PUBLIC variables, client bundles, URLs or logs.
- Tests for IDOR, CSRF, XSS, open redirects, SSRF and privilege escalation.

## Status
This is a scaffold. Authentication, database persistence, production CSP, rate limiting and monitoring are not implemented. Do not deploy as a production user platform until completed and reviewed.