import React from 'react';
import "./management.css";
import Header from "./../../Components/organisms/header/header";
import ListManager from "./../../Components/molecules/listManager/listManager";
import Modal from "./../../Components/organisms/modal/modal";
import {useState} from "react";
import {withRouter} from "react-router-dom";
import {useSelector , connect} from "react-redux";
import {setProductModal} from "./../../Store/action/actions";

function Management(props) {
    const isBanner = props.location.pathname.includes("banner");
    const [showModal, setshowModal] = useState(false);


    const modalController = (type, id)=>{
        if(type === "add"){
            setshowModal(!showModal);
        }else{
            props.setProductModal(id)            
        }
    }

    return (
        <div className="management">
            <Header upperText="" lowerText="Management"></Header>
            <ListManager modalController={modalController} modalController = {modalController}></ListManager>
            {
                showModal ? <Modal modalController = {modalController} isBanner={isBanner}></Modal> : null
            }
        </div>
    );
}

const mapDispatchToProps = {
    setProductModal
}

export default connect(null,mapDispatchToProps)(withRouter(Management));