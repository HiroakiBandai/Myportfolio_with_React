import React from "react";
import Iconwrapper from './iconwrapper'
import Contact from './contact'
import FooterImage from '../../images/contactimage.jpg';
import CopyRight from './copyright'

export default function footerwrapper() {
    return (
        <div id='footerwrapper'>
            <img src={FooterImage} alt='footerimg' className='footerimage'/>

            <div className='contactbandle'>
                <Contact/>
                <h1  className='iconTitle'>Find it out!!</h1>
                <Iconwrapper/>
            </div>
            <CopyRight/>
        </div>
    )
}