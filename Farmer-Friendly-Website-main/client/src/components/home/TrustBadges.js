import React from 'react';
import './trustBadges.css';

const stats = [
    {
        id: 1,
        value: '50K+',
        label: 'Farmers Served',
        icon: '👨‍🌾'
    },
    {
        id: 2,
        value: '100+',
        label: 'Brands Available',
        icon: '🏷️'
    },
    {
        id: 3,
        value: '5000+',
        label: 'Products',
        icon: '📦'
    },
    {
        id: 4,
        value: '98%',
        label: 'Satisfaction Rate',
        icon: '⭐'
    }
];

const TrustBadges = () => {
    return (
        <section className="trust_section">
            <div className="trust_container">
                <div className="trust_left">
                    <h2>India's Growing<br /><span>Agricultural Platform</span></h2>
                    <p>Trusted by farmers across the nation for quality products, expert advice, and reliable delivery.</p>
                    <div className="trust_features">
                        <div className="trust_feature">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>100% Genuine Products</span>
                        </div>
                        <div className="trust_feature">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Expert Farming Advice</span>
                        </div>
                        <div className="trust_feature">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Pan-India Delivery</span>
                        </div>
                    </div>
                </div>
                
                <div className="trust_stats_grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="trust_stat_card">
                            <span className="stat_icon">{stat.icon}</span>
                            <div className="stat_info">
                                <span className="stat_value">{stat.value}</span>
                                <span className="stat_label">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
