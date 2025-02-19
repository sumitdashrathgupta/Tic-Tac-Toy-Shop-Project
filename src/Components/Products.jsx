import React, { useState } from "react";
import "../Style/Card.css"
import { useNavigate } from "react-router-dom";

const Products = (props) => {
    const [Data, setData] = useState(null)
    const Navigate = useNavigate()

    const DataShering = () => {
        Navigate("LandingPro")
    }

    return (
        <>
            <div className="card">
                <div className="card-i" onClick={DataShering}>
                    <img className="card-img-style" src={props.Image} alt="Car" />
                    <div className="control-data">
                        <h2 className="toy-title">{props.Title}</h2>
                        <p className="toy-reting">{props.Reting}</p>
                        <p className="toy-price">₹ {props.Price}</p>
                    </div>
                </div>
                <div className="btn-section">
                    <button type="button" className="btn-add">Add to Card</button>
                    <button type="button" className="btn-buy">Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Products