import React from "react";
import "../Style/Card.css"
import Car1 from "../assets/Card image/car2.jpg"
import Car2 from "../assets/Card image/car1.webp"
import Car3 from "../assets/Card image/car3.jpg"
import Car4 from "../assets/Card image/car4.jpg"
import Car5 from "../assets/Card image/car5.jpg"
import Car6 from "../assets/Card image/car6.jpg"
import Car7 from "../assets/Card image/car7.jpg"
import Car8 from "../assets/Card image/car10.webp"

const Products = () => {
    return (
        <>
            <main className="main card-main">
                <div className="card-index">
                    <div className="card">
                        <img className="card-img-style" src={Car1} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car2} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car3} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car4} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car5} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car6} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car7} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-style" src={Car8} alt="Car" />
                        <div className="control-data">
                            <h2 className="toy-title">Romate title</h2>
                            <p className="toy-reting">Reting pros</p>
                            <p className="toy-price">₹ 299</p>
                        </div>
                        <div className="btn-section">
                            <button type="button" className="btn-add">Add to Card</button>
                            <button type="button" className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Products