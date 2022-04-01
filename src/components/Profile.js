import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Mouse from './assets/Mouse.png';
import Keyboardcart from './assets/Keyboardcart.png';
import Profilepic from './assets/Profile.png';

class Profile extends React.Component{
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
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-danger' variant="" type="submit">
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
                    <div class="d-flex flex-coloumn ps-5 m-5 mb-3 bd-highlight fw-bold text-danger">
                        <div class="p-2 bd-highlight col-6"><h1>My Profile</h1></div>
                        <div class="p-2 ms-5 bd-highlight col-6"><h1>My Transaction</h1></div>
                    </div>
                    <div class="d-flex flex-coloumn ps-5 m-5 mb-3 bd-highlight fw-bold text-danger">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            <div class="d-flex p-2 bd-highlight col-3 me-5">
                            <img src={Profilepic} class='rounded-3' alt='_blank'></img>
                            </div>
                            <div class="d-flex p-2 bd-highlight col-3">
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="p-2 bd-highlight">
                                    <p class='text-danger'>Name</p>
                                    <p class='text-white'>Yosep</p>
                                </div>
                                <div class="p-2 bd-highlight">
                                    <p class='text-danger'>Email</p>
                                    <p class='text-white'>Yosepgans@gmail.com</p>
                                </div>
                                <div class="p-2 bd-highlight">
                                    <p class='text-danger'>Phone</p>
                                    <p class='text-white'>083896833122</p>
                                </div>
                                <div class="p-2 bd-highlight">
                                    <p class='text-danger'>Gender</p>
                                    <p class='text-white'>Male</p>
                                </div>
                                <div class="p-2 bd-highlight">
                                    <p class='text-danger'>Address</p>
                                    <p class='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>
                            </div>
                            <div class="p-2 bd-highlight col-6">
                                <div class="card-body p-0 bg-dark me-5 col-11">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="ps-4 bd-highlight col-3">
                                        <img src={Keyboardcart} style={styleCss.imgCart} class='mt-3 mb-3 ms-4 me-3' alt='_blank'></img>
                                    </div>
                                    <div class="p-4 ps-3 bd-highlight col-4 me-5">
                                        <h4 class='text-danger fw-bold mb-1'>Mouse</h4>
                                        <p class='text-danger fw-bold mb-1'>Saturday, 14 Juli 2021</p>
                                        <p class='text-white mb-5 fw-normal'>Price : Rp.500.000 </p>
                                        <h5 class='text-white fw-bold pt-3'>Sub Total : 500.000</h5>
                                    </div>
                                    <div class="p-2 bd-highlight col-5">
                                        <img src={Icon} style={styleCss.imgIconNav} class='mt-5 mb-5 ms-5 ps-5' alt='_blank'></img>
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
export default Profile