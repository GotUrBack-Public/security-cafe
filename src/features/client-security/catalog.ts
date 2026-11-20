export type ClientCheck={id:string;title:string;description:string;category:"browser"|"transport"|"privacy"|"runtime";execution:"passive"|"manual"|"future"};
export const CLIENT_CHECK_CATALOG:readonly ClientCheck[]=[
{id:"secure-context",title:"Secure context",description:"Prüft, ob die Seite in einem sicheren Browser-Kontext läuft.",category:"transport",execution:"passive"},
{id:"browser-capabilities",title:"Browser capabilities",description:"Dokumentiert verfügbare Schutzfunktionen ohne invasive Tests.",category:"browser",execution:"passive"},
{id:"permission-review",title:"Permission review",description:"Manuelle Prüfung angeforderter Browser-Berechtigungen.",category:"privacy",execution:"manual"},
{id:"storage-review",title:"Storage review",description:"Leitfaden zur Prüfung sensibler clientseitiger Speicherung.",category:"privacy",execution:"manual"},
{id:"csp-review",title:"CSP review",description:"Vorbereitete Bewertung einer Content Security Policy.",category:"runtime",execution:"future"}];