import React from 'react'
import { NavLink } from 'react-router-dom';
import "./banner.css"

const bannerData = [
    {
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=400&fit=crop",
        title: "Monsoon Sale 2024",
        subtitle: "Get up to 50% off on premium seeds & fertilizers",
        buttonText: "Shop Now",
        buttonLink: "/products"
    },
    {
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&h=400&fit=crop",
        title: "Premium Organic Products",
        subtitle: "100% certified organic farming essentials for healthier crops",
        buttonText: "Explore Organic",
        buttonLink: "/products?category=organic"
    },
    {
        image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=1200&h=400&fit=crop",
        title: "Free Expert Consultation",
        subtitle: "Get personalized advice from agriculture experts",
        buttonText: "Get Advice",
        buttonLink: "/contact"
    }
];

const sideBanners = [
    {
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=200&fit=crop",
        title: "Fresh Seeds",
        subtitle: "High yield varieties",
        link: "/products?category=seeds"
    },
    {
        image: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=400&h=200&fit=crop",
        title: "Farm Tools",
        subtitle: "Premium quality",
        link: "/products?category=tools"
    }
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="banner_section">
            <div className="banner_container">
                <div className="main_banner">
                    {bannerData.map((banner, index) => (
                        <div 
                            key={index} 
                            className={`banner_slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ opacity: index === currentSlide ? 1 : 0 }}
                        >
                            <img src={banner.image} alt={banner.title} />
                            <div className="banner_overlay">
                                <h2>{banner.title}</h2>
                                <p>{banner.subtitle}</p>
                                <NavLink to={banner.buttonLink} className="banner_btn">
                                    {banner.buttonText}
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    
                    <div className="banner_dots">
                        {bannerData.map((_, index) => (
                            <button 
                                key={index} 
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="side_banners">
                    {sideBanners.map((banner, index) => (
                        <NavLink key={index} to={banner.link} className="side_banner">
                            <img src={banner.image} alt={banner.title} />
                            <div className="side_overlay">
                                <h3>{banner.title}</h3>
                                <p>{banner.subtitle}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner
