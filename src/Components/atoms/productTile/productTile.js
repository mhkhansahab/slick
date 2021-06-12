import React from "react";
import "./productTile.css";
import { useSelector , connect} from "react-redux";
import coinIcon from "./../../../Assets/general/coin.svg";
import TileButtons from "./../tileButtons/tileButtons";
import {deleteProduct} from "./../../../Store/action/actions"

function ProductTile(props) {

  const productRemover = (id)=>{
    props.deleteProduct(id);
}
  
const productsData = useSelector((state) => state.products);
 
  return (
    <div className="product-tile">
      <table>
        <tr className="head">
          <th>Category</th>
          <th>Product Name</th>
          <th>Price</th>
          <th></th>
        </tr>
        
        {productsData.map((item, index) => {
          return (
            <tr className="tile" key={index}>
              <td className="flex center-2">
                <img src={item.image} alt="" className="tile-img"></img>
                <span className="category">{item.category.name}</span>
              </td>
              <td className="tile-product-name">{item.name}</td>
              <td>
                <div className="flex center-2 center-1">
                  <img src={coinIcon} alt=""></img>
                  <span className="tile-product-price">{item.price}</span>
                </div>
              </td>
              <td>
                <TileButtons
                deleteFunc={()=>productRemover(item._id)}
                editFunc={()=>props.modalController("edit",item._id,"product")}
                ></TileButtons>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

const mapDispatchToProps = {
  deleteProduct
}

export default connect(null,mapDispatchToProps)(ProductTile);
