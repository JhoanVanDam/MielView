import React, { Component } from "react";
import Registerstyle from './register.css';
import bee from "../../Resources/abeja.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
class Register extends Component {
    style() {
        console.log({ Registerstyle });
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="main">
                    <img src={bee} id="bee" alt="Logo" />

                    <div className="login-main">

                        <label>
                            Registrarse
                        </label>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faUser} style={{ color: "rgb(207, 207, 207)", }} />
                            <input type="text" placeholder="Usuario" />
                        </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(207, 207, 207)", }} />
                            <input type="email" placeholder="Correo" />
                        </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} style={{ color: "rgb(207, 207, 207)", }} />
                            <input type="password" placeholder="Contraseña" />
                        </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} style={{ color: "rgb(207, 207, 207)", }} />
                            <input type="password" placeholder="Confirmar" />
                        </div>

                        <button>Guardar</button>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Register;