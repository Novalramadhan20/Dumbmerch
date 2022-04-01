import React from 'react';
import styleCss from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
import Icon from './assets/Frame.png';

class Login extends React.Component{
    //function Login(){
    render() {    
        return (
            <div style={styleCss.containerMain}>
                <div style={styleCss.containerContent}>
                    <div style={styleCss.containerRight}>
                        <img src={Icon} class='mt-5 pt-5' alt='_blank'></img>
                        <h1 style={styleCss.fontTitle}>Easy, Fast and Reliable</h1>
                        <p style={styleCss.fontDes}>Go shopping for merchandise, just go to dumb merch<br></br>
                            shopping. The biggest merchandise in <strong>Indonesia</strong></p>
                        <Button style={styleCss.fontButton} className='pe-5 ps-5 mt-5 fw-bold text-white' variant="danger"type="submit">
                            Login
                        </Button>
                        <Button style={styleCss.textButton} className='pe-5 ps-5 mt-5 fw-bold text-secondary' variant="" type="submit">
                            Register
                        </Button>
                    </div>
                    <div style={styleCss.containerLeft} class='pt-5 mt-3'>
                    <div style={styleCss.formContainer} class="card text-white pt-5 col-12">
                        <Form>
                            <Form.Label><h2>Login</h2></Form.Label>
                            <Form.Group className="mb-4 col-12 " controlId="formBasicEmail">
                            <Form.Control style={styleCss.formInput} className='bg-secondary bg-opacity-50' type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Control className='bg-secondary bg-opacity-50' type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='d-grid gap-2 col-12 mx-auto fw-bold text-white' variant="danger" type="submit">
                            Login
                        </Button>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login