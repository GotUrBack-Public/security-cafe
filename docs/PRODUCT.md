# Produktkonzept

## 1. Positionierung

Security Café ist ein unabhängiger Community-Ort für praktische Cybersecurity, Softwareentwicklung und gemeinsames Lernen. Der Auftritt soll nicht wie ein generisches Hacker-Template wirken: eher wie ein hochwertiges, technisches Café mit redaktionellem Charakter.

**Leitidee:** Wissen teilen. Systeme verstehen. Sicher entwickeln.

## 2. Zielgruppen

- Menschen, die Cybersecurity und sichere Entwicklung lernen
- Entwicklerinnen und Entwickler, die Feedback zu Projekten suchen
- Zuschauer des Twitch-Kanals GotUrBack04
- Community-Mitglieder, die nachvollziehbare Reviews und Lernmaterial suchen

## 3. Informationsarchitektur

### Home
- Prägnanter Hero mit Positionierung und klaren Aktionen
- Live-/Offline-Status von Twitch
- Nächster Stream bzw. letzte Ankündigung
- Ausgewählte Reviews, Knowledge-Beiträge und Projekte
- Community-Call-to-Action zur Einreichung

### Live
- Twitch-Player und optional Twitch-Chat
- Live-/Offline-Zustand; niemals einen Live-Status vortäuschen
- Streamtitel, Kategorie und Termin-/Ankündigungsinformationen
- Fallback mit Kanal-Link, wenn Embed nicht verfügbar ist
- Twitch-Embed-Parent-Domain muss für Deployment-Domains konfiguriert werden

### Submit
- Projektname und Kurzbeschreibung
- Kategorie (Web, Source Code, Tool, Security-Frage, Sonstiges)
- GitHub-/Repository-Link und optional Website-Link
- Kontakt-/Nickname-Feld und ergänzende Nachricht
- Einwilligung zu Review-Regeln und Veröffentlichung
- Serverseitige Validierung, Rate-Limit und Moderationsstatus

### Reviews
- Filter nach Kategorie, Status und Thema
- Review-Detailseite mit Scope, Methodik, Findings, Schweregrad, Reproduktion (sicher), Fix-Empfehlung und Disclaimer
- Keine Veröffentlichung sensibler Daten, Secrets oder ungepatchter Details ohne verantwortungsvolle Abstimmung

### Knowledge
- Redaktionelle Beiträge, Tutorials, Write-ups und Glossar
- Tags, Lesedauer, Veröffentlichungsdatum und Quellen
- Inhalte mit klarer Trennung zwischen defensiver Erklärung und riskanten operativen Details

### Projects
- Eigene Tools, Demos und Open-Source-Repositories
- Status, Tech-Stack, Screenshots und Quellcode-Link
- Security-Hinweise und Lizenzinformationen

### About
- Mission, Werte, Kontakt und Community-Regeln
- Transparenz zu Review-Grenzen und Offenlegung

### Admin (nicht öffentlich)
- Einreichungen sichten, Status ändern und Notizen pflegen
- Reviews und Knowledge-Beiträge entwerfen/veröffentlichen
- Stream-Ankündigungen verwalten
- Rollen- und Audit-Log-Übersicht

## 4. Designrichtung

Empfohlene Richtung: **Dark Editorial / Technical Café**.

- Dunkler, ruhiger Grundton; warme Café-Akzentfarbe plus zurückhaltender technischer Akzent
- Typografie mit gut lesbarer Sans-Serif und monospace für Code/Metadaten
- Klare Raster, großzügige Abstände, präzise Karten und dezente Linien
- Keine überladenen Matrix-Effekte, zufälligen Glitches oder unlesbaren Terminal-Attrappen
- Mobile zuerst; Fokuszustände und Kontrast explizit berücksichtigen

## 5. Inhalts- und Moderationsmodell

Einreichungen durchlaufen einen nachvollziehbaren Workflow:

1. Eingegangen
2. In Prüfung
3. Angenommen / Zurückgestellt / Abgelehnt
4. Geplant
5. In Review
6. Veröffentlicht / Abgeschlossen

Eine Einreichung ist standardmäßig privat. Die Veröffentlichung von Nickname, Repository, Website oder Review-Ergebnis erfolgt nur gemäß klarer Zustimmung und Moderationsentscheidung.

## 6. Nicht-Ziele für den ersten Release

- Kein öffentliches Benutzerkonto-/Profil-System
- Keine Kommentare oder Direktnachrichten
- Keine automatische Ausführung von Nutzer-Code
- Kein eigener Video-Streaming-Stack
- Kein automatischer Website-Crawler oder aktiver Scanner gegen Einreichungen
- Kein komplexes Gamification-/Punktesystem

## 7. Erfolgskriterien

- Besucher verstehen innerhalb weniger Sekunden, was Security Café ist
- Twitch-Live-Seite funktioniert mit sauberem Offline-Fallback
- Einreichungen können sicher angenommen und moderiert werden
- Reviews sind strukturiert, nachvollziehbar und wiederauffindbar
- Neue Features können ohne Querabhängigkeiten ergänzt werden
