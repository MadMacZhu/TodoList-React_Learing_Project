import React from 'react';

function Product(props){
	return(
		<div>
			<h3>{props.product.type}</h3>
			<p>${props.product.price}</p>
		</div>
		);
}

export default Product;