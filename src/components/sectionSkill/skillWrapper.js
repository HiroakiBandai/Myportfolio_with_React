import React from 'react';

import Skilldiscription from './skillDiscription'
import Skillset from './skillSet'

export default function skillWrapper() {
    return (
        <div id='sectionSkill'>
            <div className="skillwrapper">
                <Skilldiscription/>
                <Skillset/>
            </div>
        </div>
    );
}