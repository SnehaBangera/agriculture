import React, { useEffect, useState } from 'react';
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  const [cartdata, setCartdata] = useState([]);

  const getdatabuy = async () => {
    
    const res=await fetch("/cartdetails",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-type":"application/json"
      },credentials:"include"
    })
    const data=await res.json();
    if(res.status !==201){
      console.log("error");
    }else{
      setCartdata(data.carts);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className='leftbuyprice'>Price</span>
              <Divider />
              {cartdata.map((e, k) => {
  // Check if 'e' is not null or undefined before accessing properties
  if (e && e.title) {
    const quantity = e.quantity || 1;
    const itemTotal = e.price ? e.price.cost * quantity : 0;
    return (
      <div key={k} className="item_containert">
        <img 
          src={e.url} 
          alt={e.title?.shortTitle || 'Product'} 
          onError={(evt) => { evt.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop'; }}
        />
        <div className="item_details">
          <h3>{e.title.longTitle}</h3>
          {e.title.shortTitle && <h3>{e.title.shortTitle}</h3>}
          <h3 className='diffrentprice'>Rs {e.price && e.price.cost}.00 each</h3>
          <p className='unusuall'>Usually dispatched in 5 days</p>
          <p>Eligible for FREE Shipping</p>
          <Option deletedata={e.id} get={getdatabuy} quantity={quantity} productId={e.id}/>
        </div>
        <h3 className='item_price'>Rs {itemTotal}.00</h3>
      </div>
    );
  } else {
    return null; // Skip rendering if 'e' or 'e.title' is null or undefined
  }
})}
                
              <Divider />
              <Subtotal  item={cartdata}/>
            </div>
            <Right item={cartdata}/>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Buynow