import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<br/>
			<div className='d-flex flex-row mb-3 justify-content-center'>
			<Card />
			<Card />
			<Card />
			<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
