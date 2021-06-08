import React from 'react';
import "./productList.css";
import Card from "./../../atoms/card/card";
import img1 from "./../../../Assets/product/1.png";
import img2 from "./../../../Assets/product/2.png";
import img3 from "./../../../Assets/product/3.png";
import img4 from "./../../../Assets/product/4.png";
import img5 from "./../../../Assets/product/5.png";

function productList() {
    return (
        <div className="product-list flex">
            <Card type="CASUAL" name="Overcome Basic Sweatshirt" image={img1}></Card>    
            <Card type="OUTDOOR" name="Overcome Purple Sweatshirt" image={img2}></Card>    
            <Card type="PARTY" name="Billy-bon Young Jacket" image={img4}></Card>    
            <Card type="OUTDOOR" name="Love Is Our Culture Yellow Tee" image={img3}></Card>    
            <Card type="PARTY" name="Toucan Pastel Shirt" image={img5}></Card>            
        </div>
    );
}

export default productList;
