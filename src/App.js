import React from 'react';
import './App.css';
import Laptopmenu from './components/sectionheader/laptopmenu';
import Headermain from './components/sectionheader/headermain';
import Aboutwrapper from'./components/sectionAbout/aboutWrapper';
import Skillwrapper from './components/sectionSkill/skillWrapper';
import WorkWrapper from './components/sectionWork/workwrapper';
import FooterWrapper from './components/sectionFooter/footerwrapper';


const App=()=> {
    return (
    <div className="App">
        <Laptopmenu/>
        <Headermain/>
        <Aboutwrapper/>
        <Skillwrapper/>
        <WorkWrapper/>
        <FooterWrapper/>
    </div>
  );
}


export default App;
