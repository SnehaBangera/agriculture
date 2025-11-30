import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/action';
import { toast } from 'react-toastify';
import './wishlist.css';

const Wishlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const [addingToCart, setAddingToCart] = useState({});

    // Load wishlist from localStorage
    const loadWishlist = () => {
        try {
            const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
            setWishlist(saved);
        } catch {
            setWishlist([]);
        }
    };

    useEffect(() => {
        loadWishlist();
        
        // Listen for wishlist updates from other components
        const handleWishlistUpdate = () => loadWishlist();
        window.addEventListener('wishlistUpdated', handleWishlistUpdate);
        
        return () => {
            window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
        };
    }, []);

    const removeFromWishlist = (productId) => {
        const updated = wishlist.filter(item => item.id !== productId);
        setWishlist(updated);
        localStorage.setItem('wishlist', JSON.stringify(updated));
        window.dispatchEvent(new Event('wishlistUpdated'));
        toast.info('Removed from wishlist', { position: 'bottom-right', autoClose: 2000 });
    };

    const addToCartHandler = (product) => {
        setAddingToCart(prev => ({ ...prev, [product.id]: true }));
        
        const productForCart = {
            id: product.id,
            url: product.url,
            title: { shortTitle: product.title },
            price: product.price,
            quantity: 1
        };
        dispatch(addToCart(productForCart));
        window.dispatchEvent(new Event('cartUpdated'));
        toast.success(`${product.title} added to cart!`, { 
            position: 'bottom-right', 
            autoClose: 2000,
            onClick: () => navigate('/buynow')
        });
        
        setTimeout(() => {
            setAddingToCart(prev => ({ ...prev, [product.id]: false }));
        }, 800);
    };

    const moveToCart = (product) => {
        addToCartHandler(product);
        // Optionally remove from wishlist after adding to cart
        setTimeout(() => {
            removeFromWishlist(product.id);
        }, 500);
    };

    const clearWishlist = () => {
        setWishlist([]);
        localStorage.setItem('wishlist', JSON.stringify([]));
        window.dispatchEvent(new Event('wishlistUpdated'));
        toast.info('Wishlist cleared', { position: 'bottom-right', autoClose: 2000 });
    };

    return (
        <div className="wishlist_page">
            <div className="wishlist_container">
                <div className="wishlist_header">
                    <div className="header_left">
                        <div className="heart_icon_wrapper">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <h1>My Wishlist</h1>
                            {wishlist.length > 0 && (
                                <p className="wishlist_count">{wishlist.length} item{wishlist.length > 1 ? 's' : ''} saved</p>
                            )}
                        </div>
                    </div>
                    {wishlist.length > 0 && (
                        <button className="clear_btn" onClick={clearWishlist}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Clear All
                        </button>
                    )}
                </div>

                {wishlist.length === 0 ? (
                    <div className="empty_wishlist">
                        <div className="empty_heart_animation">
                            <svg className="empty_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h2>Your wishlist is empty</h2>
                        <p>Save items you love by clicking the heart icon on any product. They'll appear here for easy access!</p>
                        <NavLink to="/" className="continue_shopping">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Start Shopping
                        </NavLink>
                    </div>
                ) : (
                    <div className="wishlist_grid">
                        {wishlist.map(item => (
                            <div key={item.id} className="wishlist_card">
                                <button 
                                    className="remove_btn" 
                                    onClick={() => removeFromWishlist(item.id)}
                                    title="Remove from wishlist"
                                >
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                
                                <NavLink to={`/getproductsone/${item.id}`} className="card_image">
                                    <img 
                                        src={item.url} 
                                        alt={item.title}
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop'; }}
                                    />
                                    {item.price?.discount && (
                                        <span className="discount_badge">{item.price.discount} OFF</span>
                                    )}
                                </NavLink>
                                
                                <div className="card_content">
                                    <NavLink to={`/getproductsone/${item.id}`} className="card_title">
                                        {item.title}
                                    </NavLink>
                                    
                                    <div className="card_price">
                                        <span className="price_current">₹{item.price?.cost || 'N/A'}</span>
                                        {item.price?.mrp && (
                                            <span className="price_original">₹{item.price.mrp}</span>
                                        )}
                                    </div>
                                    
                                    <div className="card_actions">
                                        <button 
                                            className={`btn_add_cart ${addingToCart[item.id] ? 'adding' : ''}`}
                                            onClick={() => addToCartHandler(item)}
                                            disabled={addingToCart[item.id]}
                                        >
                                            {addingToCart[item.id] ? (
                                                <>
                                                    <svg className="check_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Added!
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
                                        <button 
                                            className="btn_buy_now"
                                            onClick={() => {
                                                addToCartHandler(item);
                                                setTimeout(() => navigate('/buynow'), 300);
                                            }}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
