// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { type FC, type PropsWithChildren } from "react";
import { getProducts } from "@/api/getProducts";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const ProductsLayout: FC<PropsWithChildren> = async ({ children }) => {
	const data = await getProducts();

	console.log(Array.from({ length: data.length / 5 }, (v, i) => i + 1));
	return (
		<div>
			{children}
			<div aria-label="pagination">
				{Array.from({ length: data.length / 5 }, (v, i) => i + 1).map((page) => (
					<ActiveLink key={page} role="link" href={`/products/${page}`}>
						{page}
					</ActiveLink>
				))}
			</div>
		</div>
	);
};

export default ProductsLayout;
