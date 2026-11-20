import {notFound} from "next/navigation";
import {validateStreamRoute} from "@/features/streams/route-schema";
export default async function PrivateStreamPage({params}:{params:Promise<{streamId:string;accessId:string}>}){const parsed=validateStreamRoute(await params);if(!parsed.success)notFound();
// Fail closed: token resolution and resource authorization are intentionally not implemented yet.
// Access IDs must be random, hashed at rest, revocable, optionally expiring and redacted from logs.
notFound();}