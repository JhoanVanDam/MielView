import React, { Component } from "react";
import bee from "../../Resources/Navbar (1).png";
import estilos from "./navbar.css";
class Navbar extends Component {

    render() {

        return (
            <nav className="nav-bee">
                <a className="nav-bee-a" href="#">
                    <div className="nav-bee-img">
                        <img src={bee} id="bean" alt="Logo"/>
                    </div>
                </a>
                <div className="" id="">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Miel App</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;