import React from "react";
import NavBar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import ProductDetail from "../components/ProductDetail";
import Header from "../components/Footer";
import Sidebar from "../components/Sidebar";
// import Cart from '../components/Cart';

const ProductDetailPage = () => {
  return (
    <>
      <NavBar />
      <PageHeading title="Home / About" />
      <section className="section section-center">
        <h3 className="section-title">
          <p>We ensure your all Telecommunication need comes to an end.</p>
          <p>
            We are an iso certified company with a proven track record of
            supplying quality telecommunication products since 1999.
          </p>
        </h3>

        <br />
        <div className="title">
          <span />
          <h2>CONTACT US</h2>
          <span />
        </div>
        <p className="about-text">
          314,3rd Floor, Sarvodaya commercial centre,
          <br />
          Near - G.P.O. Salapos Road,Ahmedabad-
          <br />
          380001 Gujarat-(India)
        </p>
        <p className="about-text">
          Tel. 7041386179,9426002021
          <br />
          Email: sstechnotrade@yahoo.co.in
        </p>
        <br />
        <div className="title">
          <span />
          <h2>Our Product Range</h2>
          <span />
        </div>
        <p className="about-text">
          • RF Coaxial Cables
          <br />
          • RF Coaxial Connectors
          <br />
          • Power Cables
          <br />
          • Data Transmission Cables
          <br />
          • Antennas
          <br />
          • Installation Materials
          <br />
          • Tools
          <br />
          • Instruments
          <br />
        </p>
      </section>
      <Sidebar />
      <Header />
      {/* <Cart/> */}
    </>
  );
};

export default ProductDetailPage;
