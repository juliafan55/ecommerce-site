import React from "react";
import cardImage from "../images/home-card-image.jpeg"

function Home() {

    return (
        <div className="homepage">
            <div className="home-card">
                <img src={cardImage} className="home-card-image" alt="promotional" />
                {/* <div className="text-container"> */}
                        <div className="card-title"><h5> IT'S A BREEZE </h5></div>
                        <div className="card-text"><p> From airy dresses to simple footwear, this drop is what summer wardrobe dreams are made of.</p></div>
                    {/* </div> */}
            </div>
            {/* <Products /> */}
            {/* insert some horizontal scroll stuff with static data */}
        </div>
    )
    
}

export default Home