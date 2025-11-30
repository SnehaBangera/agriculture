import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './shopBySolution.css';

const solutions = [
    {
        id: 1,
        name: 'Plant Growth',
        icon: '🌱',
        description: 'Boost vegetative growth',
        color: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
        solution: 'plant-growth'
    },
    {
        id: 2,
        name: 'Root Development',
        icon: '🌿',
        description: 'Strengthen root system',
        color: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        solution: 'root-development'
    },
    {
        id: 3,
        name: 'Pest Control',
        icon: '🛡️',
        description: 'Protect from pests',
        color: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        solution: 'pest-control'
    },
    {
        id: 4,
        name: 'Disease Prevention',
        icon: '💊',
        description: 'Prevent crop diseases',
        color: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
        solution: 'disease-prevention'
    },
    {
        id: 5,
        name: 'Higher Yield',
        icon: '📈',
        description: 'Increase productivity',
        color: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
        solution: 'higher-yield'
    },
    {
        id: 6,
        name: 'Soil Health',
        icon: '🌍',
        description: 'Improve soil quality',
        color: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
        solution: 'soil-health'
    }
];

// Product ID to solution mapping based on productsdata.js
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
    
    // Organic products - various solutions
    if (productId === 'org1' || productId === 'org6') return 'plant-growth';
    if (productId === 'org2' || productId === 'org7') return 'soil-health';
    if (productId === 'org3' || productId === 'org8') return 'pest-control';
    if (productId === 'org4' || productId === 'org9') return 'disease-prevention';
    if (productId === 'org5' || productId === 'org10') return 'higher-yield';
    
    // Tools - various solutions
    if (productId === 'tool1' || productId === 'tool5') return 'soil-health';
    if (productId === 'tool2' || productId === 'tool6') return 'higher-yield';
    if (productId === 'tool3' || productId === 'tool7') return 'pest-control';
    if (productId === 'tool4' || productId === 'tool8') return 'plant-growth';
    if (productId === 'tool9' || productId === 'tool10') return 'higher-yield';
    
    return null;
};

const ShopBySolution = () => {
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.getproductsdata);

    // Calculate product counts for each solution using ID-based mapping
    const solutionCounts = useMemo(() => {
        if (!products || products.length === 0) return {};
        
        return {
            'plant-growth': products.filter(p => getProductSolution(p.id) === 'plant-growth').length,
            'root-development': products.filter(p => getProductSolution(p.id) === 'root-development').length,
            'pest-control': products.filter(p => getProductSolution(p.id) === 'pest-control').length,
            'disease-prevention': products.filter(p => getProductSolution(p.id) === 'disease-prevention').length,
            'higher-yield': products.filter(p => getProductSolution(p.id) === 'higher-yield').length,
            'soil-health': products.filter(p => getProductSolution(p.id) === 'soil-health').length
        };
    }, [products]);

    const handleSolutionClick = (solution) => {
        navigate(`/products?solution=${solution}`);
    };

    return (
        <section className="solutions_section">
            <div className="solutions_container">
                <div className="section_header_centered">
                    <span className="section_badge">🎯 Solutions</span>
                    <h2>Shop by Farming Solutions</h2>
                    <p>Find the right products for your specific needs</p>
                </div>
                
                <div className="solutions_grid">
                    {solutions.map((solution) => (
                        <div 
                            key={solution.id}
                            className="solution_card"
                            style={{ '--solution-bg': solution.color }}
                            onClick={() => handleSolutionClick(solution.solution)}
                        >
                            <div className="solution_icon">
                                <span>{solution.icon}</span>
                            </div>
                            <div className="solution_content">
                                <h3>{solution.name}</h3>
                                <p>{solution.description}</p>
                                <span className="solution_count">
                                    {solutionCounts[solution.solution] || 0} products
                                </span>
                            </div>
                            <div className="solution_arrow">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="solutions_view_all">
                    <button 
                        className="view_all_solutions_btn"
                        onClick={() => navigate('/products')}
                    >
                        View All Products
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShopBySolution;
