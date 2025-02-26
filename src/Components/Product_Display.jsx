import React, { useRef, useState, useEffect } from 'react';
import '../Style/Product_Display.css';
import Products_Item from '../assets/Products_Item';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/Slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Product_Display = (props) => {
    let { ProductId } = useParams();
    let [readState, setReadState] = useState(true);
    let readmdiv = useRef(null);
    let readmspan = useRef(null);
    let Navigate = useNavigate();
    let dispatch = useDispatch();


    //!Scroll to top when component loads

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleReadMore = () => {
        if (readState) {
            readmdiv.current.style.display = "block";
            readmspan.current.textContent = 'Show less...';
            setReadState(false);
        } else {
            readmdiv.current.style.display = "none";
            readmspan.current.textContent = 'Read more...';
            setReadState(true);
        }
    };

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: Products_Item[ProductId].id,
                title: Products_Item[ProductId].Title,
                price: Products_Item[ProductId].Price,
                image: Products_Item[ProductId].Image,
                rating: Products_Item[ProductId].Reting,
            })
        );
        Navigate(`/cart/${Products_Item[ProductId].id - 1}`); 
    };
    return (
        <div className='orderpagediv'>
            <div className="leftdiv">
                <div className="leftimgdiv">
                    <img className='proimag' src={Products_Item[ProductId].Image} alt="" />
                </div>
                <div className="leftbtndiv">
                    <button className='btn1p Probtn' onClick={handleAddToCart}>ADD TO CART</button>
                    <button className='btn2p Probtn'>BUY NOW</button>
                </div>
            </div>

            <div className="rightdiv">
                <p className='ProPara'>{Products_Item[ProductId].Title}</p>
                <span>{Products_Item[ProductId].Reting()}</span>
                <span className='specialpricespan'>Special price</span>
                <div className="pricediv">
                    <span className='pricespans pricesp'>₹{" "}{Products_Item[ProductId].Price}</span>
                    <span className='pricespans prevPricesp'>₹{Products_Item[ProductId].PreviousPrice}</span>
                    <span className='pricespans offpricesp'>{Products_Item[ProductId].PercentOff}</span>
                </div>
                <span className='urgencyspan'>Hurry, Only 3 left!</span>
                <div className='descriptiondiv'>
                    <span>Description :</span>
                    <p className='paradis'>{Products_Item[ProductId].Description}</p>
                </div>

                <div className="featuresdiv">
                    <span className='main-span'>Features :</span>
                    <div>
                        {Products_Item[ProductId].Features.map((feature, index) => (
                            <div key={index}>
                                <span>{feature.title}</span>
                                <p className='paradis'>{feature.details}</p>
                            </div>
                        ))}
                        <div className="readmorediv" ref={readmdiv} style={{ display: 'none' }}>
                            <span>{Products_Item[ProductId].Features[3].title}</span>
                            <p className='paradis'>{Products_Item[ProductId].Features[3].details}</p>
                        </div>
                        <span className='readmorespan' onClick={handleReadMore} ref={readmspan}>Read more...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product_Display;
