import React from 'react';
import MainImage from "../../images/mainImage.jpg";

export default function SimpleContainer() {
    const MainImageComponent = () => {
        return (
        <div id="headerMainWrapper">
            <img src={MainImage} alt="Image" className="MainImage"/>
            <h1 className="mainTitle">Hiroaki's Portfolio</h1>
        </div>
        )
    }
    return (
        <React.Fragment>
                <MainImageComponent/>
        </React.Fragment>
    );
}
