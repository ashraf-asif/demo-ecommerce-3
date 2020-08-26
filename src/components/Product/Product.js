import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
	const { name, img, seller, price, stock } = props.product;

	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div className="product-details">
				<h4 className="product-name">{name}</h4>
				<br />
				<p>
					<small>By {seller}</small>
				</p>
				<h4>$ {price}</h4>
				<p>
					<small>Only {stock} left in stalk.</small>
				</p>
        <button onClick={() => props.handleAddToCart(props.product)} className="add-to-cart"><FontAwesomeIcon icon={faCartPlus}/> Add to cart</button>
			</div>
		</div>
	);
};

export default Product;
