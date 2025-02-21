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
        id: 1,
        Image: Car1,
        Title2: 'Robot Lambo',
        Title: "Blue Transformer Lamborghini remote control car With Steel Body and Amazing look",
        Price: "999",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>),
        PreviousPrice: '1499',
        PercentOff: '33%',
        Description: "This sleek Blue Robot Lamborghini transforms into a robot and comes with a stylish steel body. Perfect for racing and display, it features powerful remote control and long-lasting durability.",
        Features: [
            { title: "One-Touch Transformation :", details: "Switches from car to robot instantly with a single button press, creating dynamic play experiences." },
            { title: "Ultra-Long Battery Backup :", details: "Supports up to 4 hours of continuous play with fast charging technology." },
            { title: "360° Spin Mode :", details: "Performs seamless 360° spins in robot mode, offering interactive and thrilling action." },
            { title: "Impact-Resistant Build :", details: "Durable ABS plastic ensures resistance to bumps and falls during active play." },
            { title: "STEM-Compatible Play :", details: "Inspires curiosity in robotics and engineering, ideal for young innovators." },
            { title: "Collector’s Edition Finish :", details: "Limited edition metallic blue variant available for a short period." }
        ]
    },
    {
        id: 2,
        Image: Car2,
        Title2: 'Mc laren',
        Title: "Yellow McLaren remote control car with stunning aerodynamic design and smooth control",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "899",
        PreviousPrice: '1399',
        PercentOff: '36%',
        Description: "Experience speed with the Yellow McLaren featuring aerodynamic curves and precise remote control. Ideal for collectors and racing enthusiasts.",
        Features: [
            { title: "Precision Racing Performance :", details: "Equipped with a race-tuned motor for maximum speed and acceleration on track." },
            { title: "Responsive Dual-Mode Steering :", details: "Allows sharp turns and drifting with superior control accuracy." },
            { title: "Lightweight Aerodynamic Frame :", details: "Crafted for enhanced speed and smooth handling in competitive racing." },
            { title: "LED Headlights & Taillights :", details: "Features realistic LED lights for nighttime racing aesthetics." },
            { title: "Recharge-On-The-Go :", details: "Fast USB charging support ensures minimal downtime between races." },
            { title: "Exclusive Limited Edition :", details: "Special edition with premium glossy finish—while supplies last." }
        ]
    },
    {
        id: 3,
        Image: Car3,
        Title2: 'osm design',
        Title: "Green and Yellow McLaren remote control car with awesome design and powerful engine",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></>),
        Price: "799",
        PreviousPrice: '1299',
        PercentOff: '38%',
        Description: "Stylish Green and Yellow McLaren designed for high-speed fun. Equipped with an efficient battery and responsive controls.",
        Features: [
            { title: "High-Performance Turbo Engine :", details: "Delivers superior speed with smooth handling on various terrains." },
            { title: "Dual-Color Sporty Design :", details: "Eye-catching yellow and green contrast with aerodynamic detailing." },
            { title: "Pro-Level Control Interface :", details: "Advanced remote with precision control and customizable speed settings." },
            { title: "Fast Rechargeable Battery :", details: "Long-lasting battery with quick-charge support included." },
            { title: "Interactive Play Mode :", details: "Encourages creative racing challenges and obstacle course fun." },
            { title: "Limited-Time Offer :", details: "Special pricing available for a limited period—don’t miss out!" }
        ]
    },
    {
        id: 4,
        Image: Car4,
        Title2: 'Monster Truck',
        Title: "Rugged Monster Truck with Off-Road Tires and Durable Build",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "899",
        PreviousPrice: '1399',
        PercentOff: '35%',
        Description: "Crush any terrain with this powerful Monster Truck featuring off-road tires and shockproof construction.",
        Features: [
            { title: "All-Terrain Wheels :", details: "Heavy-duty tires designed for off-road racing and stunts." },
            { title: "Shockproof Suspension :", details: "Absorbs shocks for a smoother ride on uneven surfaces." },
            { title: "High-Torque Motor :", details: "Powerful engine for climbing steep slopes with ease." },
            { title: "Long-Range Remote :", details: "Operate seamlessly from up to 50 meters away." },
            { title: "LED Night Lights :", details: "Bright LEDs for dramatic night-time driving experience." },
            { title: "Weather Resistant :", details: "Performs well under various weather conditions." }
        ]
    },
    {
        id: 5,
        Image: Car5,
        Title2: 'Monster Racer',
        Title: "Red Monster Racer with Powerful Motor and Sturdy Frame",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>),
        Price: "849",
        PreviousPrice: '1299',
        PercentOff: '34%',
        Description: "Conquer race tracks with the Red Monster Racer, boasting a powerful motor and robust frame for extreme durability.",
        Features: [
            { title: "High-Speed Motor :", details: "Built for speed with an ultra-powerful engine for competitive racing." },
            { title: "Durable Construction :", details: "Impact-resistant frame ensures longevity even during rough use." },
            { title: "360° Rotation Stunt :", details: "Performs jaw-dropping 360° spins and stunts effortlessly." },
            { title: "Easy USB Charging :", details: "Recharge quickly with USB charging capability." },
            { title: "Strong Grip Tires :", details: "Tires provide exceptional grip for all racing surfaces." },
            { title: "Bold Racing Look :", details: "Red sporty design adds flair to every race." }
        ]
    },
    {
        id: 6,
        Image: Car6,
        Title2: 'Transformer Car',
        Title: "Red Transformer Car with Robot Mode and Advanced Controls",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "999",
        PreviousPrice: '1499',
        PercentOff: '33%',
        Description: "Switch between a sleek car and powerful robot in seconds. Features responsive remote control and advanced robotics.",
        Features: [
            { title: "Seamless Robot Transformation :", details: "Transforms with a single button for immersive play." },
            { title: "Intelligent Obstacle Detection :", details: "Avoids collisions with smart sensors for safe play." },
            { title: "Rechargeable Battery Pack :", details: "Long-lasting battery for extended fun." },
            { title: "Dynamic Sound Effects :", details: "Realistic sound effects for a thrilling experience." },
            { title: "Vivid LED Lights :", details: "Bright LEDs enhance the robot's futuristic look." },
            { title: "Smooth Steering Control :", details: "Easy navigation with high-precision controls." }
        ]
    },
    {
        id: 7,
        Image: Car7,
        Title2: 'Off-Road Jeep',
        Title: "Blue Off-Road Jeep with Rugged Build and All-Terrain Capabilities",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /></>),
        Price: "899",
        PreviousPrice: '1399',
        PercentOff: '35%',
        Description: "Tackle tough trails with the Blue Off-Road Jeep, built for rough terrains with powerful wheels and robust design.",
        Features: [
            { title: "All-Terrain Mastery :", details: "Handles rocky, sandy, and muddy surfaces with ease." },
            { title: "Heavy-Duty Suspension :", details: "Absorbs impact for a stable and smooth drive." },
            { title: "Dual-Speed Control :", details: "Switch between high-speed racing and low-speed crawling." },
            { title: "Rechargeable Battery :", details: "Supports quick charging for extended playtime." },
            { title: "Bright LED Headlights :", details: "Lights up the path for nighttime exploration." },
            { title: "Durable Frame :", details: "Sturdy build designed for adventurous play." }
        ]
    },
    {
        id: 8,
        Image: Car8,
        Title2: 'Stunt Car',
        Title: "Green Stunt Car with 360° Spins and Flashing Lights",
        Reting: () => (<><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><CiStar /><CiStar /></>),
        Price: "749",
        PreviousPrice: '1199',
        PercentOff: '37%',
        Description: "Pull off amazing stunts with this Green Stunt Car featuring 360° spins, flashing lights, and robust tires for extreme fun.",
        Features: [
            { title: "360° Stunt Rotation :", details: "Performs complete flips and spins for non-stop entertainment." },
            { title: "Flashing LED Lights :", details: "Bright lights enhance stunt performances in the dark." },
            { title: "Shock-Absorbing Tires :", details: "Durable tires withstand tough landings and rough use." },
            { title: "Dual-Sided Driving :", details: "Drives on both sides, ensuring the fun never stops." },
            { title: "Fast Charging Technology :", details: "Quick recharge capability for minimal downtime." },
            { title: "User-Friendly Controls :", details: "Easy-to-use remote for all age groups." }
        ]
    }
];

export default Products_Item;
