import React from "react";
import "../Style/Card.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slice";
import Product_Display from "./Product_Display";

const Products = (props) => {
    const Navigate = useNavigate()
    const DataShering = () => {
        Navigate(`Product_Display/${props.id - 1}`)
    }

    const handleCart = () => {
        dispatch(addToCart({
            id: props.id,
            title: props.Title,
            price: props.Price,
            image: props.src,
            rating: props.Reting,
        }));
        Navigate(`/cart/${props.id - 1}`); 
    };
    

    const dispatch = useDispatch();

    return (
        <>
            <div className="card">
                <div className="card-i">
                    <img className="card-img-style" src={props.src} alt="Car" onClick={DataShering} />
                    <div className="control-data">
                        <h2 className="toy-title">{props.Title}</h2>
                        <p className="toy-reting">{props.Reting}</p>
                        <p className="toy-price">₹ {props.Price}</p>
                    </div>
                </div>
                <div className="btn-section">
                    <button type="button" className="btn-add" onClick={handleCart}>Add to Card</button>
                    <button type="button" className="btn-buy">Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Products