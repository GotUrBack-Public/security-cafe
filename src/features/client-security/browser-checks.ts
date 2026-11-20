export type BrowserCheckResult={id:string;status:"pass"|"warn"|"unknown";detail:string};
/** Passive checks only: no fingerprinting, cross-origin probing or permission prompts. */
export function runPassiveBrowserChecks():BrowserCheckResult[]{if(typeof window==="undefined")return[];return[
{id:"secure-context",status:window.isSecureContext?"pass":"warn",detail:window.isSecureContext?"Secure context available.":"This page is not a secure context."},
{id:"permissions",status:"unknown",detail:"No browser permissions were requested or inspected."},
{id:"service-worker",status:"unknown",detail:"Service-worker policy requires manual review."}]}