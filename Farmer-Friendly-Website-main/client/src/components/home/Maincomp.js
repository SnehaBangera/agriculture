import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import Banner from './Banner'
import "./home.css";
import Slide from './Slide';
import ModernSlide from './ModernSlide';
import CategoryGrid from './CategoryGrid';
import BrandsSection from './BrandsSection';
import ShopBySolution from './ShopBySolution';
import PromoBanners from './PromoBanners';
import TrustBadges from './TrustBadges';
import { getProducts } from '../redux/actions/action';
import {useDispatch,useSelector} from "react-redux"

const Maincomp = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const solution = searchParams.get('solution');
    const search = searchParams.get('search');

    const { products } = useSelector(state => state.getproductsdata);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    // Product ID to solution mapping
    const getProductSolution = (productId) => {
        if (!productId) return null;
        
        // Seeds solutions
        if (productId === 'seed1' || productId === 'seed4' || productId === 'seed5') return 'higher-yield';
        if (productId === 'seed2' || productId === 'seed6' || productId === 'seed9') return 'plant-growth';
        if (productId === 'seed3' || productId === 'seed7') return 'disease-prevention';
        if (productId === 'seed8' || productId === 'seed10') return 'higher-yield';
        
        // Fertilizers solutions
        if (productId === 'fert1' || productId === 'fert4' || productId === 'fert6') return 'plant-growth';
        if (productId === 'fert2' || productId === 'fert3') return 'soil-health';
        if (productId === 'fert5') return 'root-development';
        if (productId === 'fert7') return 'higher-yield';
        
        // Growth products
        if (productId === 'growth1') return 'plant-growth';
        if (productId === 'growth2') return 'root-development';
        if (productId === 'growth3') return 'soil-health';
        
        // Pesticides solutions
        if (productId === 'pest1' || productId === 'pest2' || productId === 'pest4' || productId === 'pest6' || productId === 'pest7') return 'pest-control';
        if (productId === 'pest3') return 'disease-prevention';
        if (productId === 'pest5') return 'weed-management';
        
        // Organic products
        if (productId === 'org1' || productId === 'org6') return 'plant-growth';
        if (productId === 'org2' || productId === 'org7') return 'soil-health';
        if (productId === 'org3' || productId === 'org8') return 'pest-control';
        if (productId === 'org4' || productId === 'org9') return 'disease-prevention';
        if (productId === 'org5' || productId === 'org10') return 'higher-yield';
        
        // Tools
        if (productId === 'tool1' || productId === 'tool5') return 'soil-health';
        if (productId === 'tool2' || productId === 'tool6') return 'higher-yield';
        if (productId === 'tool3' || productId === 'tool7') return 'pest-control';
        if (productId === 'tool4' || productId === 'tool8') return 'plant-growth';
        if (productId === 'tool9' || productId === 'tool10') return 'higher-yield';
        
        return null;
    };

    // Filter products based on selected filters using ID prefix
    const getFilteredProducts = () => {
        if (!products) return [];
        
        let filtered = [...products];
        
        // Filter by category using product ID prefix
        if (category && category !== 'support') {
            if (category === 'seeds') {
                filtered = filtered.filter(p => p.id?.startsWith('seed'));
            } else if (category === 'fertilizers') {
                filtered = filtered.filter(p => p.id?.startsWith('fert') || p.id?.startsWith('growth'));
            } else if (category === 'pesticides') {
                filtered = filtered.filter(p => p.id?.startsWith('pest'));
            } else if (category === 'vegetables') {
                filtered = filtered.filter(p => p.id?.startsWith('veg'));
            } else if (category === 'fruits') {
                filtered = filtered.filter(p => p.id?.startsWith('fruit'));
            } else if (category === 'dairy') {
                filtered = filtered.filter(p => p.id?.startsWith('dairy'));
            } else if (category === 'grains') {
                filtered = filtered.filter(p => p.id?.startsWith('grain'));
            } else if (category === 'tools') {
                filtered = filtered.filter(p => p.id?.startsWith('tool'));
            } else if (category === 'organic') {
                filtered = filtered.filter(p => p.id?.startsWith('org'));
            } else if (category === 'deals') {
                filtered = filtered.filter(p => parseInt(p.price?.discount) >= 20);
            }
        }
        
        // Filter by brand
        if (brand) {
            const brandName = brand.replace(/-/g, ' ').toLowerCase();
            filtered = filtered.filter(p => p.brand?.toLowerCase().includes(brandName));
        }
        
        // Filter by solution using ID-based mapping
        if (solution) {
            filtered = filtered.filter(p => getProductSolution(p.id) === solution);
        }
        
        // Filter by search
        if (search) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(p => 
                p.title.shortTitle.toLowerCase().includes(searchLower) ||
                p.title.longTitle.toLowerCase().includes(searchLower) ||
                p.description?.toLowerCase().includes(searchLower) ||
                p.category?.toLowerCase().includes(searchLower) ||
                p.brand?.toLowerCase().includes(searchLower)
            );
        }
        
        return filtered;
    };

    const filteredProducts = getFilteredProducts();

    // Get filter display name
    const getFilterName = () => {
        if (category) {
            const names = {
                'seeds': '🌱 Seeds',
                'fertilizers': '🧪 Fertilizers',
                'pesticides': '🛡️ Pesticides',
                'vegetables': '🥬 Fresh Vegetables',
                'fruits': '🍎 Fresh Fruits',
                'dairy': '🥛 Dairy Products',
                'grains': '🌾 Grains & Cereals',
                'deals': '🏷️ Hot Deals',
            };
            return names[category] || category;
        }
        if (brand) {
            return `🏢 ${brand.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Products`;
        }
        if (solution) {
            const solutionNames = {
                'plant-growth': '🌿 Plant Growth Solutions',
                'root-development': '🌱 Root Development',
                'pest-control': '🐛 Pest Control',
                'disease-prevention': '🛡️ Disease Prevention',
                'higher-yield': '📈 Higher Yield Solutions',
                'soil-health': '🌍 Soil Health',
                'weed-management': '🌿 Weed Management'
            };
            return solutionNames[solution] || solution;
        }
        if (search) {
            return `🔍 Search: "${search}"`;
        }
        return null;
    };

    const isFiltering = category || brand || solution || search;


    return (
        <>
            <div className="home_section">
                {/* Filter Header - shown when filtering */}
                {isFiltering && category !== 'support' && (
                    <section className="category_header">
                        <div className="category_header_content">
                            <h2 className="category_title">{getFilterName()}</h2>
                            <button className="clear_filter_btn" onClick={() => navigate('/')}>
                                ✕ Clear Filter
                            </button>
                        </div>
                        <p className="category_count">{filteredProducts?.length || 0} products found</p>
                    </section>
                )}

                {/* Customer Service Notice */}
                {category === 'support' && (
                    <section className="support_section">
                        <div className="support_content">
                            <div className="support_icon">📞</div>
                            <h2>Customer Service</h2>
                            <p>We're here to help! Contact us for any queries.</p>
                            <div className="support_options">
                                <div className="support_option">
                                    <span>📧</span>
                                    <p>support@farmerfriendly.com</p>
                                </div>
                                <div className="support_option">
                                    <span>📱</span>
                                    <p>+91 98765 43210</p>
                                </div>
                                <div className="support_option">
                                    <span>💬</span>
                                    <p>Live Chat (9 AM - 9 PM)</p>
                                </div>
                            </div>
                            <button className="btn_primary" onClick={() => navigate('/')}>Back to Shopping</button>
                        </div>
                    </section>
                )}

                {/* Hero Section - only show when not filtering */}
                {!category && (
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
                                    <button className="btn_primary" onClick={() => navigate('/?category=deals')}>Shop Now</button>
                                    <button className="btn_secondary" onClick={() => navigate('/?category=deals')}>View Deals</button>
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
                )}

                {/* Quick Stats - only show when not filtering */}
                {!category && (
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
                )}

                {/* Product Slides - show filtered or all products */}
                {isFiltering && category !== 'support' ? (
                    <ModernSlide title={getFilterName()} products={filteredProducts} showTimer={category === 'deals'} hideHeader={true}/>
                ) : !isFiltering ? (
                    <>
                        {/* Hero Banner */}
                        <Banner />
                        
                        {/* Category Grid */}
                        <CategoryGrid products={products} />
                        
                        {/* Today's Deals */}
                        <ModernSlide title="Today's Hot Deals 🔥" products={products} showTimer={true}/>
                        
                        {/* Promotional Banners */}
                        <PromoBanners />
                        
                        {/* Best Selling Seeds */}
                        <ModernSlide title="🌱 Premium Seeds" products={products?.filter(p => p.id?.startsWith('seed'))} showTimer={false}/>
                        
                        {/* Shop by Solution */}
                        <ShopBySolution />
                        
                        {/* Fertilizers */}
                        <ModernSlide title="🧪 Top Fertilizers" products={products?.filter(p => p.id?.startsWith('fert') || p.id?.startsWith('growth'))} showTimer={false}/>
                        
                        {/* Brands Section */}
                        <BrandsSection />
                        
                        {/* Pesticides */}
                        <ModernSlide title="🛡️ Crop Protection" products={products?.filter(p => p.id?.startsWith('pest'))} showTimer={false}/>
                        
                        {/* Fresh Produce */}
                        <ModernSlide title="🥗 Fresh Vegetables" products={products?.filter(p => p.id?.startsWith('veg'))} showTimer={false}/>
                        
                        {/* Fruits */}
                        <ModernSlide title="🍎 Fresh Fruits" products={products?.filter(p => p.id?.startsWith('fruit'))} showTimer={false}/>
                        
                        {/* Trust Badges Section */}
                        <TrustBadges />
                    </>
                ) : null}

                {/* Features Section */}
                {!category && (
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
                )}

            </div>

        </>
    )
}

export default Maincomp;
