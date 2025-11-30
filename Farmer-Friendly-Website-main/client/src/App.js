
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import {Routes,Route} from "react-router-dom"
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import Wishlist from './components/wishlist/Wishlist';
import AllProducts from './components/home/AllProducts';
import CircularProgress from '@mui/material/CircularProgress';
import { useState,useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data,setData]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },2000)
  },[])
  return (
    <>
    {
      data ?(
        <>
        <Navbaar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp/>} />
        <Route path="/login" element={<Sign_in/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/getproductsone/:id" element={<Cart/>} />
        <Route path="/buynow" element={<Buynow/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/products" element={<AllProducts/>} />
      </Routes>
      <Footer />
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        </>
      ):(
        <div className='circle'>
          <CircularProgress />
          <h2>Loading...</h2>

        </div>
      )
    }
      

    </>
  );
}

export default App;
