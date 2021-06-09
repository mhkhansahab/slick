import React from 'react';
import "./listManager.css";
import BannerTilesHolder from "./../../organisms/bannerTilesHolder/bannerTilesHolder";
import ProductTilesHolder from "./../../organisms/productTilesHolder/productTilesHolder";

function listManager() {
    return (
        <div className="banner-container">
            <div className="management-nav flex center-2">
                <div className="management-links">
                    <div className="management-links-text">Manage Banner</div>
                    <div className="management-links-border"></div>
                </div>
                <div className="management-links product">
                    <div className="management-links-text">Manage Products</div>
                    <div className="management-links-border"></div>
                    </div>
                <div className="add-new-btn">+ Add New</div>
            </div>
            <BannerTilesHolder></BannerTilesHolder>
            {/* <ProductTilesHolder></ProductTilesHolder> */}
        </div>
    );
}

export default listManager;
