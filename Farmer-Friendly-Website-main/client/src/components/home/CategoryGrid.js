import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './categoryGrid.css';

const categories = [
    {
        id: 'seeds',
        name: 'Seeds',
        emoji: '🌱',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
        color: '#dcfce7',
        description: 'Premium quality seeds for high yield'
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        emoji: '🧪',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=200&fit=crop',
        color: '#fef3c7',
        description: 'Boost your soil nutrition'
    },
    {
        id: 'pesticides',
        name: 'Pesticides',
        emoji: '🛡️',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300&h=200&fit=crop',
        color: '#fee2e2',
        description: 'Protect your crops effectively'
    },
    {
        id: 'vegetables',
        name: 'Fresh Vegetables',
        emoji: '🥬',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
        color: '#d1fae5',
        description: 'Farm fresh organic vegetables'
    },
    {
        id: 'fruits',
        name: 'Fresh Fruits',
        emoji: '🍎',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=200&fit=crop',
        color: '#fce7f3',
        description: 'Seasonal fruits at best prices'
    },
    {
        id: 'dairy',
        name: 'Dairy Products',
        emoji: '🥛',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop',
        color: '#e0e7ff',
        description: 'Pure dairy from local farms'
    },
    {
        id: 'grains',
        name: 'Grains & Cereals',
        emoji: '🌾',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
        color: '#fef9c3',
        description: 'High quality grains & pulses'
    },
    {
        id: 'tools',
        name: 'Farm Tools',
        emoji: '🔧',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
        color: '#e5e7eb',
        description: 'Essential farming equipment'
    },
    {
        id: 'organic',
        name: 'Organic Products',
        emoji: '🌿',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=200&fit=crop',
        color: '#d1fae5',
        description: '100% certified organic'
    },
    {
        id: 'deals',
        name: 'Hot Deals',
        emoji: '🔥',
        image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=300&h=200&fit=crop',
        color: '#ffedd5',
        description: 'Best discounts today'
    }
];

const CategoryGrid = ({ products = [] }) => {
    const navigate = useNavigate();
    
    // Get product count per category using product ID prefixes
    const productCounts = useMemo(() => {
        if (!products || products.length === 0) return {};
        
        const counts = {
            seeds: products.filter(p => p.id?.startsWith('seed')).length,
            fertilizers: products.filter(p => p.id?.startsWith('fert') || p.id?.startsWith('growth')).length,
            pesticides: products.filter(p => p.id?.startsWith('pest')).length,
            vegetables: products.filter(p => p.id?.startsWith('veg')).length,
            fruits: products.filter(p => p.id?.startsWith('fruit')).length,
            dairy: products.filter(p => p.id?.startsWith('dairy')).length,
            grains: products.filter(p => p.id?.startsWith('grain')).length,
            tools: products.filter(p => p.id?.startsWith('tool')).length,
            organic: products.filter(p => p.id?.startsWith('org')).length,
            deals: products.filter(p => parseInt(p.price?.discount) >= 20).length
        };
        return counts;
    }, [products]);
    
    const getProductCount = (categoryId) => {
        return productCounts[categoryId] || 0;
    };

    return (
        <section className="category_grid_section">
            <div className="section_header_row">
                <div className="header_left_side">
                    <h2 className="section_title_main">Shop by Category</h2>
                    <p className="section_subtitle_main">Browse our wide range of agricultural products</p>
                </div>
                <button className="view_all_btn" onClick={() => navigate('/products')}>
                    View All Products
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
            <div className="category_grid">
                {categories.map((cat) => (
                    <div 
                        key={cat.id}
                        className="category_card"
                        style={{ '--card-bg': cat.color }}
                        onClick={() => navigate(`/products?category=${cat.id}`)}
                    >
                        <div className="category_image_wrapper">
                            <img src={cat.image} alt={cat.name} loading="lazy" />
                            <div className="category_overlay">
                                <span className="category_emoji_badge">{cat.emoji}</span>
                            </div>
                        </div>
                        <div className="category_info">
                            <h3>{cat.name}</h3>
                            <p className="category_description">{cat.description}</p>
                            <div className="category_footer">
                                <span className="product_count">{getProductCount(cat.id)} items</span>
                                <span className="explore_link">
                                    Explore
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
