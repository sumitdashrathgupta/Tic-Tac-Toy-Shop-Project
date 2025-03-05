import React from "react";
import Toyimage from '../assets/System Image/toy.png'
import "../Style/index.css"

const Landing = () => {
    return (
        <>
            <main className="main">
                <div className="section-second">
                    <p className="para-1 para">Welcome to Tic Tac Toy</p>
                    <p className="para-2 para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusamus et porro iusto eum ab delectus necessitatibus, eaque sit laudantium molestias aperiam veniam sunt! Reprehenderit amet nihil pariatur expedita ullam.</p>
                    <button type="button" className="btn page-btn">Check Out</button>
                </div>
                <div className="section-first">
                    <img className="toy-image" src={Toyimage} alt="Toyimag" />
                </div>
            </main>
        </>
    )
}

export default Landing