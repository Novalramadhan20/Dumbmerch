import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
//import Register from './components/Register';
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
import Register from './components/Register';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Login />
    <Register />
    <Profile />
    <Product />
    <Detailproduct/>
    <Editproduct/>
    <Productlist/>
    <Category/>
    <Editcategory/>
    <Confirm/>
    <Admincomplain/>
    <Customercomplain/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*


  


<Route exact path="/Homepage" component={Homepage} />
<Route exact path="/Product" component={Product} />
<Route exact path="/Profile" component={Profile} /> */
/*

*/
/*


*/

/*
const routing = (
  <Router>
  <div>
  <h1>Index for Route all Pages</h1>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
      <Routes>
      <Route exact path="/" component={<App/>} />
      <Route exact path="/login" component={<Login/>} />
      <Route exact path="/register" component={<Register/>} />
      <Route exact path="/product" component={<Product/>} />
      <Route exact path="/rofile" component={<Profile/>} />
      <Route exact path="/Detail_product" component={<Detailproduct/>} />
      <Route exact path="/Complain" component={<Complain/>} />
      <Route exact path="/Category" component={<Category/>} />
      <Route exact path="/Edit_category" component={<Editcategory/>} />
      <Route exact path="/Edit_product" component={<Editproduct/>} />
      <Route exact path="/Product-list" component={<Productlist/>} />
      <Route exact path="/Confirm" component={<Confirm/>} />
      <Route exact path="/Admin_complain" component={<Admincomplain/>} />
      <Route exact path="/Customer_complain" component={<Customercomplain/>} />
      </Routes>

  </div>
  </Router>
  )*/