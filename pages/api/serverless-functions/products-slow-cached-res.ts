import { getProducts, Product } from "lib/mocks/products";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const products = await getProducts();
  res.setHeader("Cache-Control", "max-age=0, s-maxage=10");
  res.status(200).json(products);
}
