// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Link from "next/link";
import { getProducts } from "@/api/getProducts";

export interface IProductData {
	id: string;
	title: string;
	price: number;
	category: string;
	rating: { rate: number; count: number };
	image: string;
	longDescription: string;
}

const Home = async () => {
	const data = await getProducts();

	return (
		<>
			<ul data-testid="products-list">
				{data.map(({ id, image, title, price, category }) => (
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
		</>
	);
};

export default Home;
