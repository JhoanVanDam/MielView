import React, { Component } from "react";
import bee from "../../Resources/abeja.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import loginstyle from "./login.css";
import { Link } from 'react-router-dom';

class Login extends Component {
    style() {
        console.log({ loginstyle });
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
                        <input type="email" placeholder="Username" />
                    </div>

                    <div className="input-container">
                        <FontAwesomeIcon icon={faLock} style={{ color: "rgb(207, 207, 207)", }} />
                        <input type="password" placeholder="Password" />
                    </div>

                    <button>Acceder</button>

                    <a href='si'>Olvidé la contraseña</a>
                    <Link to="/register">Registrarse</Link>
                </div>
            </div>
        );
    }
}
export default Login;