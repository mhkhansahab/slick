import React from "react";
import "./productTile.css";
import UnitProductTile from "./../unitProductTile/unitProductTile";
import tileImg from "./../../../Assets/products-images/1.png";

function productTile() {
  return (
    <div className="product-tile">
      <table>
        <tr className="head">
          <th>Category</th>
          <th>Product Name</th>
          <th>Price</th>
          <th></th>
        </tr>
        <UnitProductTile
          image={tileImg}
          category="Casual"
          name="Overcome Basic Sweatshirt"
          price="4000"
        ></UnitProductTile>
        <UnitProductTile
          image={tileImg}
          category="Casual"
          name="Overcome Basic Sweatshirt"
          price="4000"
        ></UnitProductTile>
        <UnitProductTile
          image={tileImg}
          category="Casual"
          name="Overcome Basic Sweatshirt"
          price="4000"
        ></UnitProductTile>
        <UnitProductTile
          image={tileImg}
          category="Casual"
          name="Overcome Basic Sweatshirt"
          price="4000"
        ></UnitProductTile>



      </table>
    </div>
  );
}

export default productTile;
