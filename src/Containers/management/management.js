import React from 'react';
import "./management.css";
import Header from "./../../Components/organisms/header/header";
import ListManager from "./../../Components/molecules/listManager/listManager";

function management() {
    return (
        <div className="management">
            <Header upperText="" lowerText="Management"></Header>
            <ListManager></ListManager>
        </div>
    );
}

export default management;
