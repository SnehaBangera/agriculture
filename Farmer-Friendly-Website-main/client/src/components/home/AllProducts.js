import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/action';
import { toast } from 'react-toastify';
import './allProducts.css';

const AllProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { products } = useSelector(state => state.getproductsdata);
    
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const solutionParam = searchParams.get('solution');
    
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState(category || 'all');
    const [selectedSolution, setSelectedSolution] = useState(solutionParam || 'all');
    const [wishlist, setWishlist] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('wishlist')) || [];
        } catch {
            return [];
        }
    });
    const [addingToCart, setAddingToCart] = useState({});

    // Update selected solution when URL changes
    useEffect(() => {
        if (solutionParam) {
            setSelectedSolution(solutionParam);
            setSelectedCategory('all'); // Reset category when solution is selected
        }
    }, [solutionParam]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        window.dispatchEvent(new Event('wishlistUpdated'));
    }, [wishlist]);

    const categories = [
        { id: 'all', name: 'All Products', icon: '🛒' },
        { id: 'seeds', name: 'Seeds', icon: '🌱' },
        { id: 'fertilizers', name: 'Fertilizers', icon: '🧪' },
        { id: 'pesticides', name: 'Pesticides', icon: '🛡️' },
        { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
        { id: 'fruits', name: 'Fruits', icon: '🍎' },
        { id: 'dairy', name: 'Dairy', icon: '🥛' },
        { id: 'grains', name: 'Grains', icon: '🌾' },
        { id: 'tools', name: 'Farm Tools', icon: '🔧' },
        { id: 'organic', name: 'Organic', icon: '🌿' },
        { id: 'deals', name: 'Hot Deals', icon: '🔥' },
    ];

    const solutions = [
        { id: 'all', name: 'All Solutions', icon: '🎯' },
        { id: 'plant-growth', name: 'Plant Growth', icon: '🌱' },
        { id: 'root-development', name: 'Root Development', icon: '🌿' },
        { id: 'pest-control', name: 'Pest Control', icon: '🛡️' },
        { id: 'disease-prevention', name: 'Disease Prevention', icon: '💊' },
        { id: 'higher-yield', name: 'Higher Yield', icon: '📈' },
        { id: 'soil-health', name: 'Soil Health', icon: '🌍' },
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

    const getFilteredProducts = () => {
        if (!products) return [];
        
        let filtered = [...products];
        
        // Filter by category using product ID prefix
        if (selectedCategory !== 'all') {
            if (selectedCategory === 'deals') {
                filtered = filtered.filter(p => parseInt(p.price?.discount) >= 20);
            } else if (selectedCategory === 'seeds') {
                filtered = filtered.filter(p => p.id?.startsWith('seed'));
            } else if (selectedCategory === 'fertilizers') {
                filtered = filtered.filter(p => p.id?.startsWith('fert') || p.id?.startsWith('growth'));
            } else if (selectedCategory === 'pesticides') {
                filtered = filtered.filter(p => p.id?.startsWith('pest'));
            } else if (selectedCategory === 'vegetables') {
                filtered = filtered.filter(p => p.id?.startsWith('veg'));
            } else if (selectedCategory === 'fruits') {
                filtered = filtered.filter(p => p.id?.startsWith('fruit'));
            } else if (selectedCategory === 'dairy') {
                filtered = filtered.filter(p => p.id?.startsWith('dairy'));
            } else if (selectedCategory === 'grains') {
                filtered = filtered.filter(p => p.id?.startsWith('grain'));
            } else if (selectedCategory === 'tools') {
                filtered = filtered.filter(p => p.id?.startsWith('tool'));
            } else if (selectedCategory === 'organic') {
                filtered = filtered.filter(p => p.id?.startsWith('org'));
            }
        }
        
        // Filter by brand
        if (brand) {
            const brandName = brand.replace(/-/g, ' ').toLowerCase();
            filtered = filtered.filter(p => p.brand?.toLowerCase().includes(brandName));
        }
        
        // Filter by solution using ID-based mapping
        if (selectedSolution && selectedSolution !== 'all') {
            filtered = filtered.filter(p => getProductSolution(p.id) === selectedSolution);
        }
        
        // Filter by price range
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            filtered = filtered.filter(p => {
                if (max) {
                    return p.price.cost >= min && p.price.cost <= max;
                }
                return p.price.cost >= min;
            });
        }
        
        // Sort products
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price.cost - b.price.cost);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price.cost - a.price.cost);
                break;
            case 'rating':
                filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'discount':
                filtered.sort((a, b) => {
                    const discA = parseInt(a.price.discount) || 0;
                    const discB = parseInt(b.price.discount) || 0;
                    return discB - discA;
                });
                break;
            default:
                filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        }
        
        return filtered;
    };

    const filteredProducts = getFilteredProducts();
    
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
            autoClose: 2000
        });
        
        setTimeout(() => {
            setAddingToCart(prev => ({ ...prev, [product.id]: false }));
        }, 600);
    };

    const getPageTitle = () => {
        if (brand) return `${brand.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Products`;
        if (selectedSolution && selectedSolution !== 'all') {
            const solutionNames = {
                'plant-growth': 'Plant Growth Solutions',
                'root-development': 'Root Development',
                'pest-control': 'Pest Control',
                'disease-prevention': 'Disease Prevention',
                'higher-yield': 'Higher Yield Solutions',
                'soil-health': 'Soil Health',
                'weed-management': 'Weed Management'
            };
            return solutionNames[selectedSolution] || 'Products';
        }
        if (selectedCategory !== 'all') {
            return categories.find(c => c.id === selectedCategory)?.name || 'All Products';
        }
        return 'All Products';
    };

    return (
        <div className="all_products_page">
            {/* Header */}
            <div className="products_header">
                <div className="header_content">
                    <button className="back_btn" onClick={() => navigate('/')}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                    <div className="header_info">
                        <h1>{getPageTitle()}</h1>
                        <p>{filteredProducts.length} products found</p>
                    </div>
                </div>
            </div>

            <div className="products_container">
                {/* Sidebar Filters */}
                <aside className="filters_sidebar">
                    <div className="filter_section">
                        <h3>Categories</h3>
                        <div className="category_filters">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`filter_btn ${selectedCategory === cat.id && selectedSolution === 'all' ? 'active' : ''}`}
                                    onClick={() => { setSelectedCategory(cat.id); setSelectedSolution('all'); }}
                                >
                                    <span className="filter_icon">{cat.icon}</span>
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter_section">
                        <h3>🎯 Shop by Solution</h3>
                        <div className="solution_filters">
                            {solutions.map(sol => (
                                <button
                                    key={sol.id}
                                    className={`filter_btn ${selectedSolution === sol.id ? 'active' : ''}`}
                                    onClick={() => { setSelectedSolution(sol.id); if (sol.id !== 'all') setSelectedCategory('all'); }}
                                >
                                    <span className="filter_icon">{sol.icon}</span>
                                    <span>{sol.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter_section">
                        <h3>Price Range</h3>
                        <div className="price_filters">
                            <button 
                                className={`filter_btn ${priceRange === 'all' ? 'active' : ''}`}
                                onClick={() => setPriceRange('all')}
                            >All Prices</button>
                            <button 
                                className={`filter_btn ${priceRange === '0-100' ? 'active' : ''}`}
                                onClick={() => setPriceRange('0-100')}
                            >Under ₹100</button>
                            <button 
                                className={`filter_btn ${priceRange === '100-500' ? 'active' : ''}`}
                                onClick={() => setPriceRange('100-500')}
                            >₹100 - ₹500</button>
                            <button 
                                className={`filter_btn ${priceRange === '500-1000' ? 'active' : ''}`}
                                onClick={() => setPriceRange('500-1000')}
                            >₹500 - ₹1000</button>
                            <button 
                                className={`filter_btn ${priceRange === '1000-' ? 'active' : ''}`}
                                onClick={() => setPriceRange('1000-')}
                            >Above ₹1000</button>
                        </div>
                    </div>
                </aside>

                {/* Products Grid */}
                <main className="products_main">
                    {/* Sort Options */}
                    <div className="sort_bar">
                        <span>Sort by:</span>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="discount">Biggest Discount</option>
                        </select>
                    </div>

                    {/* Products Grid */}
                    <div className="products_grid">
                        {filteredProducts.map((product, index) => (
                            <NavLink key={product.id} to={`/getproductsone/${product.id}`} className="product_card_link">
                                <div className="product_card">
                                    <div className="card_image_wrapper">
                                        <span className="discount_tag">-{product.price.discount}</span>
                                        {index < 5 && <span className="bestseller_tag">Bestseller</span>}
                                        <button 
                                            className={`wishlist_btn ${isInWishlist(product.id) ? 'active' : ''}`}
                                            onClick={(e) => toggleWishlist(e, product)}
                                        >
                                            <svg fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <img 
                                            src={product.url} 
                                            alt={product.title.shortTitle}
                                            loading="lazy"
                                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop'; }}
                                        />
                                    </div>
                                    <div className="card_content">
                                        <div className="card_brand">{product.brand || 'AgriMart'}</div>
                                        <h3 className="card_title">{product.title.shortTitle}</h3>
                                        <div className="card_rating">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span>{product.rating || '4.5'}</span>
                                            <span className="review_count">({product.reviews || 0})</span>
                                        </div>
                                        <div className="card_price">
                                            <span className="current">₹{product.price.cost}</span>
                                            <span className="original">₹{product.price.mrp}</span>
                                        </div>
                                        <button 
                                            className={`add_cart_btn ${addingToCart[product.id] ? 'added' : ''}`}
                                            onClick={(e) => handleAddToCart(e, product)}
                                        >
                                            {addingToCart[product.id] ? '✓ Added' : 'Add to Cart'}
                                        </button>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="no_products">
                            <span className="no_products_icon">🔍</span>
                            <h3>No products found</h3>
                            <p>Try adjusting your filters or browse all products</p>
                            <button onClick={() => { setSelectedCategory('all'); setSelectedSolution('all'); setPriceRange('all'); }}>
                                View All Products
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AllProducts;
