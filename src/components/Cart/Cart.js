import React from "react";

const Cart = (props) => {
	const cart = props.cart;

	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		const product = cart[i];
		total = total + product.price;
	}

	let shipping = 0;
	if (total > 35) {
		shipping = 0;
	} else if (total > 15) {
		shipping = 4.99;
	} else if (total > 0) {
		shipping = 12.99;
	}

  const tax = (total / 10).toFixed(2);

  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

	return (
		<div>
			<h2>Order summary</h2>
			<h4>Items ordered: {cart.length}</h4>
      <h4>Product price: {total.toFixed(2)}</h4>
			<h4>Shipping cost: {shipping}</h4>
			<h4>Tax: {tax}</h4>
			<h4>Total price: {grandTotal}</h4>
		</div>
	);
};

export default Cart;
