import React, { Component } from "react";
import befooterstyle from "./footer.css";
import bee from "../../Resources/abeja.png";
import 'font-awesome/css/font-awesome.min.css';


class beefooter extends Component {
    style() {
        console.log({ befooterstyle });
    }
    render() {
        return (

            <div className="footer-main">
                <div className="footer-icon-media">
                    <ul>
                        <li><i class="fa-brands fa-facebook" /></li>
                        <li><i class="fa-brands fa-whatsapp " /></li>
                        <li><i class="fa-brands fa-twitter" /></li>
                        <li><i class="fa-brands fa-youtube" /></li>
                        <li><i class="fa-brands fa-tiktok " /></li>
                    </ul>
                </div>
                <a href="/"><img src={bee} alt="beelogo" /></a>
                <p>
                    ™ © 2023  X Inc. Todos los derechos reservados, X son marcas comerciales, marcas de servicios o marcas registradas de X, Inc.
                </p>
            </div>
        );
    }
}
export default beefooter;