import React, { useState, useEffect, useCallback } from 'react';
import "./modernslide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1
    }
};

const ModernSlide = ({ title, products, showTimer, hideHeader = false }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    
    const [wishlist, setWishlist] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('wishlist')) || [];
        } catch {
            return [];
        }
    });
    
    const [addingToCart, setAddingToCart] = useState({});

    // Sync wishlist with localStorage
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        window.dispatchEvent(new Event('wishlistUpdated'));
    }, [wishlist]);

    useEffect(() => {
        if (!showTimer) return;

        const getEndOfDay = () => {
            const now = new Date();
            const end = new Date(now);
            end.setHours(23, 59, 59, 999);
            return end;
        };

        const calculateTimeLeft = () => {
            const now = new Date();
            const end = getEndOfDay();
            const difference = end - now;

            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [showTimer]);

    const formatTime = (num) => String(num).padStart(2, '0');
    
    const isInWishlist = useCallback((productId) => {
        return wishlist.some(item => item.id === productId);
    }, [wishlist]);
    
    const toggleWishlist = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isInWishlist(product.id)) {
            setWishlist(prev => prev.filter(item => item.id !== product.id));
            toast.info('Removed from wishlist', { position: 'bottom-right', autoClose: 2000 });
        } else {
            setWishlist(prev => [...prev, {
                id: product.id,
                title: product.title.shortTitle,
                url: product.url,
                price: product.price
            }]);
            toast.success('Added to wishlist!', { position: 'bottom-right', autoClose: 2000 });
        }
    };
    
    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        
        setAddingToCart(prev => ({ ...prev, [product.id]: true }));
        
        dispatch(addToCart(product));
        window.dispatchEvent(new Event('cartUpdated'));
        
        toast.success(`${product.title.shortTitle} added to cart!`, { 
            position: 'bottom-right', 
            autoClose: 2000,
            onClick: () => navigate('/buynow')
        });
        
        setTimeout(() => {
            setAddingToCart(prev => ({ ...prev, [product.id]: false }));
        }, 600);
    };

    return (
        <div className={`modern_products_section ${hideHeader ? 'no_header' : ''}`}>
            {!hideHeader && (
                <div className="section_header">
                    <div>
                        <h2 className="section_title">{title}</h2>
                        <p className="section_subtitle">Limited time offers - Grab them before they're gone!</p>
                    </div>
                    {showTimer && (
                        <div className="timer_badge">
                            <svg className="timer_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="timer_text">
                                Ends in {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                            </span>
                        </div>
                    )}
                </div>
            )}

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["mobile"]}
                containerClass="modern_carousel_container"
                itemClass="modern_carousel_item"
            >
                {products && products.map((product, index) => (
                    <NavLink key={product.id} to={`/getproductsone/${product.id}`} className="product_link">
                        <div className="modern_product_card">
                            <div className="product_image_container">
                                <div className="discount_badge">
                                    -{product.price.discount}
                                </div>
                                {index < 3 && <span className="bestseller_badge">Bestseller</span>}
                                <span className="stock_badge">In Stock</span>
                                <button 
                                    className={`wishlist_btn ${isInWishlist(product.id) ? 'active' : ''}`} 
                                    onClick={(e) => toggleWishlist(e, product)}
                                >
                                    <svg className="heart_icon" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <img 
                                    src={product.url} 
                                    alt={product.title.shortTitle} 
                                    className="product_image"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop'; }}
                                />
                            </div>
                            <div className="product_details">
                                <div className="product_title_brand">
                                    <h3 className="product_title">{product.title.shortTitle}</h3>
                                    {product.brand && <span className="product_brand">{product.brand}</span>}
                                </div>
                                <div className="rating_wrapper">
                                    <div className="rating_container">
                                        <svg className="star_icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="rating_value">{product.rating || '4.5'}</span>
                                        <span className="review_count">({product.reviews || '124'} reviews)</span>
                                    </div>
                                    <span className="sold_count">500+ sold</span>
                                </div>
                                <div className="price_container">
                                    <span className="current_price">₹{product.price.cost}</span>
                                    <span className="original_price">₹{product.price.mrp}</span>
                                    <span className="savings_tag">Save ₹{product.price.mrp - product.price.cost}</span>
                                </div>
                                <button 
                                    className={`add_to_cart_btn ${addingToCart[product.id] ? 'adding' : ''}`} 
                                    onClick={(e) => handleAddToCart(e, product)}
                                >
                                    {addingToCart[product.id] ? (
                                        <>
                                            <svg className="check_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Added!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="cart_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Add to Cart
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </Carousel>
        </div>
    );
};

export default ModernSlide;
