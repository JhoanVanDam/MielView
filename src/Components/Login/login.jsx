import React, { Component } from "react";
import bee from "../../Resources/abeja.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import loginstyle from "./login.css";
class Login extends Component {
    style(){
        console.log({loginstyle});
    }
    render() {
        return (
            <div className="main">
                <img src={bee} id="bee" alt="Logo" />

                <div className="login-main">

                    <label>
                        Iniciar Sesión
                    </label>

                    <div className="input-container">
                        <FontAwesomeIcon icon={faUser} style={{ color: "rgb(207, 207, 207)", }} />
                        <input placeholder="Username" />
                    </div>

                    <div className="input-container">
                        <FontAwesomeIcon icon={faLock} style={{ color: "rgb(207, 207, 207)", }} />
                        <input placeholder="Password" />
                    </div>

                    <button>Acceder</button>

                    <a href="si">Olvidé la contraseña</a>

                    <a href="si">Registrarse</a>

                </div>
            </div>
        );
    }
}
export default Login;