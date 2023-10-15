import { type FC } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/getProductById";

interface IProductProps {
	params: {
		productId: string;
	};
}

export const generateMetadata = async ({ params }: IProductProps): Promise<Metadata> => {
	const { title, description } = await getProductById(params.productId);

	return {
		title,
		description,
	};
};

const Product: FC<IProductProps> = async ({ params }) => {
	const { title } = await getProductById(params.productId);

	return <h1>{title}</h1>;
};

export default Product;
