import { type IProductData } from "./getProductById";

export const getProducts = async (page: number): Promise<IProductData[]> =>
	(
		await fetch(`https://naszsklep-api.vercel.app/api/products?take=20&offset=${page}`)
	).json() as unknown as IProductData[];
