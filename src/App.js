import './App.css';
import Navbar from './Components/Navbar/navbar';
import Login from "./Components/Login/login";
import Qr from './Components/Qr/qr';
import Tabla from './Components/BeeInfo/beeinfo'
import Footer from './Components/Footer/footer'


function App() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
      <Navbar></Navbar>
      <Login></Login>
      <Qr></Qr>
      <Tabla></Tabla>
      <Footer></Footer>
    </div>
  );
}

export default App;
