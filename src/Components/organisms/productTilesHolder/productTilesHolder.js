import React from 'react';
import "./productTilesHolder.css";
import ProductTile from "./../../atoms/productTile/productTile";

function productTilesHolder(props) {
    return (
        <div>
            <ProductTile modalController = {props.modalController}></ProductTile>
        </div>
    );
}

export default productTilesHolder;
