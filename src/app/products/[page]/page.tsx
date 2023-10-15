import { type FC } from "react";
import Link from "next/link";
import { getProductsPage } from "@/api/getProductsPage";

interface IProductsPageProps {
	params: {
		page: number;
	};
}
const ProductsPage: FC<IProductsPageProps> = async ({ params }) => {
	const products = await getProductsPage(params.page);

	return (
		<ul data-testid="products-list">
			{products.map(({ id, image, title, price, category }) => (
				<li key={id}>
					<Link prefetch href={`/product/${id}`}>
						<article>
							<div>
								<img alt={title} src={image} />
							</div>
							<div>
								<div>
									<h3 role="heading">{title}</h3>
									<p>{price}</p>
								</div>
								<p>{category}</p>
							</div>
						</article>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ProductsPage;
