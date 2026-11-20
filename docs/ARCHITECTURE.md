# Technische Architektur

## Architekturziele

1. Feature-orientierte Modularität statt eines unstrukturierten Komponenten-Sammelordners.
2. Klare Trennung zwischen Präsentation, Anwendungsfällen, Datenzugriff und Infrastruktur.
3. Serverseitige Validierung und minimale Vertrauensgrenzen.
4. Austauschbare Integrationen (Twitch, Datenbank, E-Mail).
5. Testbarkeit und nachvollziehbare technische Entscheidungen.

## Ziel-Stack

| Schicht | Technologie / Ansatz | Zweck |
|---|---|---|
| Web | Next.js App Router | Routing, Server Components, Route Handlers |
| Sprache | TypeScript im strict mode | Typensicherheit |
| UI | React + Tailwind CSS | Komponenten und Designsystem |
| Validierung | Zod | Laufzeitvalidierung externer Daten |
| Datenbank (Phase 2) | Supabase / PostgreSQL | Einreichungen, Content, Stream-Termine |
| Auth (Phase 2) | Supabase Auth | Admin-Zugang, später optionale Accounts |
| Tests | Vitest + Testing Library; Playwright | Unit-, Komponenten- und E2E-Tests |
| Qualität | ESLint, Prettier, TypeScript | Statische Qualitätskontrollen |
| Hosting | Vercel oder kompatible Node-Umgebung | Deployment |

Die Stack-Auswahl ist ein Zielbild. Abhängigkeiten und konkrete Versionen werden bei der Implementierung festgelegt und aktuell gehalten.

## Vorgeschlagene Verzeichnisstruktur

```text
security-cafe/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── page.tsx
│   │   │   ├── live/page.tsx
│   │   │   ├── submit/page.tsx
│   │   │   ├── reviews/page.tsx
│   │   │   ├── reviews/[slug]/page.tsx
│   │   │   ├── knowledge/page.tsx
│   │   │   ├── knowledge/[slug]/page.tsx
│   │   │   ├── projects/page.tsx
│   │   │   └── about/page.tsx
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── submissions/
│   │   │   └── content/
│   │   ├── api/
│   │   │   ├── submissions/route.ts
│   │   │   └── twitch/status/route.ts
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                 # Primitive UI-Bausteine
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── feedback/           # Empty, Error, Loading, Status
│   │   └── seo/                # Metadata-Helfer
│   ├── features/
│   │   ├── live/               # Twitch-Player, Status, Stream-Metadaten
│   │   ├── submissions/        # Formular, Schema, Moderationsstatus
│   │   ├── reviews/            # Review-Listen und Detailansichten
│   │   ├── knowledge/          # Artikel und Taxonomie
│   │   ├── projects/           # Projektübersicht
│   │   └── announcements/      # Stream- und Projektankündigungen
│   ├── server/
│   │   ├── services/           # Use-case-orientierte Serverlogik
│   │   ├── repositories/       # Datenzugriff
│   │   ├── integrations/
│   │   │   └── twitch/
│   │   └── security/           # Rate limits, URL-Policy, Audit
│   ├── lib/
│   │   ├── env.ts              # Geprüfte Environment-Konfiguration
│   │   ├── urls.ts             # Sichere URL-Helfer
│   │   └── utils.ts
│   ├── config/
│   └── types/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── .github/
│   └── workflows/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Abhängigkeitsregeln

- `app/` komponiert Features und Layouts; enthält keine komplexe Geschäftslogik.
- `features/` enthält fachliche UI, Schemas und Feature-Typen.
- `server/` ist ausschließlich serverseitig und darf nicht in Client-Bundles gelangen.
- `repositories/` kapselt Datenbankzugriffe; UI-Komponenten sprechen nie direkt SQL/SDKs an.
- `components/ui/` bleibt fachlich neutral.
- `lib/` enthält kleine, wiederverwendbare technische Helfer und wird kein Ablageort für beliebige Logik.
- Externe Daten gelten grundsätzlich als nicht vertrauenswürdig.

## Datenfluss: Community-Einreichung

Browser-Formular → Route Handler → Schema-Validierung → Rate-Limit / Abuse-Schutz → Service → Repository → Datenbank.

Die Antwort enthält keine internen Moderationsnotizen. Fehler werden kontrolliert zurückgegeben; Stacktraces und Secrets gelangen nicht an Clients.

## Datenmodell (konzeptionell)

- `Submission`: id, title, description, category, repositoryUrl?, websiteUrl?, submitterName?, contact?, consent, status, createdAt
- `Review`: id, slug, title, summary, scope, methodology, findings[], severity, remediation, publicationState, publishedAt
- `Finding`: id, title, severity, impact, evidence, remediation, disclosureState
- `StreamEvent`: id, title, description, startsAt, twitchChannel, status
- `ContentArticle`: id, slug, title, excerpt, body, tags[], status, publishedAt
- `AuditEvent`: id, actorId, action, resourceType, resourceId, createdAt

## Twitch-Integration

- Kanal: `GotUrBack04`
- Player: offizielles Twitch Embed; Parent-Domain muss pro Deployment-Domain gesetzt sein.
- Live-Status: serverseitige Twitch-API-Integration, Zugangsdaten ausschließlich in serverseitigen Environment-Variablen.
- Bei fehlenden Credentials oder API-Ausfall: neutraler Status „Status derzeit nicht verfügbar“, kein erfundener Offline-/Live-Zustand.
- Chat ist optional und kann separat deaktiviert werden.

## Konfigurationsprinzip

Secrets gehören ausschließlich in Deployment-Environment-Variablen. `.env.example` enthält nur Variablennamen und sichere Platzhalter, niemals echte Tokens.
