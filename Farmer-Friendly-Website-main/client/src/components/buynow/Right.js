import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Right = ({item}) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    totalAmount();
  }, [item]);

  const totalAmount = () => {
    let totalPrice = 0;

    // Check if 'item' is not null or undefined and is an array
    if (item && Array.isArray(item)) {
      item.forEach((item) => {
        // Check if 'item' is not null or undefined and has 'price' property
        if (item && item.price) {
          // Check if 'item.price' is not null or undefined and has 'cost' property
          if (typeof item.price.cost === 'number') {
            totalPrice += item.price.cost;
          }
        }
      });
    }

    setPrice(totalPrice);
  }

  const handleProceedToBuy = () => {
    if (item && item.length > 0) {
      alert(`Proceeding to checkout with ${item.length} items. Total: Rs ${price}.00`);
      // You can add actual checkout logic here
      // For now, it will show a success message
      // navigate('/checkout'); // Uncomment when checkout page is ready
    } else {
      alert('Your cart is empty!');
    }
  };

  return <div className="right_buy">
    <div className="cost_right">
        <p>Your order is eligible for free delivery</p>
        <span style={{color:"#565959"}}>Select this option at checkout. Details
        </span>
        <h3>Subtotal({item.length}items):<span style={{fontWeight:700}}>Rs {price}.00</span></h3>
        <button className="rightbuy_btn" onClick={handleProceedToBuy}>Proceed to Buy</button>
    </div>
      
    </div>;
  
};

export default Right