import {z} from "zod";
const schema=z.object({streamId:z.string().uuid(),accessId:z.string().min(32).max(200).regex(/^[A-Za-z0-9_-]+$/)});
export function validateStreamRoute(input:unknown){return schema.safeParse(input);}