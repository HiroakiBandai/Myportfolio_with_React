import React from 'react';



export default function skillSet() {
    const listStyle = {
        listStyleType:"none",
};

    return (
        <div className="skillSetWrapper">
            <h2 data-aos="fade-up" className='subTitle'>SkillSet</h2>
            <ul className="list-inline dev-icons" style={listStyle}>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="fab fa-html5 fa-5x faa-wrench animated-hover"  style={{color:"#F16529"}} ></i>
                </li>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" className="fab fa-css3-alt fa-5x faa-wrench animated-hover" style={{color:"#2199F8"}}></i>
                </li>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" className="fab fa-js-square fa-5x faa-wrench animated-hover" style={{color:"#FFE270"}}></i>
                </li>

                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800" className="fab fa-react fa-5x faa-wrench animated-hover" style={{color:"#61DBFB"}}></i>
                </li>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900" className="fab fa-node-js fa-5x faa-wrench animated-hover" style={{color:"#80BD01"}}></i>
                </li>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="fab fa-sass fa-5x faa-wrench animated-hover" style={{color:"#CF649A"}}></i>
                </li>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100" className="fab fa-npm fa-5x faa-wrench animated-hover" style={{color:"#C53635"}}></i>
                </li>
                <li>
                    <i data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200" className="fab fa-github-square fa-5x faa-wrench animated-hover" style={{color:"black"}}></i>
                </li>

            </ul>
        </div>
    );
}