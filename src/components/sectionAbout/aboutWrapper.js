import React from 'react';
import Aboutmaintitle from './aboutMainTitle'
import Myhistory from './myHistory'
import Picture from './picture';


export default function aboutWrapper() {
    return (
        <div id="aboutwrapper">
            <Aboutmaintitle/>
            <div className="aboutsection2">
                <Picture/>
                <Myhistory/>
            </div>
        </div>
    );
}
