import simulateSynchronousWork from "./simulate-synchronous-work";

export type Product = {
  Id: number;
  Name: string;
  Price: number;
  Description: string;
  LastUpdated?: Date;
};

export const mockProducts: Product[] = [
  {
    Id: 1,
    Name: "Vercel T-Shirt - Men's",
    Price: 20,
    Description: "Develop. Preview. Ship.",
  },
  {
    Id: 2,
    Name: "Vercel T-Shirt - Women's",
    Price: 20,
    Description: "Develop. Preview. Ship.",
  },
  {
    Id: 3,
    Name: "Vercel Zip-up",
    Price: 30,
    Description: "Develop. Preview. Ship.",
  },
  {
    Id: 4,
    Name: "Vercel Mug",
    Price: 15,
    Description: "Develop. Preview. Ship.",
  },
  {
    Id: 5,
    Name: "Next.js Mug",
    Price: 15,
    Description: "Develop. Preview. Ship.",
  },
  {
    Id: 6,
    Name: "Vercel Mug - US",
    Price: 15,
    Description: "Develop. Preview. Ship.",
  },
];

// simulated call to fetch products
export const getProducts = async () => {
  await simulateSynchronousWork();
  return mockProducts.map((p) => ({ ...p, LastUpdated: new Date() }));
};
