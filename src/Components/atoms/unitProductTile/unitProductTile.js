import React from 'react';
import TileButtons from "./../tileButtons/tileButtons";
import coinIcon from "./../../../Assets/general/coin.svg";


function unitProductTile(props) {
    return (
        <>
             <tr className="tile">
                    <td className="flex center-2">
                        <img src={props.image} alt="" className="tile-img"></img>
                        <span className="category">{props.category}</span>
                    </td>
                    <td className="tile-product-name">{props.name}</td>
                    <td>
                        <div className="flex center-2 center-1">
                        <img src={coinIcon} alt=""></img>
                        <span className="tile-product-price">{props.price}</span>
                        </div>
                    </td>
                    <td><TileButtons></TileButtons></td>
                </tr>
        </>
    );
}

export default unitProductTile;
