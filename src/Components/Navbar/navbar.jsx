import React, { Component } from "react";
import bee from "../../Resources/abejaJIS.png";
import estilos from "./navbar.css";
class Navbar extends Component {
    style() {
        console.log({ estilos });
    }
    render() {

        return (
            <nav className="nav-bee">
                <a href="/"><img src={bee} id="bean" alt="Logo" /></a>
                <a href="/">Miel App</a>
            </nav>
        );
    }
}
export default Navbar;