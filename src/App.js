//import React, {Component} from 'react';
//import React from 'react';
//import styleCss from './style.js';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Row, Form, Col, Button, Container, } from 'react-bootstrap';
//import Icon from './assets/Frame.png';
//import Login from './components/Login';
//import React from 'react';
//import ReactDOM from 'react-dom';
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
//import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Category from './components/Category_list';
import Editcategory from './components/Edit_category';
import Editproduct from './components/Edit_product';
import Detailproduct from './components/Detail_product';
import Productlist from './components/Product_list';
import Profile from './components/Profile';
import Confirm from './components/Confirm';
import Product from './components/Product';
import Admincomplain from './components/Admin_complain';
import Customercomplain from './components/Customer_complain';
// import components here
//class App extends React.Component{
//export coomponent
  function App() {
    
  //render(){
    return (
      <Routes>
      <Route exact path="/login" component={<Login/>} />
      <Route exact path="/register" component={<Register/>} />
      <Route exact path="/product" component={<Product/>} />
      <Route exact path="/rofile" component={<Profile/>} />
      <Route exact path="/Detail_product" component={<Detailproduct/>} />
      <Route exact path="/Category" component={<Category/>} />
      <Route exact path="/Edit_category" component={<Editcategory/>} />
      <Route exact path="/Edit_product" component={<Editproduct/>} />
      <Route exact path="/Product-list" component={<Productlist/>} />
      <Route exact path="/Confirm" component={<Confirm/>} />
      <Route exact path="/Admin_complain" component={<Admincomplain/>} />
      <Route exact path="/Customer_complain" component={<Customercomplain/>} />
      </Routes>
      
      
    );
    }
export default App