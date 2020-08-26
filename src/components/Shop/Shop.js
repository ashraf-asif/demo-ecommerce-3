import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import './Shop.css'
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
	const pro = fakeData.slice(0, 10);
	const [products, setProducts] = useState(pro);
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
	}

	return (
		<div>
			<div className="shop-container">
				<div className="product-container">
					<ul>
						{products.map((product) => (
							<Product handleAddToCart={handleAddToCart} product={product}></Product>
						))}
					</ul>
				</div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
			</div>
		</div>
	);
};

export default Shop;
