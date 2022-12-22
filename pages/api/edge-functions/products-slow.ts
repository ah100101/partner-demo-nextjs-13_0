import { getProducts } from "lib/mocks/products";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const products = async (req: NextRequest) => {
  const products = await getProducts();
  return NextResponse.json(products);
};

export default products;
