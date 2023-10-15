import { type IProductData } from "./getProductById";

export const getProducts = async (): Promise<IProductData[]> =>
	(
		await fetch(`https://naszsklep-api.vercel.app/api/products`)
	).json() as unknown as IProductData[];
