import React from "react";
import cardImage from "../images/home-card-image.jpeg"

function Home() {

    return (
        <div className="homepage">
            <div className="homeCard">
                <img src={cardImage}className="homeCardImage" alt="promotional" />

            </div>
        </div>
    )
    
}

export default Home