import React,{useContext, useState} from 'react'
import { LoginContext } from '../context/ContextProvider';


const Option = ({ deletedata, get, quantity: initialQuantity, productId }) => {
  const { account, setAccount } = useContext(LoginContext);
  const [quantity, setQuantity] = useState(initialQuantity || 1);

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
  
      if (res.status === 201) {
        const data = await res.json();
        get();
        window.dispatchEvent(new Event('cartUpdated'));
      }
    } catch (error) {
      console.log("Error:", error);
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
        window.dispatchEvent(new Event('cartUpdated'));
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
      </select>
      <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
      <p className='forremovemedia'>Save or later</p><span>|</span>
      <p className='forremovemedia'>See more like this</p>
    </div>
  )
}

export default Option
