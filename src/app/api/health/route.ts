import {NextResponse} from "next/server";
export function GET(){return NextResponse.json({status:"ok",service:"security-cafe"},{headers:{"Cache-Control":"no-store"}})}