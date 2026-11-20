import "server-only";
export class AuthenticationRequiredError extends Error{constructor(){super("Authentication provider is not configured.");this.name="AuthenticationRequiredError";}}
/** Fail closed until a real session provider is integrated. */
export async function requireUser():Promise<never>{throw new AuthenticationRequiredError();}
export async function requireRole(_role:"admin"|"moderator"):Promise<never>{throw new AuthenticationRequiredError();}