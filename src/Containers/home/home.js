import React from 'react';
import "./home.css";
import Header from "./../../Components/organisms/header/header";
import ProductList from "./../../Components/organisms/productList/productList";
import Slider from "./../../Components/organisms/slider/slider";
function home() {
    return (
        <div className="home">
            <Header upperText="Hey Awesome,"  lowerText="Welcome Back..."></Header>
            <Slider></Slider>
            <div className="listed-text">Listed Products</div>
            <ProductList></ProductList>
        </div>
    );
}

export default home;
