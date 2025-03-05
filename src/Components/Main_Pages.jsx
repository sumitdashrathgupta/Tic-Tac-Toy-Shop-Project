import React from "react";
import Landingmain from "./Landing"
import "../Style/Card.css"
import Products from "./Products";
import Products_Item from "../assets/Products_Item"

const Main_Pages = () => {
    return (
        <>
            <Landingmain />
            <main className="main card-main">
                <div className="card-index">
                    {Products_Item.map((item, i) => {
                        return <Products key={i + 1} id={item.id} src={item.Image} Title={item.Title2} Reting={<item.Reting />} Price={item.Price} />       
                    })}
                </div>
            </main>
        </>
    )
}


export default Main_Pages