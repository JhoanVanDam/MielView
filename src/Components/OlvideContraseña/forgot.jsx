import React, { Component } from "react";
import Forgotstyle from './forgot.css';
import bee from "../../Resources/abeja.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
class Forgot extends Component {
    style() {
        console.log({ Forgotstyle });
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="main">
                    <img src={bee} id="bee" alt="Logo" />

                    <div className="login-main">

                        <label>
                            Restaurar Contraseña
                        </label>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(207, 207, 207)", }} />
                            <input type="email" placeholder="Correo" />
                        </div>

                        <button>Guardar</button>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Forgot;