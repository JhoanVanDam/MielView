import React, { Component } from "react";
import Navbar from '..//Navbar/navbar';
import Login from "../Login/login";
import Qr from '../Qr/qr';
import Tabla from '../BeeInfo/beeinfo';
import Footer from '../Footer/footer';
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Login></Login>
                <Qr></Qr>
                <Tabla></Tabla>
                <Footer></Footer>
            </div>
        );
    }
}
export default Home; 