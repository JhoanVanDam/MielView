import React, { Component } from "react";
import befooterstyle from "./footer.css";
import bee from "../../Resources/abejaJIS.png";
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
                        <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fa-brands fa-facebook" /></a></li>
                        <li><a href="https://www.whatsapp.com/" rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp " /></a></li>
                        <li><a href="https://www.twitter.com/" rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter" /></a></li>
                        <li><a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><i class="fa-brands fa-youtube" /></a></li>
                        <li><a href="https://www.tiktok.com/" rel="noreferrer" target="_blank"><i class="fa-brands fa-tiktok " /></a></li>
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