import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Mouse from './assets/Mouse.png';
import Keyboard from './assets/Keyboard.png';

class Detailproduct extends React.Component{
    //function Login(){
    render() {    
        return (
            <div style={styleCss.containerMainNav}>
                <div>
                <nav style={styleCss.navBar} class="navbar navbar-expand-lg">
                    <div class="container-fluid p-3 me-3 ms-3">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <img src={Icon} style={styleCss.imgIconNav} alt='_blank'></img>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-white' variant="" type="submit">
                                Complain
                            </Button>
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-white' variant="" type="submit">
                                Profile
                            </Button>
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-white' variant="" type="submit">
                                Logout
                            </Button>
                        </form>
                        </div>
                    </div>
                </nav>
                </div>
                <div class="d-flex justify-content-center m-5">
                    <div class="p-2  bd-highlight col-"><img src={Mouse} style={styleCss.imgDetail} alt='_blank'></img></div>
                    <div class="p-2 m-5 ps-5 bd-highlight col-4">
                    <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                            <h1 class='text-danger fw-bolder fs-1'>Mouse</h1>
                        </div>
                        <div class="p-2 pt-0 bd-highlight">
                            <p class='text-white' >
                                Stock : 600
                            </p>
                        </div>
                        <div class="p-2 bd-highlight">
                            <p class='text-white' >
                                - Wireless Mouse
                                <br></br>
                                - Konektivitas wireless 2.4 GHz
                                <br></br>
                                - Jarak wireless hingga 10 m
                                <br></br>
                                - Plug and Play
                                <br></br>
                                - Baterai tahan hingga 12 bulan
                                <br></br>
                                <br></br>

                                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                            </p>
                        </div>
                        <div class="p-2 bd-highlight">
                            <h3 class='text-danger text-end me-2 mt-4'>Rp.300.900</h3>
                        </div>
                        <div class="p-2 bd-highlight">
                        <button type="button" class="btn btn-danger col-12 mt-4">Buy</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detailproduct