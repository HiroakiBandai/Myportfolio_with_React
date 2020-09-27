
import React from "react";

export default function iconwrapper() {
    return(
        <div className="iconwrapper">

            <a className="button" href='https://www.facebook.com/hiroaki.bandai'>
                <div className="icon"><i className="fab fa-facebook-f"></i></div>
                <span>Facebook</span>
            </a>

            <a className="button" href='https://twitter.com/@bandai0324'>
                <div className="icon"><i className="fab fa-twitter"></i></div>
                <span>Twitter</span>
            </a>

            <a className="button" href='https://www.instagram.com/banpirori'>
                <div className="icon"><i className="fab fa-instagram"></i></div>
                <span>instagram</span>
            </a>

            <a className="button"href='https://github.com/HiroakiBandai'>
                <div className="icon"><i className="fab fa-github"></i></div>
                <span>Github</span>
            </a>
        </div>
    )

}