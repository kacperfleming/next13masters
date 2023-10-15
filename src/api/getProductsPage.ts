import { type IProductData } from "./getProductById";

const ITEMS_PER_PAGE = 5;

export const getProductsPage = async (page: number): Promise<IProductData[]> =>
	(
		await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${ITEMS_PER_PAGE}&offset=${
				ITEMS_PER_PAGE * page
			}`,
		)
	).json() as unknown as IProductData[];
