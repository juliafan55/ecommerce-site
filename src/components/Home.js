import React from "react";
import cardImage from "../images/home-hero-image.jpg"

function Home() {

    return (
        <div className="w-full h-screen bg-white flex flex-col justify-between">
            <div className="grid md:grid-col max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-4">
                    <p className="text-3xl md:text-5xl font-bold text-indigo-500">IT'S A BREEZE</p>
                    <p className="py-3 text-xl md:text-2xl">From airy dresses to simple footwear, this drop is what summer wardrobe dreams are made of.</p>
                </div>
                <div>
                    <img className="w-full" src={cardImage} alt="dress"></img>
                </div>
            </div>
        </div>
    )
}

export default Home