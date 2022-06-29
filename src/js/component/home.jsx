import React from "react";

//include images into your bundle

import Navbar from "../component/navbar.jsx"
import Jumbotron from "../component/jumbotron.jsx"
import Card from "../component/card.jsx"
import Footer from "../component/footer.jsx"


//create your first component
const Home = () => {
	return (<div>
		<Navbar/>
		<div><Jumbotron/>
		<ul className="card-deck d-flex container my-5">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</ul>
		</div>
		<Footer/>
		
		
	</div> 	
	);
};


export default Home; 
