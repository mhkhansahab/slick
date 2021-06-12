import React from "react";
import "./modal.css";
import close from "./../../../Assets/general/close.svg";
import coin from "./../../../Assets/general/coin.svg";
import { useState ,useEffect } from "react";
import { useSelector , connect} from "react-redux";
import {createBanner, createProduct, modalCleaner, updateBanner, updateProduct ,editStatusChanger} from "./../../../Store/action/actions";
import Swal from 'sweetalert2';

function Modal(props) {
  const [banner, setbanner] = useState({ link: "" });
  const [product, setproduct] = useState({
    image: "",
    category: "",
    name: "",
    price: "",
  });

  const categories = useSelector((state) => state.categories);
  const {isEdit , data} = useSelector((state)=> state.modal);

  useEffect(()=>{
    if(data.length !== 0){
      const element = data[0];
    if(props.isBanner){
      setbanner({link : element.link});
    }else{
      setproduct({
        image : element.image,
        category : element.category.name,
        name : element.name,
        price : element.price
      })
    }
}
  },[])

  
  const bannerHandler = (e) => {
    const input = { ...banner };
    input.link = e.target.value;
    setbanner(input);
  };

  const addBanner = () => {
    const input = {...banner}
    if(input.link !== ""){
        
        try{
          props.createBanner(input);
          setbanner({link : ""});
          props.modalController("add");
          props.modalCleaner();
        }catch{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
    }else{
      Swal.fire('No URL Added');
    }
  };

  const editBanner = () => {
    const input = {...banner}
    if(input.link !== ""){
      try{  
      props.updateBanner(input, data[0]._id);
        setbanner({link : ""});
        props.modalController("add");
        props.modalCleaner();
        props.editStatusChanger(false);
      }catch{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        
      }
    }else{
      Swal.fire('No URL Added');
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
      try{  
      props.createProduct(input);
        setproduct({
          image : "",
          name:"",
          price:"",
          category:""});
        props.modalController("add");
        props.modalCleaner();
      }catch{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }
    }
    else{
      Swal.fire('Enter All Fields');
    }
  }

  const editProduct = ()=>{
    const input = {...product}
    if(input.name !== "" && input.link !== "" && input.price !== "" && input.category !== ""){
      try{  
      props.updateProduct(input, data[0]._id);
        setproduct({
          image : "",
          name:"",
          price:"",
          category:""});
        props.modalController("add");
        props.modalCleaner();
        props.editStatusChanger(false);
      }
      catch{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }
    }
    else{
      Swal.fire('Enter All Fields');
    }
  }

  const bannerModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Banner</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={()=>{
              props.modalController("add","");
              props.editStatusChanger(false);
            }}
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
            onClick={()=>{
              props.modalController("add","");
              props.editStatusChanger(false);
            }}
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
          <div className="save-btn" onClick={isEdit ? editBanner : addBanner}>
            Save
          </div>
        ) : (
          <div className="save-btn" onClick={isEdit ? editProduct : addProduct}>
            Save
          </div>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  createBanner,
  createProduct,
  modalCleaner,
  updateBanner,
  updateProduct,
  editStatusChanger
}

export default connect(null,mapDispatchToProps)(Modal);
