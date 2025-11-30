import React, { useContext, useEffect, useState, useCallback } from 'react'
import "./cart.css";
import { Divider } from '@mui/material';
import { LoginContext } from '../context/ContextProvider';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';


const Cart = () => {

    const { id } = useParams("");

    const history = useNavigate("");
    
    const { account, setAccount } = useContext(LoginContext)

    const [inddata, setInddata] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [wishlist, setWishlist] = useState([]);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [addingToCart, setAddingToCart] = useState(false);

    // Load wishlist
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
            setWishlist(saved);
            setIsInWishlist(saved.some(item => item.id === id));
        } catch {
            setWishlist([]);
        }
    }, [id]);

    const getinddata = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        });

        const data = await res.json();

        if(res.status!==201){
            console.log("no data available");

        }
        else{
            console.log("getdata");
            setInddata(data)
        }
    }

    useEffect(()=>{
        setTimeout(getinddata,1000)
    },[id]);

    const toggleWishlist = useCallback(() => {
        if (!inddata) return;
        
        if (isInWishlist) {
            const updated = wishlist.filter(item => item.id !== id);
            setWishlist(updated);
            setIsInWishlist(false);
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.info('Removed from wishlist', { position: 'bottom-right' });
        } else {
            const newItem = {
                id: inddata.id,
                title: inddata.title.shortTitle,
                url: inddata.url,
                price: inddata.price
            };
            const updated = [...wishlist, newItem];
            setWishlist(updated);
            setIsInWishlist(true);
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success('Added to wishlist!', { position: 'bottom-right' });
        }
    }, [inddata, id, isInWishlist, wishlist]);

    const addtocart = async (productId) => {
        setAddingToCart(true);
        try {
            const checkres = await fetch(`/addcart/${productId}`, {
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    inddata,
                    quantity
                }),
                credentials:"include"
            });

            const data1 = await checkres.json();

            if(checkres.status === 401 || !data1){
                toast.error("Please login first to add items to cart", { position: 'bottom-right' });
                history("/login");
            } else if(checkres.status !== 201) {
                toast.error("Error adding item to the cart. Please try again.", { position: 'bottom-right' });
            } else {
                toast.success(`${inddata.title.shortTitle} added to cart!`, { 
                    position: 'bottom-right',
                    onClick: () => history('/buynow')
                });
                setAccount(data1);
                window.dispatchEvent(new Event('cartUpdated'));
            }
        } catch (error) {
            console.error("Error in addtocart:", error);
            toast.error("Network error. Please try again.", { position: 'bottom-right' });
        }
        setAddingToCart(false);
    }

    const buynow = async (productId) => {
        try {
            const checkres = await fetch(`/addcart/${productId}`, {
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    inddata,
                    quantity
                }),
                credentials:"include"
            });

            const data1 = await checkres.json();

            if(checkres.status === 401 || !data1){
                toast.error("Please login first to buy items", { position: 'bottom-right' });
                history("/login");
            } else if(checkres.status !== 201) {
                toast.error("Error processing your request. Please try again.", { position: 'bottom-right' });
            } else {
                setAccount(data1);
                history("/buynow");
            }
        } catch (error) {
            console.error("Error in buynow:", error);
            toast.error("Network error. Please try again.", { position: 'bottom-right' });
        }
    }

    const decreaseQty = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    const increaseQty = () => {
        if (quantity < 10) setQuantity(quantity + 1);
    }


  return <div className="cart_section">
    {inddata && Object.keys(inddata).length && 
        <div className="cart_container">
        <div className="left_cart">
            <div className="image_wrapper">
                <button 
                    className={`wishlist_heart ${isInWishlist ? 'active' : ''}`}
                    onClick={toggleWishlist}
                    title={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    <svg fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                <span className="discount_tag">-{inddata.price.discount}</span>
                <img 
                    src={inddata.url}  
                    alt={inddata.title?.shortTitle || 'Product'}
                    onError={(evt) => { evt.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop'; }}
                />
            </div>
            <div className="cart_btn">
                <button 
                    className={`cart_btn1 ${addingToCart ? 'loading' : ''}`} 
                    onClick={() => addtocart(inddata.id)}
                    disabled={addingToCart}
                >
                    {addingToCart ? (
                        <>
                            <CircularProgress size={18} color="inherit" />
                            Adding...
                        </>
                    ) : (
                        <>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                        </>
                    )}
                </button>
                <button className="cart_btn2" onClick={() => buynow(inddata.id)}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Buy Now
                </button>
            </div>
        </div>
        <div className="right_cart">
            <div className="breadcrumb">
                <NavLink to="/">Home</NavLink>
                <span>/</span>
                <span>{inddata.title.shortTitle}</span>
            </div>
            <h3>{inddata.title.shortTitle}</h3>
            <h4>{inddata.title.longTitle}</h4>
            
            <div className="rating_section">
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className={i < 4 ? 'filled' : ''} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <span className="rating_count">4.0 (128 reviews)</span>
            </div>
            
            <Divider />
            
            <div className="price_section">
                <div className="main_price">
                    <span className="deal_price">₹{inddata.price.cost}</span>
                    <span className="mrp_price">₹{inddata.price.mrp}</span>
                    <span className="save_badge">{inddata.price.discount} OFF</span>
                </div>
                <p className="savings_text">You save: ₹{inddata.price.mrp - inddata.price.cost}</p>
                <p className="tax_text">Inclusive of all taxes</p>
            </div>
            
            <div className="quantity_section">
                <span className="qty_label">Quantity:</span>
                <div className="qty_controls">
                    <button onClick={decreaseQty} disabled={quantity <= 1}></button>
                    <span>{quantity}</span>
                    <button onClick={increaseQty} disabled={quantity >= 10}>+</button>
                </div>
            </div>
            
            <div className="delivery_box">
                <div className="delivery_item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <div>
                        <h5>Free Delivery</h5>
                        <p>Estimated: 3-5 business days</p>
                    </div>
                </div>
                <div className="delivery_item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                        <h5>Express Delivery</h5>
                        <p>Tomorrow by 11 AM - ₹40 extra</p>
                    </div>
                </div>
                <div className="delivery_item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <div>
                        <h5>Easy Returns</h5>
                        <p>7-day return policy</p>
                    </div>
                </div>
            </div>
            
            <div className="about_section">
                <h5>About this Product</h5>
                <p>{inddata.description}</p>
            </div>
            
            <div className="features_grid">
                <div className="feature_tag">
                    <span className="icon"></span>
                    <span>100% Organic</span>
                </div>
                <div className="feature_tag">
                    <span className="icon"></span>
                    <span>Quality Assured</span>
                </div>
                <div className="feature_tag">
                    <span className="icon"></span>
                    <span>Fast Shipping</span>
                </div>
                <div className="feature_tag">
                    <span className="icon"></span>
                    <span>Best Price</span>
                </div>
            </div>
        </div>
      </div>
    }
    {!inddata ? 
        <div className='circle'>
            <CircularProgress />
            <h2>Loading...</h2>
        </div>
    : ""}
  </div>
};

export default Cart