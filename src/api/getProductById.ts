export interface IProductData {
	id: string;
	title: string;
	price: number;
	category: string;
	image: string;
	description: string;
	longDescription: string;
}

export const getProductById = async (id: string): Promise<IProductData> =>
	(
		await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
	).json() as unknown as IProductData;
