import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';
import Mouse from './assets/Mouse.png';
import Keyboard from './assets/Keyboard.png';

class Confirm extends React.Component{
    //function Login(){
    render() {    
        return (
            <div style={styleCss.containerMainConfirm}>
                <div class="d-flex justify-content-center p-5">
                    <div class="card">
                        <div class="card-body justify-content-center mt-4 p-3">
                            <h2 class='fw-bold'>Delete Data</h2>
                            <h4 class=''>Are you sure you want to delete this data?</h4>
                            <div class="d-grid gap-2 d-md-block" style={styleCss.groupButtonComplain}>
                                <button class="btn btn-success fw-bold" style={styleCss.buttonEdit} type="button">Yes</button>
                                <button class="btn btn-danger fw-bold ms-3" style={styleCss.buttonDelete} type="button">No</button>
                            </div>
                        </div>
                     </div>    
                                        
                </div>
            </div>
            )
        }
    }
    export default Confirm