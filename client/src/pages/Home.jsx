import React from "react";
import styled from "styled-components";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import TopContent from "../components/TopContent";

const BodyBackground = styled.body`
background-color: #dcd9da;
`;
const Home = () => {
  return (
      <BodyBackground>
      <Navbar />
      <TopContent />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
      </BodyBackground>
  );
};

export default Home;
