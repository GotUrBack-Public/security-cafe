# Sicherheitskonzept

Security Café muss seine eigenen Sicherheitsansprüche technisch umsetzen. Diese Regeln gelten bereits bei der Implementierung des MVP.

## 1. Vertrauensgrenzen

- Alle Formulareingaben, URLs, Repository-Inhalte und API-Antworten sind nicht vertrauenswürdig.
- Eingereichte Projekte werden niemals automatisch ausgeführt, gebaut oder installiert.
- Keine Shell-Kommandos mit Nutzereingaben; keine dynamische Code-Auswertung.
- Keine ungeprüften HTML-Fragmente via `dangerouslySetInnerHTML`.
- Externe Websites werden zunächst nur als normale Links angezeigt. Falls später eine Vorschau nötig ist, erfolgt sie isoliert und ohne privilegierte Cookies oder interne Netzwerkzugriffe.

## 2. Einreichungs-Endpunkt

- Serverseitige Schema-Validierung mit Längenlimits und erlaubten Kategorien
- URL-Parsing statt Regex-only; nur erlaubte Protokolle wie HTTPS (HTTP nur falls bewusst zugelassen)
- Schutz gegen SSRF: keine serverseitigen Abrufe beliebiger eingereichter URLs; falls später nötig, private, loopback, link-local und reservierte IP-Bereiche blockieren und Redirects erneut prüfen
- Rate-Limit und Spam-Schutz
- Keine unnötige Erhebung personenbezogener Daten
- Explizite Zustimmung vor Veröffentlichung von Einreichungsdetails
- Sichere Fehlerantworten ohne interne Details

## 3. Admin und Authentifizierung

- Admin-Routen serverseitig schützen; UI-Verstecken ist keine Zugriffskontrolle
- Rollenprinzip mit minimalen Berechtigungen
- Sichere Session-Cookies (HttpOnly, Secure in Produktion, SameSite)
- Secrets und Service-Role-Keys niemals an den Browser ausliefern
- Schreibaktionen protokollieren (Audit-Log)
- Admin-Änderungen serverseitig autorisieren und validieren

## 4. Content-Sicherheit

- Markdown bevorzugen und mit restriktiver Sanitization rendern
- Keine untrusted HTML-Ausgabe
- Externe Links mit sicherem Target-/Rel-Verhalten
- Uploads im MVP deaktiviert; später Dateityp, Größe, Malware-Scanning und isolierte Speicherung prüfen
- Veröffentlichte Reviews auf Secrets, personenbezogene Daten und verantwortungsvolle Offenlegung prüfen

## 5. Twitch und externe Integrationen

- Twitch Client Secret ausschließlich serverseitig
- Embed nur mit korrekt konfigurierter Parent-Domain
- Externe Widgets als Drittanbieter-Inhalte kennzeichnen
- API-Ausfälle und fehlende Konfiguration robust behandeln

## 6. Security-Qualitätsgates

Vor jedem Release:
- TypeScript- und Lint-Checks
- Unit-/Integrationstests für Validierung und Autorisierung
- E2E-Test für Submission und Admin-Zugriff
- Dependency-Audit und Update-Prozess
- Prüfung auf versehentlich committete Secrets
- Security-Review der neuen externen Schnittstellen

## 7. Verantwortungsvolle Reviews

Reviews dokumentieren Scope, Zeitpunkt, Testbedingungen, Findings und Remediation. Keine unautorisierte Prüfung fremder Systeme. Kritische Findings werden nicht ohne Abstimmung mit Verantwortlichen veröffentlicht.
