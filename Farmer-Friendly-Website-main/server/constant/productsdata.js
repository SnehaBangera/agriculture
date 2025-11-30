 const products = [
    { 
        id: 'product1',
        url: 'https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg', 
        title: {
            shortTitle: 'Fresh Organic Apples',
            longTitle: 'Fresh Organic Apples - Premium Quality Fruits'
        }, 
        price: {
            mrp: 200,
            cost: 180,
            discount: '10%'
        },
        description: 'Farm fresh organic apples, healthy and tasty. Rich in vitamins and perfect for your daily nutrition.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        rating: 4.5,
        reviews: 128 
    },
    { 
        id: 'product2',
        url: 'https://t4.ftcdn.net/jpg/02/28/90/67/360_F_228906712_r4bb71gSmKvyDHq54JvjXAhKWpQiqWvX.jpg', 
        title: {
            shortTitle: 'Farm Fresh Carrots',
            longTitle: 'Farm Fresh Carrots - Premium Vegetables'
        },
        price: {
            mrp: 150,
            cost: 120,
            discount: '20%'
        },
        description: 'The best quality carrots handpicked for you. Fresh from the farm to your table.',
        discount: 'Extra 20% Off', 
        tagline: 'Farm fresh',
        rating: 4.7,
        reviews: 95
    },
    { 
        id: 'product3',
        url: 'https://images.cnbctv18.com/wp-content/uploads/2023/07/Rice-2.jpg', 
        title: {
            shortTitle: 'Premium White Rice',
            longTitle: 'Premium White Rice - Daily Essential'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'Premium quality white rice, essential for Indian households. Direct from farm to your kitchen.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day',
        rating: 4.6,
        reviews: 203
    },
    { 
        id: 'product4',
        url: 'https://m.media-amazon.com/images/I/61-qNknjsqL._AC_UF1000,1000_QL80_.jpg', 
        title: {
            shortTitle: 'Organic Fertilizer',
            longTitle: 'Organic Fertilizer - Growth Booster'
        }, 
        price: {
            mrp: 1000,
            cost: 800,
            discount: '20%'
        },
        description: 'Premium organic fertilizer for better plant growth. Natural ingredients for healthy crops.',
        discount: 'Save 20%', 
        tagline: 'Best Seller',
        rating: 4.8,
        reviews: 156
    },
    { 
        id: 'product5',
        url: 'https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg',
        title: {
            shortTitle: 'Fresh Dairy Milk',
            longTitle: 'Fresh Dairy Milk - Pure & Protein Rich'
        }, 
        price: {
            mrp: 40,
            cost: 30,
            discount: '15%'
        },
        description: 'Pure and fresh dairy milk, protein-rich and perfect for your daily nutrition needs.',
        discount: 'Best rate', 
        tagline: 'Protein-rich milk',
        rating: 4.9,
        reviews: 312
    },
    { 
        id: 'product6',
        url: 'https://5.imimg.com/data5/SELLER/Default/2023/3/296254921/DH/YN/FK/75796113/npk-fertilizer-500x500.jpg', 
        title: {
            shortTitle: 'NPK Fertilizer',
            longTitle: 'NPK Fertilizer - Complete Plant Nutrition'
        }, 
        price: {
            mrp: 1200,
            cost: 950,
            discount: '21%'
        },
        description: 'Complete NPK fertilizer for balanced plant nutrition. Suitable for all types of crops.',
        discount: 'Save ₹250', 
        tagline: 'Complete Nutrition',
        rating: 4.6,
        reviews: 89
    },
    { 
        id: 'product7',
        url: 'https://www.shutterstock.com/image-photo/tomatoes-isolated-on-white-background-600nw-1805494887.jpg', 
        title: {
            shortTitle: 'Fresh Tomatoes',
            longTitle: 'Fresh Farm Tomatoes - Organic'
        }, 
        price: {
            mrp: 80,
            cost: 60,
            discount: '25%'
        },
        description: 'Fresh and juicy tomatoes, perfect for cooking and salads. Grown organically without chemicals.',
        discount: 'Extra 25% Off', 
        tagline: 'Organic Fresh',
        rating: 4.4,
        reviews: 145
    },
    { 
        id: 'product8',
        url: 'https://www.bigbasket.com/media/uploads/p/l/40208947_2-bb-royal-organic-banana-yelakki.jpg', 
        title: {
            shortTitle: 'Banana Bundle',
            longTitle: 'Fresh Banana Bundle - Rich in Potassium'
        }, 
        price: {
            mrp: 60,
            cost: 45,
            discount: '25%'
        },
        description: 'Fresh banana bundle, rich in potassium and energy. Perfect for your daily diet.',
        discount: 'Fresh Deal', 
        tagline: 'Energy Booster',
        rating: 4.7,
        reviews: 198
    },
    { 
        id: 'product9',
        url: 'https://rukminim2.flixcart.com/image/850/1000/l2urv680/soil-manure/g/h/s/5-vermicompost-organic-fertilizer-manure-for-plants-5kg-pack-original-image2qawhmpyhhh.jpeg', 
        title: {
            shortTitle: 'Vermicompost',
            longTitle: 'Vermicompost - Organic Soil Enricher'
        }, 
        price: {
            mrp: 800,
            cost: 640,
            discount: '20%'
        },
        description: 'Premium vermicompost for enriching soil naturally. Best for organic farming and gardening.',
        discount: 'Organic Choice', 
        tagline: 'Soil Enricher',
        rating: 4.8,
        reviews: 167
    },
    { 
        id: 'product10',
        url: 'https://m.media-amazon.com/images/I/71S+vZZ3AFL.jpg', 
        title: {
            shortTitle: 'Bio Pesticide',
            longTitle: 'Organic Bio Pesticide - Chemical Free'
        }, 
        price: {
            mrp: 600,
            cost: 480,
            discount: '20%'
        },
        description: 'Organic bio pesticide for safe and effective pest control. Protect your crops naturally.',
        discount: 'Safe Farming', 
        tagline: 'Chemical Free',
        rating: 4.5,
        reviews: 94
    },
    { 
        id: 'product11',
        url: 'https://5.imimg.com/data5/SELLER/Default/2021/8/QF/UA/FQ/6536405/plant-growth-promoter-500x500.jpg', 
        title: {
            shortTitle: 'Growth Promoter',
            longTitle: 'Plant Growth Promoter - Boost Yield'
        }, 
        price: {
            mrp: 750,
            cost: 600,
            discount: '20%'
        },
        description: 'Advanced plant growth promoter to boost yield and plant health. Suitable for all crops.',
        discount: 'Boost Yield', 
        tagline: 'High Performance',
        rating: 4.7,
        reviews: 112
    },
    { 
        id: 'product12',
        url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333765008/YP/NS/LZ/3686832/liquid-seaweed-fertilizer-500x500.jpg', 
        title: {
            shortTitle: 'Seaweed Fertilizer',
            longTitle: 'Liquid Seaweed Fertilizer - Natural Boost'
        }, 
        price: {
            mrp: 900,
            cost: 720,
            discount: '20%'
        },
        description: 'Natural liquid seaweed fertilizer for enhanced plant growth and immunity. Eco-friendly solution.',
        discount: 'Natural Power', 
        tagline: 'Ocean Nutrition',
        rating: 4.6,
        reviews: 78
    }
]

module.exports=products;