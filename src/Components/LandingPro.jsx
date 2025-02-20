import React, { useRef, useState } from 'react'
import Car from '../assets/Card image/car2.jpg'
import '../Style/LandingPro.css'

const LandingPro = (props) => {
    let [readState,setReadState] = useState(true);
    let readmdiv = useRef(null);
    let readmspan = useRef(null);
    const handleReadMore = ()=>{
        if(readState){
            readmdiv.current.style.display = "block";
            readmspan.current.textContent = 'Showless...'
            setReadState(false);
        }
        else{
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
                        <img className='proimag' src={Car} alt="" />
                    </div>
                    <div className="leftbtndiv">
                        <button className='btn1 Probtn'>
                           ADD TO CART
                        </button>
                        <button className='btn2 Probtn'>
                            BUY NOW
                        </button>
                    </div>
                </div>

                <div className="rightdiv">
                    <p className='ProPara'>Remote control car BMW car with 3 joined battery, Quick battery charger (Black Color car size-10 inch)</p>
                    <span className='specialpricespan'>Special price</span>
                    <div className="pricediv">
                        <span className='pricespans pricesp'>₹300</span>
                        <span className='pricespans prevPricesp'>₹999</span>
                        <span className='pricespans offpricesp'>70% off</span>
                    </div>
                    <span className='urgencyspan'>Hurry, Only 3 left!</span>
                    <div className='descriptiondiv'>
                        <span>Description:</span>
                        <p>Now in this generation handling kids is a most headache thing and engaging kids with the remote control cars is an ideal choice. Bringing Remote control car at your home makes your kid feel good and engaged and also it has húge battery capacity which makes your kid engaged for more than 3 hours per charge , With different colors varient, Steel body and in this low cost make it different from the other car seller from market.</p>
                    </div>

                    <div className="featuresdiv">
                        <span>Features: </span>
                        <div>
                            <span>High-Capacity Battery:</span>
                            <p>Comes with a 3-joined battery setup for extended playtime.
                                Provides 3+ hours of continuous runtime per charge.
                                Fast Charging:
                            </p>

                            <span>Remote Control Functionality:</span>
                            <p>
                                2.4 GHz remote control for smooth and long-range operation.
                                Supports multi-directional movement (forward, backward, left, right).
                            </p>

                            <span>Premium Build Quality:</span>
                            <p> Made with a steel body for durability and long-lasting use.
                                Available in multiple colors for personalization.</p>
                            
                            <div className="readmorediv" ref={readmdiv}>
                                <span>Attractive & Realistic Design:</span>
                                <p>BMW-inspired sports car look with a sleek aerodynamic design.
                                    10-inch size, making it compact yet powerful.</p>

                                <span>Perfect for Kids & Adults:</span>
                                <p>Helps in hand-eye coordination and motor skill development.
                                    Ideal for kids and RC car enthusiasts.</p>

                                <span>Limited Stock Alert:</span>
                                <p>Hurry! Only 3 left in stock.</p>
                            </div>
                            <span className='readmorespan' onClick={handleReadMore} ref={readmspan}>Readmore...</span>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default LandingPro