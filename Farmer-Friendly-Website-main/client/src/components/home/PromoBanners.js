import React from 'react';
import { useNavigate } from 'react-router-dom';
import './promoBanners.css';

const PromoBanners = () => {
    const navigate = useNavigate();
    
    return (
        <section className="promo_banners_section">
            <div className="promo_container">
                <div className="promo_banner promo_large" onClick={() => navigate('/?category=seeds')}>
                    <div className="promo_content">
                        <span className="promo_badge">Limited Time</span>
                        <h2>Monsoon Special Sale</h2>
                        <p>Get up to 50% off on seeds and fertilizers</p>
                        <button className="promo_btn">Shop Now</button>
                    </div>
                    <div className="promo_image">
                        <img 
                            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop" 
                            alt="Monsoon Sale"
                            loading="lazy"
                        />
                    </div>
                </div>
                
                <div className="promo_small_grid">
                    <div className="promo_banner promo_small" style={{ '--promo-color': '#fef3c7' }} onClick={() => navigate('/?category=seeds')}>
                        <div className="promo_small_content">
                            <span className="promo_emoji">🌱</span>
                            <h3>Fresh Seeds</h3>
                            <p>Starting at ₹99</p>
                        </div>
                    </div>
                    
                    <div className="promo_banner promo_small" style={{ '--promo-color': '#dbeafe' }} onClick={() => navigate('/?category=fertilizers')}>
                        <div className="promo_small_content">
                            <span className="promo_emoji">🧪</span>
                            <h3>Bio Fertilizers</h3>
                            <p>Flat 30% Off</p>
                        </div>
                    </div>
                    
                    <div className="promo_banner promo_small" style={{ '--promo-color': '#dcfce7' }} onClick={() => navigate('/?category=pesticides')}>
                        <div className="promo_small_content">
                            <span className="promo_emoji">🛡️</span>
                            <h3>Crop Protection</h3>
                            <p>Up to 25% Off</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
