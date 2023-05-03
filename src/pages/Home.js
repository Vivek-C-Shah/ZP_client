import React from 'react';
import NavBar from '../components/Navbar';
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import Header from '../components/Footer';
import Sidebar from '../components/Sidebar';
// import Cart from '../components/Cart';

const Home = () => {
	return(
		<>
		 	<NavBar/>
		 	<Slider/>
		 	<FeaturedProducts/>
		 	<Sidebar/>
		<Header/>
		 	{/* <Cart/> */}
		</>
		)
}


export default Home;
