import React from "react";
import "./style.css";
const ProductCard = ({ data }) => {
	return (
		<div className="card-main">
			<img src={data.img} />
			<p>{data.name}</p>
		</div>
	);
};

export default ProductCard;
