import React from "react";
import Landingmain from "./Landing"
import "../Style/Card.css"
import Products from "./Products";
import { CiStar } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Car1 from "../assets/Card image/car2.jpg"
import Car2 from "../assets/Card image/car1.webp"
import Car3 from "../assets/Card image/car3.jpg"
import Car4 from "../assets/Card image/car4.jpg"
import Car5 from "../assets/Card image/car5.jpg"
import Car6 from "../assets/Card image/car6.jpg"
import Car7 from "../assets/Card image/car7.jpg"
import Car8 from "../assets/Card image/car10.webp"

const LandingPage = () => {
    return (
        <>
            <Landingmain />
            <main className="main card-main">
                <div className="card-index">
                    <Products Image={Car1} Title="Remot Car" Price={999} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                    <Products Image={Car2} Title="Remot2 Car" Price={899} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>} />
                    <Products Image={Car3} Title="Remot3 Car" Price={399} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                    <Products Image={Car4} Title="Remot4 Car" Price={659} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                    <Products Image={Car5} Title="Remot5 Car" Price={599} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                    <Products Image={Car6} Title="Remot6 Car" Price={799} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                    <Products Image={Car7} Title="Remot7 Car" Price={999} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                    <Products Image={Car8} Title="Remot8 Car" Price={1999} Reting={<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>} />
                </div>
            </main>
        </>
    )
}


export default LandingPage