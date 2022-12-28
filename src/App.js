// import logo from "./logo.svg";
import './App.css';
import Home from './components/Home/Home';
import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllProduct from './components/common/AllProduct/AllProduct';
import Cart from './components/common/Cart/Cart';
import Person from './components/common/Person/Person';
import Checkout from './components/common/Checkout/Checkout';
import SingleProduct from './components/common/SingleProduct/SingleProduct';
import Contact from './components/common/Contact/Contact';
import WishList from './components/common/WishList/WishList';
import Login from './components/common/Login/Login';
import Account from './components/common/Account/Account';
import User from './components/common/User/User';
import UserStatus from './components/common/User/UserStatus';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="allproduct" element={<AllProduct />} />
          <Route path="viewproduct/:productID" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="anushank-seth" element={<Person />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="account" element={<Account />} />
          <Route path="user" element={<User />} />
          <Route path="userStatus" element={<UserStatus />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
