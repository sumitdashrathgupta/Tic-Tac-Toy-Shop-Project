import React from "react"
import Car1 from "./Card image/car2.jpg"
import Car2 from "./Card image/car1.webp"
import Car3 from "./Card image/car3.jpg"
import Car4 from "./Card image/car4.jpg"
import Car5 from "./Card image/car5.jpg"
import Car6 from "./Card image/car6.jpg"
import Car7 from "./Card image/car7.jpg"
import Car8 from "./Card image/car10.webp"
import { CiStar } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Products_Item = [
    {
        id:1,
        Image: Car1,
        Title: "Remote car1",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>),
        Price: "999"
    },
    {
        id:2,
        Image: Car2,
        Title: "Remot2 Car2",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "899"
    },
    {
        id:3,
        Image: Car3,
        Title: "Remot2 Car3",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "799"
    },
    {
        id:4,
        Image: Car4,
        Title: "Remot2 Car4",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "899"
    },
    {
        id:5,
        Image: Car5,
        Title: "Remot2 Car5",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "999"
    },
    {
        id:6,
        Image: Car6,
        Title: "Remot2 Car6",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "699"
    },
    {
        id:7,
        Image: Car7,
        Title: "Remot2 Car7",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "599"
    },
    {
        id:8,
        Image: Car8,
        Title: "Remot2 Car8",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "699"
    }
];

export default Products_Item;
