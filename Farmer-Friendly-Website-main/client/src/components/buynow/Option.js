import React,{useContext, useState} from 'react'
import { LoginContext } from '../context/ContextProvider';


const Option = ({ deletedata, get, quantity: initialQuantity, productId }) => {
  // console.log(deletedata);

  const { account, setAccount } = useContext(LoginContext);
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  // console.log(account);

  const removedata = async () => {
    try {
      const res = await fetch(`/remove/${deletedata}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
      console.log("Response status:", res.status);
  
      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        console.log("Item deleted:", data);
        setAccount(data);
        get();
      } else {
        console.log("Error deleting item. Server response:", await res.text());
        alert("Failed to remove item from cart");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Network error. Please try again.");
    }
  };

  const handleQuantityChange = async (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    
    try {
      const res = await fetch(`/updatecartquantity/${productId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
        credentials: "include",
      });
      
      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        setAccount(data);
        get();
      }
    } catch (error) {
      console.log("Error updating quantity:", error);
    }
  };
  
  
  
      

  
  
  
  return (
    <div className="add_remove_select">
      <select value={quantity} onChange={handleQuantityChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <p style={{cursor:"pointer"}} onClick={removedata}>Delete</p><span>|</span>
      <p className='forremovemedia' style={{cursor:"pointer", opacity: 0.6}}>Save or later</p><span>|</span>
      <p className='forremovemedia' style={{cursor:"pointer", opacity: 0.6}}>See more like this</p>
    </div>

  )
}

export default Option