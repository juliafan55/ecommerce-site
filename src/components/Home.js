import React from "react";
import cardImage from "../images/home-card-image.jpeg"
import "../styles/home.scss"

function Home() {

    return (
        <div className="homepage">
            <div className="home-card">
                <img src={cardImage} className="home-card-image" alt="promotional" />
                <div className="overlay">
                    <div className="container">
                        <h5 className="card-title"> IT'S A BREEZE </h5>
                        <p className="card-text"> From airy dresses to simple footwear, this drop is what summer wardrobe dreams are made of.</p>
                    </div>
            </div>
            </div>
            {/* <Products /> */}
            {/* insert some horizontal scroll stuff with static data */}
        </div>
    )
    
}

export default Home