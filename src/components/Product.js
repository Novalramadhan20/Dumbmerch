import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Mouse from './assets/Mouse.png';
import Keyboard from './assets/Keyboard.png';

class Product extends React.Component{
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
                <div>
                    <div class="d-flex ps-5 m-5 mb-3 bd-highlight fw-bold text-danger"><h1>Product</h1></div>
                    <div class="d-flex p-5 pt-0 m-5 mt-0 bd-highlight">
                        <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                        <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="card p-0 border-dark rounded-3 text-white">
                            <img src={Mouse} alt='_blank' class="card-img-top p-0 rounded-top"></img>
                            <div class="card-body bg-dark pb-0 ps-3">
                                <div class="card-text">
                                    <a class='text-danger fs-6 fw-bolder ' href='' alt='_blank'>Mouse</a>
                                    <p style={styleCss.fontNote} class='mt-3 mb-1'>Rp. 500.000</p>
                                    <p style={styleCss.fontNote} class=''>Stok : 600</p>
                                </div>
                            </div>
                        
                        </div>
                        </div>
                        </div>
                        <div class="p-2 bd-highlight">
                        <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="card p-0 border-dark rounded-3 text-white">
                            <img src={Keyboard} alt='_blank' class="card-img-top p-0 rounded-top"></img>
                            <div class="card-body bg-dark pb-0 ps-3">
                                <div class="card-text">
                                    <a class='text-danger fs-6 fw-bolder ' href='' alt='_blank'>Mouse</a>
                                    <p style={styleCss.fontNote} class='mt-3 mb-1'>Rp. 700.000</p>
                                    <p style={styleCss.fontNote} class=''>Stok : 600</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>    
                    
                </div>
            </div>
        )
    }
}
export default Product