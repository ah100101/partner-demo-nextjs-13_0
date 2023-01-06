import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// config with custom matcher
export const config = {
  matcher: "/:path*",
};

export default async function middleware(
  request: NextRequest,
  res: NextResponse
) {
  const reader = request?.body?.getReader();
  if (!reader) return;
  const decoder = new TextDecoder("utf-8");
  let body = "";
  let { done, value } = await reader.read();
  while (!done) {
    body += decoder.decode(value);
    ({ done, value } = await reader.read());
  }
  console.log({ body });
  // return NextResponse.json(body);
}
