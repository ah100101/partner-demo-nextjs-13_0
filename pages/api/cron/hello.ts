import { mockProducts } from "lib/mocks/products";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const hello = async (req: NextRequest) => {
  console.log("Hello from a cron job!");
  return NextResponse.json({ message: "Hello from a cron job!" });
};

export default hello;
