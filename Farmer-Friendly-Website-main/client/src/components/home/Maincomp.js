import React, { useEffect } from 'react'
import Banner from './Banner'
import "./home.css";
import Slide from './Slide';
import ModernSlide from './ModernSlide';
import { getProducts } from '../redux/actions/action';
import {useDispatch,useSelector} from "react-redux"



const Maincomp = () => {


    const { products } = useSelector(state => state.getproductsdata);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


    return (
        <>
            <div className="home_section">
                {/* Hero Section */}
                <section className="hero_banner">
                    <div className="hero_content">
                        <div className="hero_left">
                            <div className="trending_badge">
                                <svg className="trending_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <span>Fresh Deals Today</span>
                            </div>
                            <h1 className="hero_title">
                                Farm-Fresh Groceries
                                <span className="hero_title_accent"> Delivered</span>
                            </h1>
                            <p className="hero_description">
                                Get the freshest produce delivered to your doorstep. Save up to 50% on selected items!
                            </p>
                            <div className="hero_actions">
                                <button className="btn_primary">Shop Now</button>
                                <button className="btn_secondary">View Deals</button>
                            </div>
                        </div>
                        <div className="hero_right">
                            <div className="offer_card">
                                <div className="offer_emoji">🥗</div>
                                <p className="offer_title">Limited Time Offer</p>
                                <p className="offer_discount">50% OFF</p>
                                <p className="offer_subtitle">On fresh vegetables this week</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="quick_stats">
                    <div className="stat_item">
                        <div className="stat_value">2,500+</div>
                        <div className="stat_label">Products</div>
                    </div>
                    <div className="stat_item">
                        <div className="stat_value">30min</div>
                        <div className="stat_label">Delivery</div>
                    </div>
                    <div className="stat_item">
                        <div className="stat_value">50K+</div>
                        <div className="stat_label">Happy Customers</div>
                    </div>
                    <div className="stat_item">
                        <div className="stat_value">100%</div>
                        <div className="stat_label">Fresh Guarantee</div>
                    </div>
                </section>

                {/* Modern Product Slides */}
                <ModernSlide title="Today's Hot Deals" products={products} showTimer={true}/>
                
                <ModernSlide title="Best Sellers" products={products} showTimer={false}/>
                
                <ModernSlide title="Organic Fertilizers & Farming Supplies" products={products?.filter(p => p.tagline?.toLowerCase().includes('fertilizer') || p.title.shortTitle?.toLowerCase().includes('fertilizer') || p.id.includes('product4') || p.id.includes('product6') || p.id.includes('product9') || p.id.includes('product10') || p.id.includes('product11') || p.id.includes('product12'))} showTimer={false}/>

                {/* Features Section */}
                <section className="features_section">
                    <div className="feature_item">
                        <div className="feature_icon_wrapper">
                            <span className="feature_emoji">🚚</span>
                        </div>
                        <h3 className="feature_title">Fast Delivery</h3>
                        <p className="feature_text">Get your groceries delivered in 30 minutes or less</p>
                    </div>
                    <div className="feature_item">
                        <div className="feature_icon_wrapper">
                            <span className="feature_emoji">✨</span>
                        </div>
                        <h3 className="feature_title">Fresh Guarantee</h3>
                        <p className="feature_text">100% fresh products or your money back</p>
                    </div>
                    <div className="feature_item">
                        <div className="feature_icon_wrapper">
                            <span className="feature_emoji">💰</span>
                        </div>
                        <h3 className="feature_title">Best Prices</h3>
                        <p className="feature_text">Competitive prices on all your favorite products</p>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Maincomp;
