import React, { Component } from "react";
import camera from "../../Resources/camara-fotografica.png";
import qrstyle from "./qr.css";
class qr extends Component {
    style(){
        console.log({qrstyle});
    }
    render() {
        return (
            <div className="main-qr">
                <label>
                Escanea el código QR de tu producto
                </label>
                <div className="yellow-container">
                <img src={camera} id="camera"/>
                </div>
                
            </div>
        );
    }
}
export default qr;