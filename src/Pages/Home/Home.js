import React from "react";
import Header from "../../Components/Header";
import TopMenu from "../../Components/TopMenu";
import SideMenu from "../../Components/SideMenu";
import Footer from "../../Components/Footer";
import ProductCard from "../../Components/ProductCard";

const Home = () => {
	const productData = [
		{
			img: "https://rukminim2.flixcart.com/image/832/832/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
			name: "Product one ",
		},
		{
			img: "https://rukminim2.flixcart.com/image/832/832/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
			name: "Product two ",
		},
		{
			img: "https://rukminim2.flixcart.com/image/832/832/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
			name: "Product three ",
		},
		{
			img: "https://rukminim2.flixcart.com/image/832/832/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
			name: "Product 4 ",
		},
		{
			img: "https://rukminim2.flixcart.com/image/832/832/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
			name: "Product 5 ",
		},
		{
			img: "https://rukminim2.flixcart.com/image/832/832/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
			name: "Product 6 ",
		},
	];
	return (
		<div className="main-container">
			<Header />
			<TopMenu />
			<div className="section-container">
				<SideMenu />
				<div className="content">
					{productData.map((data, i) => (
						<ProductCard data={data} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
