import React from 'react';
import { useNavigate } from 'react-router-dom';
import './brandsSection.css';

const brands = [
    {
        id: 1,
        name: 'Tata Rallis',
        logo: '🌿',
        color: '#0066b2'
    },
    {
        id: 2,
        name: 'Bayer',
        logo: '🔬',
        color: '#00bcce'
    },
    {
        id: 3,
        name: 'Syngenta',
        logo: '🌱',
        color: '#00a651'
    },
    {
        id: 4,
        name: 'UPL',
        logo: '🧪',
        color: '#009fdf'
    },
    {
        id: 5,
        name: 'BASF',
        logo: '🔶',
        color: '#21409a'
    },
    {
        id: 6,
        name: 'Coromandel',
        logo: '🌾',
        color: '#c41230'
    },
    {
        id: 7,
        name: 'Godrej',
        logo: '🍃',
        color: '#009933'
    },
    {
        id: 8,
        name: 'Dhanuka',
        logo: '💧',
        color: '#ed1c24'
    },
    {
        id: 9,
        name: 'IFFCO',
        logo: '🏭',
        color: '#1e3a8a'
    }
];

const BrandsSection = () => {
    const navigate = useNavigate();

    return (
        <section className="brands_section">
            <div className="brands_container">
                <div className="section_header_row">
                    <div className="header_left_side">
                        <h2 className="section_title_main">Top Brands</h2>
                        <p className="section_subtitle_main">Shop from India's leading agricultural brands</p>
                    </div>
                    <button className="view_all_btn" onClick={() => navigate('/?category=all')}>
                        View All Brands
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                
                <div className="brands_grid">
                    {brands.map((brand) => (
                        <div 
                            key={brand.id}
                            className="brand_card"
                            onClick={() => navigate(`/?brand=${brand.name.toLowerCase().replace(/\s+/g, '-')}`)}
                        >
                            <div className="brand_logo" style={{ background: brand.color }}>
                                <span>{brand.logo}</span>
                            </div>
                            <span className="brand_name">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
