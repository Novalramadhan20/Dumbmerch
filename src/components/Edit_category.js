import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Mouse from './assets/Mouse.png';
import Keyboard from './assets/Keyboard.png';

class Editcategory extends React.Component{
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
                                Category
                            </Button>
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-white' variant="" type="submit">
                                Product
                            </Button>
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-white' variant="" type="submit">
                                Logout
                            </Button>
                        </form>
                        </div>
                    </div>
                </nav>
                </div>
                <div class="d-flex ps-5 m-5 mb-3 bd-highlight fw-bold text-white"><h2>Edit Category</h2></div>
                    <div class="d-flex flex-column bd-highlight mb-3 justify-content-center m-5 ps-5 pe-5">
                        <div class="p-2 bd-highlight mb-5">
                        <input class="form-control bg-secondary bg-opacity-50 text-white" type="text" placeholder="edit name" value='Mouse' aria-label="default input example"></input>
                        </div>
                        <div class="p-2 bd-highlight">
                            <button class="btn btn-success fw-bold col-12" style={styleCss.buttonEdit} type="button">Save</button>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Editcategory