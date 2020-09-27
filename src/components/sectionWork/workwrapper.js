import React from 'react';

import WorkMainTitle from './workmaintitle';
import Card from './workcard';

export default function workWrapper() {
    return (
        <div id='sectionwork'>
            <div className="workwrapper">
                <WorkMainTitle/>
                <div className='cardwrapper'>
                    <Card title="project"text="This project was created by my first team and is in charge of the main menu and mediaquery, the women section. "year="April 30"image="../../../public/images/work1.png"/>
                    <Card title="project"text="This project was created by my second team and is in charge of the instagram api part and boxcampsecton"year="july 13"image=""/>
                    <Card title="API"text="This project was created by my third team and is in charge of the instagram api part and boxcampsecton"year=" August 10"image=""/>
                    <Card title="API"text="This project was created by my fource team and is in charge of the instagram api part and boxcampsecton"year="August 13"image=""/>
                </div>
            </div>
        </div>
    );
}