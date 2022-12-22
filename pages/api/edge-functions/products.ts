import products from "lib/mocks/products";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const getProducts = (req: NextRequest) => {
  return NextResponse.json(products);
};

export default getProducts;
