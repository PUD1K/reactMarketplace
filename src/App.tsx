import React, {useMemo, useEffect, useRef} from 'react';
import axios from 'axios'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/users/UserSlice';
import { getUserInfo } from './store/reducers/ActionCreators';
import Footer from './components/customElements/MyFooter';
import Slider from './components/customElements/MySlider';
import Navbar from './components/customElements/MyNavbar';

import {Routes, Route, Link, useLocation} from 'react-router-dom' 
import Login from './pages/Login'
import Home from './pages/Home';
import Layout from './components/customElements/MyLayout';
import Register from './pages/Register';
import Basket from './pages/Basket';
import Categories from './pages/Categories';
import Subcategories from './pages/Subcategories';
import Products from './pages/Products';
import Product from './pages/Product';
import MyAcc from './pages/MyAcc';
import Checkout from './pages/Checkout';
import SuccessCheckout from './pages/SuccessCheckout';
import Comment from './pages/Comment';
import SearchPage from './pages/Search';
import Search from './pages/Search';
import ShopsAdministration from './pages/ShopsAdministration';
import ShopUpdateManager from './pages/ShopUpdateManager';
import ShopAdministration from './pages/ShopAdministration';
import ShopSetting from './pages/ShopSetting';
import ShopCreateProduct from './pages/ShopCreateProduct';
import ShopManagment from './pages/ShopManagment';


function App() {
  const {isLoggedIn, token} = useAppSelector(state => state.userReducer)
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(userSlice.actions.setLoggedIn())
  }, [token])


  return (
    <div className="App">

      <Routes>
        <Route path ='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='categories' element={<Categories/>}/>
          <Route path='categories/:categoryslug' element={<Subcategories/>}/>
          <Route path='categories/:categoryslug/:subcategoryslug' element={<Products key={window.location.pathname}/>}/>
          <Route path='/:productarticle' element={<Product key={window.location.pathname}/>}/>
          <Route path='/:productarticle/feedback' element={<Comment key={window.location.pathname}/>}/>
          <Route path='/search' element={<Search key={window.location.pathname}/>}/>
          <Route path='registration' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='my/:username' element={<MyAcc/>}/>
          <Route path='basket/:username' element={<Basket/>}/>
          <Route path='shop_managment' element={<ShopManagment/>}/>
          <Route path='shop_setting' element={<ShopSetting/>}/>
          <Route path='shop_setting/:shopslug/create_product' element={<ShopCreateProduct/>}/>
          <Route path='shops_administration' element={<ShopsAdministration/>}/>
          <Route path='shops_administration/create' element={<ShopAdministration shopWillBeCreate={true}/>}/>
          <Route path='shops_administration/:shopslug' element={<ShopAdministration shopWillBeCreate={false}/>}/>
          <Route path='checkout/:username' element={<Checkout/>}/>   
          <Route path='success_checkout/:username' element={<SuccessCheckout/>}/>                 
        </Route>
      </Routes>

    </div>
  );
}

export default App;