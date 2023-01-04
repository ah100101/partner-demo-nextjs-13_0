import { getProducts } from "lib/mocks/products";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const products = async (req: NextRequest) => {
  const products = await getProducts();
  // cache-control > browser should not cache, edge cache for 5 seconds
  return NextResponse.json(products, {
    status: 200,
    headers: {
      "Cache-Control": "max-age=0 s-maxage=5",
    },
  });
};

export default products;
