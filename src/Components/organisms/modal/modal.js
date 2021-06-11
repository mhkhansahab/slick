import React from "react";
import "./modal.css";
import close from "./../../../Assets/general/close.svg";
import coin from "./../../../Assets/general/coin.svg";
import { useState } from "react";
import { useSelector , connect} from "react-redux";
import {createBanner, createProduct} from "./../../../Store/action/actions";


function Modal(props) {
  const [banner, setbanner] = useState({ link: "" });
  const [product, setproduct] = useState({
    image: "",
    category: "",
    name: "",
    price: "",
  });

  const categories = useSelector((state) => state.categories);

  const bannerHandler = (e) => {
    const input = { ...banner };
    input.link = e.target.value;
    setbanner(input);
  };

  const addBanner = () => {
    const input = {...banner}
    if(input.link !== ""){
        props.createBanner(input);
        setbanner({link : ""});
        props.modalController("add");
    }else{
      alert("No URL ADDED")
    }
  };

  const productHandler =(e, type)=>{
    
    if(type === "name"){
      setproduct({
        ...product,
        name : e.target.value
      })
    }else if(type === "price"){
      setproduct({
        ...product,
        price : e.target.value
      })
    }else if(type === "link"){
      setproduct({
        ...product,
        image : e.target.value
      })
    }else{
      setproduct({
        ...product,
        category : e.target.value
      })
    }
  }

  const addProduct = ()=>{
    const input = {...product}
    if(input.name !== "" && input.link !== "" && input.price !== "" && input.category !== ""){
        props.createProduct(input);
        setproduct({
          image : "",
          name:"",
          price:"",
          category:""});
        props.modalController("add");
    }
    else{
      alert("Enter Fields")
    }
  }



  const bannerModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Banner</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={()=>props.modalController("add","")}
          >
            <img src={close}></img>
          </div>
        </div>
        <div className="modal-fields">
          <div className="input-label">ENTER IMAGE URL</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={banner.link}
              onChange={(e) => bannerHandler(e)}
            ></input>
          </div>
        </div>
      </>
    );
  };

  const productModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Product</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={()=>props.modalController("add","")}
          >
            <img src={close}></img>
          </div>
        </div>
        <div className="modal-fields">
          <div className="input-label">ENTER IMAGE URL</div>
          <div className="input-field">
            <input type="text" placeholder="Write here..." 
            value={product.image}
            onChange={(e)=>productHandler(e,"link")}></input>
          </div>

          <div className="input-label">SELECT CATEGORY</div>
          <div className="input-field">
            <select type="text" onChange={(e)=>productHandler(e,"categories")}>
              <option disabled value="none">Select a Category</option>
              {categories.map((item) => {
                return <option key={item._id} value={item._id}>{item.name}</option>;
              })}
            </select>
          </div>

          <div className="input-label">PRODUCT NAME</div>
          <div className="input-field">
            <input type="text" placeholder="Write here..." 
            value={product.name}
            onChange={(e)=>productHandler(e,"name")}></input>
          </div>

          <div className="input-label">PRICE</div>
          <div className="input-field price-input">
            <img src={coin} alt=""></img>
            <input type="text" placeholder="Eg. 4500" 
            value={product.price}
            onChange={(e)=>productHandler(e,"price")}></input>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="modal flex center-1 center-2">
      <div className="fields-container">
        {props.isBanner ? bannerModal() : productModal()}
        {props.isBanner ? (
          <div className="save-btn" onClick={addBanner}>
            Save
          </div>
        ) : (
          <div className="save-btn" onClick={addProduct}>
            Save
          </div>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  createBanner,
  createProduct
}

export default connect(null,mapDispatchToProps)(Modal);
