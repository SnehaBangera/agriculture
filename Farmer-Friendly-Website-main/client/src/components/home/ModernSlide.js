import React from 'react';
import "./modernslide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

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

const ModernSlide = ({ title, products, showTimer }) => {
    return (
        <div className="modern_products_section">
            <div className="section_header">
                <div>
                    <h2 className="section_title">{title} 🔥</h2>
                    <p className="section_subtitle">Limited time offers - Grab them before they're gone!</p>
                </div>
                {showTimer && (
                    <div className="timer_badge">
                        <svg className="timer_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="timer_text">Ends in 12:45:30</span>
                    </div>
                )}
            </div>

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
                {products && products.map((product) => (
                    <NavLink key={product.id} to={`/getproductsone/${product.id}`} className="product_link">
                        <div className="modern_product_card">
                            <div className="product_image_container">
                                <div className="discount_badge">
                                    -{product.price.discount}
                                </div>
                                <button className="wishlist_btn">
                                    <svg className="heart_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <img src={product.url} alt={product.title.shortTitle} className="product_image" />
                            </div>
                            <div className="product_details">
                                <h3 className="product_title">{product.title.shortTitle}</h3>
                                <div className="rating_container">
                                    <svg className="star_icon" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="rating_value">{product.rating || '4.5'}</span>
                                    <span className="review_count">({product.reviews || '0'})</span>
                                </div>
                                <div className="price_container">
                                    <span className="current_price">₹{product.price.cost}</span>
                                    <span className="original_price">₹{product.price.mrp}</span>
                                </div>
                                <button className="add_to_cart_btn">
                                    Add to Cart
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
