import React from 'react';
import "./bannerTilesHolder.css";
import BannerTile from "./../../atoms/bannerTile/bannerTile";


function bannerTilesHolder() {
    return (
        <div>
            <BannerTile></BannerTile>
            <BannerTile></BannerTile>
            <BannerTile></BannerTile>
            <BannerTile></BannerTile>
            <BannerTile></BannerTile>
        </div>
    );
}

export default bannerTilesHolder;