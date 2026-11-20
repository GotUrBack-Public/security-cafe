# Route map

| Route | Purpose | Access |
|---|---|---|
| / | Landing page | Public |
| /main/live | Twitch/live area | Public |
| /main/submit | Community submissions | Public form; writes protected |
| /main/reviews/[slug] | Review detail | Published content |
| /main/knowledge/[slug] | Knowledge article | Published content |
| /main/projects/[slug] | Project detail | Published content |
| /main/client-security/checks | Defensive client check catalog | Public |
| /main/userpanel | Account dashboard | Authenticated (planned) |
| /main/userpanel/profile/[username] | Public profile projection | Field-level policy |
| /main/userpanel/streams | Own stream management | Authenticated |
| /main/userpanel/stream/[streamId]/[accessId] | Private stream share | Token + server authorization |
| /main/admin | Administration | Admin role |

Dynamic segments use Next.js square-bracket folders. A URL identifier is never authorization. Share tokens must be random, hashed at rest, revocable, optionally expiring, rate-limited and redacted from logs.