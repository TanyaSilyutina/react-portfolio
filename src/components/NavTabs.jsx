import React from "react";
import {Link} from "react-router-dom"
import "../styles/NavTabs.css"


function NavTabs() {
    return (
        <nav className="navbar navbar-expand-sm navSection">
            <div className="container-fluid">
                <div className={"mx-3"}>
                    <div className={"navbar-brand fs-3 myName"}><Link to={"/about"} className={"myName"}>Tanya
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
                            <Link to="/about" className={"nav-link active"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className={"nav-link active"}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={"nav-link active"}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" className={"nav-link active"}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default NavTabs;