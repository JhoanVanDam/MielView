import React, { Component } from "react";
import beeinfoStyle from "./beeinfo.css";
class beeinfo extends Component {

    render() {
        return (
            <div className="beeinfo-main">
                <div class="container">
                    <table class="table w-50 mx-auto">
                        <thead>
                            <h1>Resultados de la Miel</h1>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Ubicación</th>
                                <td>Finca Juanjo</td>
                            </tr>
                            <tr>
                                <th scope="row">Tipo</th>
                                <td>Miel de abeja</td>
                            </tr>
                            <tr>
                                <th scope="row">Textura</th>
                                <td>Viscosa</td>
                            </tr>
                            <tr>
                                <th scope="row">Jarabe</th>
                                <td>80%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default beeinfo;