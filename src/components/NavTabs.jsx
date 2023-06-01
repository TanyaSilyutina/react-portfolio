import React from "react";
import {Link, NavLink} from "react-router-dom"
import "../styles/NavTabs.css"


function NavTabs() {
    return (
        <nav className="navbar navbar-expand-sm navSection">
            <div className="container-fluid">
                <div className={"mx-3"}>
                    <div className={"navbar-brand fs-3 myName"}><Link to={"/"} className={"myName"}>Tanya
                        Silyutina</Link></div>
                    <div className={"navbar-brand fs-6"}>Full-Stack Web Developer</div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id={'navbarCollapse'}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className={"nav-link"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className={"nav-link"}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={"nav-link"}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className={"nav-link"}>Resume</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default NavTabs;