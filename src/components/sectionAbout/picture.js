import React from 'react';
import AboutImage from '../../images/Hiroaki.JPG'

export default function pictureContainer() {
    const AboutImageComponent = () => {
        return (
            <div className="aboutPictureWrapper">
                <img data-aos="fade-up" src={AboutImage} alt="MyPicture" className="myPicture"/>
                <h1 data-aos="fade-up" className="pictureText">Simpler is usually better</h1>
            </div>
        )
    };
    return (
        <React.Fragment>
            <AboutImageComponent/>
        </React.Fragment>
    );
}
