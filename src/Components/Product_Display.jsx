import React, { useRef, useState } from 'react'
import '../Style/Product_Display.css'
import Products_Item from '../assets/Products_Item'
import { useParams } from 'react-router-dom'

const Product_Display = () => {
    let { ProductId } = useParams();
    let [readState, setReadState] = useState(true);
    let readmdiv = useRef(null);
    let readmspan = useRef(null);
    const handleReadMore = () => {
        if (readState) {
            readmdiv.current.style.display = "block";
            readmspan.current.textContent = 'Showless...'
            setReadState(false);
        }
        else {
            readmdiv.current.style.display = "none";
            readmspan.current.textContent = 'Readmore...'
            setReadState(true);
        }
    }

    return (
        <>
            <div className='orderpagediv'>
                <div className="leftdiv">
                    <div className="leftimgdiv">
                        <img className='proimag' src={Products_Item[ProductId].Image} alt="" />
                    </div>
                    <div className="leftbtndiv">
                        <button className='btn1p  Probtn'>
                            ADD TO CART
                        </button>
                        <button className='btn2p Probtn'>
                            BUY NOW
                        </button>
                    </div>
                </div>

                <div className="rightdiv">
                    <p className='ProPara'>{Products_Item[ProductId].Title}</p>
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
                            <span>{Products_Item[ProductId].Features[0].title}</span>
                            <p className='paradis'>{Products_Item[ProductId].Features[0].details}
                            </p>

                            <span>{Products_Item[ProductId].Features[1].title}</span>
                            <p className='paradis'>
                                {Products_Item[ProductId].Features[1].details}
                            </p>

                            <span>{Products_Item[ProductId].Features[2].title}</span>
                            <p className='paradis'>{Products_Item[ProductId].Features[2].details}</p>

                            <div className="readmorediv" ref={readmdiv}>
                                <span>{Products_Item[ProductId].Features[3].title}</span>
                                <p className='paradis'>{Products_Item[ProductId].Features[3].details}</p>

                                <span>{Products_Item[ProductId].Features[4].title}</span>
                                <p className='paradis'>{Products_Item[ProductId].Features[4].details}</p>

                                <span>{Products_Item[ProductId].Features[5].title}</span>
                                <p className='paradis'>{Products_Item[ProductId].Features[5].details}</p>
                            </div>
                            <span className='readmorespan' onClick={handleReadMore} ref={readmspan}>Readmore...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_Display