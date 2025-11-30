import React from 'react'
import { NavLink } from 'react-router-dom'
import "./newnav.css"

const categories = [
    { name: 'Fruits', emoji: '🍎', filter: 'fruits' },
    { name: 'Vegetables', emoji: '🥬', filter: 'vegetables' },
    { name: 'Dairy', emoji: '🥛', filter: 'dairy' },
    { name: 'Fertilizers', emoji: '🌱', filter: 'fertilizers' },
    { name: 'Grains', emoji: '🌾', filter: 'grains' },
    { name: 'Organic', emoji: '🌿', filter: 'organic' },
    { name: "Today's Deals", emoji: '🏷️', filter: 'deals' },
    { name: 'Customer Service', emoji: '📞', filter: 'support' },
];

const Newnav = () => {
    const handleCategoryClick = (filter) => {
        // Scroll to products section
        const productsSection = document.querySelector('.home_section');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    {categories.map((cat, index) => (
                        <NavLink 
                            key={index}
                            to={`/?category=${cat.filter}`}
                            className="category_link"
                            onClick={() => handleCategoryClick(cat.filter)}
                        >
                            <span className="cat_emoji">{cat.emoji}</span>
                            <span className="cat_name">{cat.name}</span>
                        </NavLink>
                    ))}
                </div>
                <div className="right_data">
                </div>
            </div>
        </div>
    )
}

export default Newnav