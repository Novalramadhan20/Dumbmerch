import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Mouse from './assets/Mouse.png';
import Keyboard from './assets/Keyboard.png';

class Productlist extends React.Component{
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
                                Category
                            </Button>
                            <Button style={styleCss.textButton} className='pe-2 ps-2 fw-bold text-danger' variant="" type="submit">
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
                <div class="d-flex ps-5 m-5 mb-3 bd-highlight fw-bold text-white"><h2>List Product</h2></div>
                <div class="d-flex ps-5 pe-5 bd-highlight ms-5 me-5 mb-5">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            <th scope="col" class='col-1 p-3' >No</th>
                            <th scope="col" class='col-1 p-3'>Photo</th>
                            <th scope="col" class='col-2 p-3'>Product Name</th>
                            <th scope="col" class='col-2 p-3'>Product Desc</th>
                            <th scope="col" class='col-2 p-3'>Price</th>
                            <th scope="col" class='col-1 p-3'>Qty</th>
                            <th scope="col" class='col-3 p-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"  class='col-1 p-4'>1</th>
                            <td  class='col-1 p-4'><a href='' class='text-white'>Mouse.jpg</a></td>
                            <td  class='col-2 p-4'>Mouse</td>
                            <td  class='col-2 p-4'>lorem ipsum mouse ...</td>
                            <td  class='col-2 p-4'>500.000</td>
                            <td  class='col-1 p-4'>600</td>
                            <td  class='col-3 p-3'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Edit</button>
                                    <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">Delete</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row"  class='col-1 p-4'>2</th>
                            <td  class='col-1 p-4'><a href='' class='text-white'>Keyboard.jpg</a></td>
                            <td  class='col-2 p-4'>Keyboard</td>
                            <td  class='col-2 p-4'>lorem ipsum keyboard ...</td>
                            <td  class='col-2 p-4'>700.000</td>
                            <td  class='col-1 p-4'>600</td>
                            <td  class='col-3 p-3'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Edit</button>
                                    <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">Delete</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row"  class='col-1 p-4'>3</th>
                            <td  class='col-1 p-4'><a href='' class='text-white'>Bag.jpg</a></td>
                            <td  class='col-2 p-4'>Bag</td>
                            <td  class='col-2 p-4'>lorem ipsum bag ...</td>
                            <td  class='col-2 p-4'>300.000</td>
                            <td  class='col-1 p-4'>600</td>
                            <td  class='col-3 p-3'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Edit</button>
                                    <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">Delete</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row"  class='col-1 p-4'>4</th>
                            <td  class='col-1 p-4'><a href='' class='text-white'>Stationary.jpg</a></td>
                            <td  class='col-2 p-4'>Stationary</td>
                            <td  class='col-2 p-4'>lorem ipsum Stationary ...</td>
                            <td  class='col-2 p-4'>25.000</td>
                            <td  class='col-1 p-4'>600</td>
                            <td  class='col-3 p-3'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Edit</button>
                                    <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">Delete</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row"  class='col-1 p-4'>5</th>
                            <td  class='col-1 p-4'><a href='' class='text-white'>Doll.jpg</a></td>
                            <td  class='col-2 p-4'>Doll</td>
                            <td  class='col-2 p-4'>lorem ipsum doll...</td>
                            <td  class='col-2 p-4'>125.000</td>
                            <td  class='col-1 p-4'>600</td>
                            <td  class='col-3 p-3'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Edit</button>
                                    <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">Delete</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row"  class='col-1 p-4'>6</th>
                            <td  class='col-1 p-4'><a href='' class='text-white'>Pillow.jpg</a></td>
                            <td  class='col-2 p-4'>Pillow</td>
                            <td  class='col-2 p-4'>lorem ipsum pillow ...</td>
                            <td  class='col-2 p-4'>300.000</td>
                            <td  class='col-1 p-4'>600</td>
                            <td  class='col-3 p-3'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Edit</button>
                                    <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">Delete</button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Productlist