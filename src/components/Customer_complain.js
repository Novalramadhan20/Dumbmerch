import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Ellipse1 from './assets/Ellipse1.png';
import Mouse from './assets/Mouse.png';
import Keyboard from './assets/Keyboard.png';

class Customercomplain extends React.Component{
    //function Login(){
    render() {    
        return (
            <div style={styleCss.containerMainNav}>
                <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                    <div class="bd-highlight col-3 p-5">
                        <img src={Icon} style={styleCss.imgIconNav} class='mb-5' alt='_blank'></img>
                        <div class="d-flex flex-column bd-highlight mb-3">
                            <div class="p-2 bd-highlight mt-3">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="p-2 bd-highlight">
                                    <img src={Ellipse1} class='mb-5 img-fluid' alt='_blank'></img>
                                    </div>
                                    <div class="bd-highlight">
                                        <p class='text-white'>egi_lol</p>
                                        <p class='text-white'>Hello Admin, I Need Your Help</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 bd-highlight">
                            <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="p-2 bd-highlight">
                                    <img src={Ellipse1} class='mb-5 img-fluid' alt='_blank'></img>
                                    </div>
                                    <div class="bd-highlight">
                                        <p class='text-white'>egi_lol</p>
                                        <p class='text-white'>Hello Admin, I Need Your Help</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="p-2 bd-highlight bg-primary col-9">Flex item 2</div>
                </div>
            </div>
        
            )
        }
    }
    export default Customercomplain