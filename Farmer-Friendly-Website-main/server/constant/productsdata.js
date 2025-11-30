const products = [
    // ============ SEEDS ============
    { 
        id: 'seed1',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Hybrid Tomato Seeds',
            longTitle: 'Hybrid Tomato Seeds - High Yield Variety'
        }, 
        price: { mrp: 350, cost: 280, discount: '20%' },
        description: 'Premium hybrid tomato seeds with high germination rate. Produces large, juicy tomatoes.',
        discount: 'Best Seller', 
        tagline: 'High Yield',
        rating: 4.8,
        reviews: 245,
        category: 'seeds',
        brand: 'Syngenta',
        solution: 'higher-yield'
    },
    { 
        id: 'seed2',
        url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Organic Spinach Seeds',
            longTitle: 'Organic Spinach Seeds - Premium Quality'
        }, 
        price: { mrp: 180, cost: 145, discount: '19%' },
        description: 'Certified organic spinach seeds. Fast growing and nutrient-rich leafy vegetables.',
        discount: 'Organic Choice', 
        tagline: 'Nutrient Rich',
        rating: 4.6,
        reviews: 178,
        category: 'seeds',
        brand: 'Bayer',
        solution: 'plant-growth'
    },
    { 
        id: 'seed3',
        url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Chilli Seeds Pack',
            longTitle: 'Premium Chilli Seeds - Hot Variety Pack'
        }, 
        price: { mrp: 220, cost: 175, discount: '20%' },
        description: 'High-quality chilli seeds for home garden and commercial farming. Disease resistant variety.',
        discount: 'Hot Deal', 
        tagline: 'Disease Resistant',
        rating: 4.5,
        reviews: 132,
        category: 'seeds',
        brand: 'Tata Rallis',
        solution: 'disease-prevention'
    },
    { 
        id: 'seed4',
        url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Wheat Seeds Premium',
            longTitle: 'Premium Wheat Seeds - HD-2967 Variety'
        }, 
        price: { mrp: 2500, cost: 1999, discount: '20%' },
        description: 'High-yielding wheat variety suitable for rabi season. Excellent grain quality and disease resistance.',
        discount: 'Bulk Deal', 
        tagline: 'Rabi Season',
        rating: 4.7,
        reviews: 89,
        category: 'seeds',
        brand: 'UPL',
        solution: 'higher-yield'
    },
    { 
        id: 'seed5',
        url: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Paddy Seeds Hybrid',
            longTitle: 'Hybrid Paddy Seeds - IR64 Variety'
        }, 
        price: { mrp: 1800, cost: 1450, discount: '19%' },
        description: 'Premium hybrid paddy seeds with excellent tillering capacity and grain quality.',
        discount: 'Monsoon Special', 
        tagline: 'Kharif Ready',
        rating: 4.8,
        reviews: 156,
        category: 'seeds',
        brand: 'Syngenta',
        solution: 'higher-yield'
    },

    // ============ FERTILIZERS ============
    { 
        id: 'fert1',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Organic Fertilizer',
            longTitle: 'Organic Fertilizer - Growth Booster'
        }, 
        price: { mrp: 1000, cost: 800, discount: '20%' },
        description: 'Premium organic fertilizer for better plant growth. Natural ingredients for healthy crops.',
        discount: 'Save 20%', 
        tagline: 'Best Seller',
        rating: 4.8,
        reviews: 256,
        category: 'fertilizers',
        brand: 'Coromandel',
        solution: 'plant-growth'
    },
    { 
        id: 'fert2',
        url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'NPK 19-19-19',
            longTitle: 'NPK Fertilizer 19-19-19 - Balanced Nutrition'
        }, 
        price: { mrp: 1200, cost: 950, discount: '21%' },
        description: 'Complete NPK fertilizer for balanced plant nutrition. Suitable for all types of crops.',
        discount: 'Save Rs.250', 
        tagline: 'Complete Nutrition',
        rating: 4.7,
        reviews: 189,
        category: 'fertilizers',
        brand: 'IFFCO',
        solution: 'soil-health'
    },
    { 
        id: 'fert3',
        url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Vermicompost 5kg',
            longTitle: 'Vermicompost - Organic Soil Enricher'
        }, 
        price: { mrp: 800, cost: 640, discount: '20%' },
        description: 'Premium vermicompost for enriching soil naturally. Best for organic farming.',
        discount: 'Organic Choice', 
        tagline: 'Soil Enricher',
        rating: 4.8,
        reviews: 267,
        category: 'fertilizers',
        brand: 'Godrej',
        solution: 'soil-health'
    },
    { 
        id: 'fert4',
        url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Seaweed Extract',
            longTitle: 'Liquid Seaweed Fertilizer - Natural Boost'
        }, 
        price: { mrp: 900, cost: 720, discount: '20%' },
        description: 'Natural liquid seaweed fertilizer for enhanced plant growth and immunity.',
        discount: 'Natural Power', 
        tagline: 'Ocean Nutrition',
        rating: 4.6,
        reviews: 178,
        category: 'fertilizers',
        brand: 'BASF',
        solution: 'plant-growth'
    },
    { 
        id: 'fert5',
        url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'DAP Fertilizer 50kg',
            longTitle: 'Di-Ammonium Phosphate - DAP 18-46-0'
        }, 
        price: { mrp: 1350, cost: 1250, discount: '7%' },
        description: 'High phosphorus fertilizer for root development and early plant growth.',
        discount: 'Farm Essential', 
        tagline: 'Root Booster',
        rating: 4.7,
        reviews: 312,
        category: 'fertilizers',
        brand: 'Coromandel',
        solution: 'root-development'
    },
    { 
        id: 'fert6',
        url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Urea 45kg Bag',
            longTitle: 'Urea Fertilizer - Nitrogen Rich'
        }, 
        price: { mrp: 350, cost: 266, discount: '24%' },
        description: 'High nitrogen content urea for vegetative growth. Essential for leafy crops.',
        discount: 'Best Price', 
        tagline: 'Nitrogen Rich',
        rating: 4.5,
        reviews: 423,
        category: 'fertilizers',
        brand: 'IFFCO',
        solution: 'plant-growth'
    },
    { 
        id: 'fert7',
        url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Potash MOP 50kg',
            longTitle: 'Muriate of Potash - Potassium Fertilizer'
        }, 
        price: { mrp: 950, cost: 850, discount: '11%' },
        description: 'High potassium fertilizer for fruit development and disease resistance.',
        discount: 'Quality Pick', 
        tagline: 'Fruit Booster',
        rating: 4.6,
        reviews: 156,
        category: 'fertilizers',
        brand: 'Tata Rallis',
        solution: 'higher-yield'
    },

    // ============ PESTICIDES ============
    { 
        id: 'pest1',
        url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Bio Pesticide',
            longTitle: 'Organic Bio Pesticide - Chemical Free'
        }, 
        price: { mrp: 600, cost: 480, discount: '20%' },
        description: 'Organic bio pesticide for safe and effective pest control. Protect crops naturally.',
        discount: 'Safe Farming', 
        tagline: 'Chemical Free',
        rating: 4.5,
        reviews: 194,
        category: 'pesticides',
        brand: 'Bayer',
        solution: 'pest-control'
    },
    { 
        id: 'pest2',
        url: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Neem Oil Spray',
            longTitle: 'Organic Neem Oil - Natural Pest Repellent'
        }, 
        price: { mrp: 450, cost: 360, discount: '20%' },
        description: 'Pure neem oil extract for organic pest management. Safe for vegetables and fruits.',
        discount: 'Natural Solution', 
        tagline: 'Organic Certified',
        rating: 4.7,
        reviews: 287,
        category: 'pesticides',
        brand: 'Godrej',
        solution: 'pest-control'
    },
    { 
        id: 'pest3',
        url: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fungicide Spray',
            longTitle: 'Copper Fungicide - Disease Control'
        }, 
        price: { mrp: 750, cost: 600, discount: '20%' },
        description: 'Effective fungicide for controlling fungal diseases in crops. Preventive and curative action.',
        discount: 'Disease Shield', 
        tagline: 'Fungus Fighter',
        rating: 4.6,
        reviews: 145,
        category: 'pesticides',
        brand: 'UPL',
        solution: 'disease-prevention'
    },
    { 
        id: 'pest4',
        url: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Insecticide Pro',
            longTitle: 'Professional Insecticide - Broad Spectrum'
        }, 
        price: { mrp: 850, cost: 680, discount: '20%' },
        description: 'Professional grade insecticide for controlling sucking and chewing pests.',
        discount: 'Pro Choice', 
        tagline: 'Broad Spectrum',
        rating: 4.5,
        reviews: 167,
        category: 'pesticides',
        brand: 'Syngenta',
        solution: 'pest-control'
    },
    { 
        id: 'pest5',
        url: 'https://images.unsplash.com/photo-1557844352-761f2565b576?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Herbicide Weedkiller',
            longTitle: 'Selective Herbicide - Weed Control'
        }, 
        price: { mrp: 520, cost: 416, discount: '20%' },
        description: 'Selective herbicide for controlling weeds without harming crops. Long lasting effect.',
        discount: 'Weed Free', 
        tagline: 'Selective Action',
        rating: 4.4,
        reviews: 123,
        category: 'pesticides',
        brand: 'BASF',
        solution: 'weed-management'
    },

    // ============ FRESH VEGETABLES ============
    { 
        id: 'veg1',
        url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Farm Fresh Carrots',
            longTitle: 'Farm Fresh Carrots - Premium Vegetables'
        },
        price: { mrp: 150, cost: 120, discount: '20%' },
        description: 'The best quality carrots handpicked for you. Fresh from the farm.',
        discount: 'Extra 20% Off', 
        tagline: 'Farm Fresh',
        rating: 4.7,
        reviews: 195,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg2',
        url: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Tomatoes',
            longTitle: 'Fresh Farm Tomatoes - Organic'
        }, 
        price: { mrp: 80, cost: 60, discount: '25%' },
        description: 'Fresh and juicy tomatoes, perfect for cooking and salads.',
        discount: 'Extra 25% Off', 
        tagline: 'Organic Fresh',
        rating: 4.4,
        reviews: 245,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg3',
        url: 'https://images.unsplash.com/photo-1518977676601-b53f82ber1fd?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Spinach',
            longTitle: 'Organic Fresh Spinach - Nutrient Rich'
        }, 
        price: { mrp: 60, cost: 45, discount: '25%' },
        description: 'Fresh organic spinach packed with iron and vitamins. Perfect for healthy meals.',
        discount: 'Healthy Choice', 
        tagline: 'Iron Rich',
        rating: 4.6,
        reviews: 167,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg4',
        url: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Potatoes 5kg',
            longTitle: 'Farm Fresh Potatoes - Premium Quality'
        }, 
        price: { mrp: 200, cost: 160, discount: '20%' },
        description: 'Premium quality potatoes perfect for all your cooking needs.',
        discount: 'Bulk Deal', 
        tagline: 'Kitchen Essential',
        rating: 4.5,
        reviews: 312,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg5',
        url: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Onions 5kg',
            longTitle: 'Premium Red Onions - Farm Fresh'
        }, 
        price: { mrp: 180, cost: 140, discount: '22%' },
        description: 'Fresh red onions, essential for Indian cooking. Long shelf life.',
        discount: 'Kitchen Must', 
        tagline: 'Daily Essential',
        rating: 4.6,
        reviews: 278,
        category: 'vegetables',
        brand: 'Local Farm'
    },

    // ============ FRESH FRUITS ============
    { 
        id: 'fruit1',
        url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Organic Apples',
            longTitle: 'Fresh Organic Apples - Premium Quality Fruits'
        }, 
        price: { mrp: 200, cost: 180, discount: '10%' },
        description: 'Farm fresh organic apples, healthy and tasty. Rich in vitamins.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        rating: 4.5,
        reviews: 228,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit2',
        url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Banana Bundle',
            longTitle: 'Fresh Banana Bundle - Rich in Potassium'
        }, 
        price: { mrp: 60, cost: 45, discount: '25%' },
        description: 'Fresh banana bundle, rich in potassium and energy.',
        discount: 'Fresh Deal', 
        tagline: 'Energy Booster',
        rating: 4.7,
        reviews: 298,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit3',
        url: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Oranges 1kg',
            longTitle: 'Juicy Oranges - Vitamin C Rich'
        }, 
        price: { mrp: 120, cost: 95, discount: '21%' },
        description: 'Fresh juicy oranges packed with Vitamin C. Perfect for juice.',
        discount: 'Citrus Fresh', 
        tagline: 'Immunity Booster',
        rating: 4.6,
        reviews: 187,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit4',
        url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Mangoes 1kg',
            longTitle: 'Alphonso Mangoes - King of Fruits'
        }, 
        price: { mrp: 350, cost: 280, discount: '20%' },
        description: 'Premium Alphonso mangoes, sweet and aromatic. Seasonal delight.',
        discount: 'Season Special', 
        tagline: 'King of Fruits',
        rating: 4.9,
        reviews: 456,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit5',
        url: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Grapes 500g',
            longTitle: 'Seedless Green Grapes - Premium'
        }, 
        price: { mrp: 180, cost: 145, discount: '19%' },
        description: 'Sweet seedless green grapes, perfect for snacking.',
        discount: 'Sweet Deal', 
        tagline: 'Seedless Variety',
        rating: 4.5,
        reviews: 198,
        category: 'fruits',
        brand: 'Local Farm'
    },

    // ============ DAIRY PRODUCTS ============
    { 
        id: 'dairy1',
        url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
        title: {
            shortTitle: 'Fresh Dairy Milk',
            longTitle: 'Fresh Dairy Milk - Pure & Protein Rich'
        }, 
        price: { mrp: 60, cost: 52, discount: '13%' },
        description: 'Pure and fresh dairy milk, protein-rich and perfect for daily nutrition.',
        discount: 'Best rate', 
        tagline: 'Protein-rich',
        rating: 4.9,
        reviews: 412,
        category: 'dairy',
        brand: 'Local Farm'
    },
    { 
        id: 'dairy2',
        url: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Paneer 200g',
            longTitle: 'Fresh Cottage Cheese - Protein Rich'
        }, 
        price: { mrp: 120, cost: 99, discount: '18%' },
        description: 'Fresh homemade paneer, soft and nutritious. Perfect for curries.',
        discount: 'Fresh Daily', 
        tagline: 'High Protein',
        rating: 4.7,
        reviews: 234,
        category: 'dairy',
        brand: 'Local Farm'
    },
    { 
        id: 'dairy3',
        url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Dahi Curd 400g',
            longTitle: 'Fresh Curd Dahi - Probiotic Rich'
        }, 
        price: { mrp: 50, cost: 42, discount: '16%' },
        description: 'Fresh probiotic-rich curd for better digestion. Made fresh daily.',
        discount: 'Daily Fresh', 
        tagline: 'Gut Healthy',
        rating: 4.6,
        reviews: 189,
        category: 'dairy',
        brand: 'Local Farm'
    },
    { 
        id: 'dairy4',
        url: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Pure Ghee 500ml',
            longTitle: 'Pure Desi Ghee - A2 Cow Ghee'
        }, 
        price: { mrp: 650, cost: 550, discount: '15%' },
        description: 'Pure A2 cow ghee made traditionally. Rich aroma and taste.',
        discount: 'Pure Quality', 
        tagline: 'Traditional',
        rating: 4.8,
        reviews: 345,
        category: 'dairy',
        brand: 'Local Farm'
    },

    // ============ GRAINS & CEREALS ============
    { 
        id: 'grain1',
        url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Premium Basmati Rice',
            longTitle: 'Premium Basmati Rice - Long Grain'
        }, 
        price: { mrp: 499, cost: 399, discount: '20%' },
        description: 'Premium long grain basmati rice. Aromatic and perfect for biryani.',
        discount: 'Best Quality', 
        tagline: 'Long Grain',
        rating: 4.7,
        reviews: 403,
        category: 'grains',
        brand: 'Local Farm'
    },
    { 
        id: 'grain2',
        url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Whole Wheat Atta 5kg',
            longTitle: 'Stone Ground Wheat Flour - 100% Whole Grain'
        }, 
        price: { mrp: 280, cost: 225, discount: '20%' },
        description: 'Stone ground whole wheat flour, perfect for soft rotis.',
        discount: 'Daily Essential', 
        tagline: 'Whole Grain',
        rating: 4.6,
        reviews: 278,
        category: 'grains',
        brand: 'Local Farm'
    },
    { 
        id: 'grain3',
        url: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Organic Dal 1kg',
            longTitle: 'Organic Toor Dal - Protein Rich'
        }, 
        price: { mrp: 180, cost: 150, discount: '17%' },
        description: 'Organic toor dal, high in protein. Perfect for daily meals.',
        discount: 'Protein Pack', 
        tagline: 'Organic',
        rating: 4.5,
        reviews: 234,
        category: 'grains',
        brand: 'Local Farm'
    },

    // ============ GROWTH PROMOTERS ============
    { 
        id: 'growth1',
        url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Growth Promoter',
            longTitle: 'Plant Growth Promoter - Boost Yield'
        }, 
        price: { mrp: 750, cost: 600, discount: '20%' },
        description: 'Advanced plant growth promoter to boost yield and plant health.',
        discount: 'Boost Yield', 
        tagline: 'High Performance',
        rating: 4.7,
        reviews: 212,
        category: 'fertilizers',
        brand: 'Dhanuka',
        solution: 'plant-growth'
    },
    { 
        id: 'growth2',
        url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Root Stimulator',
            longTitle: 'Root Growth Stimulator - Rooting Hormone'
        }, 
        price: { mrp: 550, cost: 440, discount: '20%' },
        description: 'Powerful root stimulator for strong root development in all crops.',
        discount: 'Root Power', 
        tagline: 'Strong Roots',
        rating: 4.6,
        reviews: 145,
        category: 'fertilizers',
        brand: 'BASF',
        solution: 'root-development'
    },
    { 
        id: 'growth3',
        url: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Micronutrient Mix',
            longTitle: 'Complete Micronutrient Fertilizer'
        }, 
        price: { mrp: 480, cost: 385, discount: '20%' },
        description: 'Complete micronutrient mix for correcting deficiencies in crops.',
        discount: 'Complete Nutrition', 
        tagline: 'Micro Power',
        rating: 4.5,
        reviews: 167,
        category: 'fertilizers',
        brand: 'Coromandel',
        solution: 'soil-health'
    },

    // ============ MORE SEEDS ============
    { 
        id: 'seed6',
        url: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Cucumber Seeds',
            longTitle: 'Hybrid Cucumber Seeds - High Yield'
        }, 
        price: { mrp: 150, cost: 120, discount: '20%' },
        description: 'Premium hybrid cucumber seeds with excellent germination. Disease resistant variety.',
        discount: 'Garden Pick', 
        tagline: 'Disease Resistant',
        rating: 4.6,
        reviews: 134,
        category: 'seeds',
        brand: 'Syngenta',
        solution: 'higher-yield'
    },
    { 
        id: 'seed7',
        url: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Okra Seeds Pack',
            longTitle: 'Lady Finger Okra Seeds - Premium'
        }, 
        price: { mrp: 130, cost: 99, discount: '24%' },
        description: 'High-quality okra seeds for continuous harvest. Tender and tasty pods.',
        discount: 'Summer Special', 
        tagline: 'Tender Pods',
        rating: 4.5,
        reviews: 156,
        category: 'seeds',
        brand: 'Bayer',
        solution: 'plant-growth'
    },
    { 
        id: 'seed8',
        url: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Cauliflower Seeds',
            longTitle: 'Snowball Cauliflower Seeds'
        }, 
        price: { mrp: 200, cost: 160, discount: '20%' },
        description: 'Premium cauliflower seeds producing large white heads. Cold tolerant variety.',
        discount: 'Winter Crop', 
        tagline: 'Large Heads',
        rating: 4.7,
        reviews: 98,
        category: 'seeds',
        brand: 'UPL',
        solution: 'higher-yield'
    },
    { 
        id: 'seed9',
        url: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Brinjal Seeds',
            longTitle: 'Hybrid Brinjal Seeds - Purple Long'
        }, 
        price: { mrp: 180, cost: 145, discount: '19%' },
        description: 'High-yielding brinjal variety with glossy purple fruits. Pest resistant.',
        discount: 'Top Pick', 
        tagline: 'Pest Resistant',
        rating: 4.4,
        reviews: 167,
        category: 'seeds',
        brand: 'Tata Rallis',
        solution: 'pest-control'
    },
    { 
        id: 'seed10',
        url: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Potato Seed Tubers',
            longTitle: 'Certified Potato Seed Tubers - Kufri'
        }, 
        price: { mrp: 800, cost: 650, discount: '19%' },
        description: 'Certified disease-free potato seed tubers. High yielding Kufri variety.',
        discount: 'Certified Seeds', 
        tagline: 'Disease Free',
        rating: 4.8,
        reviews: 234,
        category: 'seeds',
        brand: 'IFFCO',
        solution: 'higher-yield'
    },

    // ============ MORE VEGETABLES ============
    { 
        id: 'veg6',
        url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Capsicum',
            longTitle: 'Colorful Bell Peppers - Mixed Pack'
        }, 
        price: { mrp: 120, cost: 95, discount: '21%' },
        description: 'Fresh colorful capsicums - red, yellow, green. Rich in vitamins.',
        discount: 'Colorful Fresh', 
        tagline: 'Vitamin Rich',
        rating: 4.5,
        reviews: 145,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg7',
        url: 'https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Broccoli',
            longTitle: 'Organic Broccoli - Superfood'
        }, 
        price: { mrp: 90, cost: 70, discount: '22%' },
        description: 'Fresh organic broccoli, packed with nutrients. Perfect for healthy diet.',
        discount: 'Superfood', 
        tagline: 'Nutrient Dense',
        rating: 4.6,
        reviews: 123,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg8',
        url: 'https://images.unsplash.com/photo-1563252722-6434563a985f?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Cabbage',
            longTitle: 'Green Cabbage - Farm Fresh'
        }, 
        price: { mrp: 50, cost: 38, discount: '24%' },
        description: 'Fresh green cabbage, crispy and nutritious. Great for salads and cooking.',
        discount: 'Daily Fresh', 
        tagline: 'Crispy Fresh',
        rating: 4.4,
        reviews: 189,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg9',
        url: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Brinjal 500g',
            longTitle: 'Purple Brinjal - Farm Fresh'
        }, 
        price: { mrp: 60, cost: 45, discount: '25%' },
        description: 'Fresh purple brinjal, perfect for Indian cuisine. Farm fresh quality.',
        discount: 'Kitchen Essential', 
        tagline: 'Farm Fresh',
        rating: 4.5,
        reviews: 167,
        category: 'vegetables',
        brand: 'Local Farm'
    },
    { 
        id: 'veg10',
        url: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Beans 250g',
            longTitle: 'French Beans - Tender & Fresh'
        }, 
        price: { mrp: 70, cost: 55, discount: '21%' },
        description: 'Tender french beans, fresh from farm. Rich in fiber and protein.',
        discount: 'Fiber Rich', 
        tagline: 'Tender Fresh',
        rating: 4.6,
        reviews: 134,
        category: 'vegetables',
        brand: 'Local Farm'
    },

    // ============ MORE FRUITS ============
    { 
        id: 'fruit6',
        url: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Papaya',
            longTitle: 'Ripe Papaya - Digestive Fruit'
        }, 
        price: { mrp: 80, cost: 65, discount: '19%' },
        description: 'Fresh ripe papaya, great for digestion. Sweet and nutritious.',
        discount: 'Digestive Aid', 
        tagline: 'Enzyme Rich',
        rating: 4.5,
        reviews: 156,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit7',
        url: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Pomegranate',
            longTitle: 'Ruby Red Pomegranate - Antioxidant Rich'
        }, 
        price: { mrp: 200, cost: 160, discount: '20%' },
        description: 'Fresh pomegranates with ruby red seeds. Rich in antioxidants.',
        discount: 'Superfruit', 
        tagline: 'Antioxidant Rich',
        rating: 4.7,
        reviews: 189,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit8',
        url: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Pineapple',
            longTitle: 'Sweet Pineapple - Tropical Delight'
        }, 
        price: { mrp: 90, cost: 70, discount: '22%' },
        description: 'Sweet and juicy pineapple. Perfect for juice and fruit salads.',
        discount: 'Tropical Fresh', 
        tagline: 'Sweet & Juicy',
        rating: 4.6,
        reviews: 145,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit9',
        url: 'https://images.unsplash.com/photo-1449339079470-6882a236f24b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Watermelon',
            longTitle: 'Seedless Watermelon - Summer Refresher'
        }, 
        price: { mrp: 60, cost: 45, discount: '25%' },
        description: 'Sweet seedless watermelon, perfect summer refresher. Hydrating and delicious.',
        discount: 'Summer Special', 
        tagline: 'Hydrating',
        rating: 4.8,
        reviews: 312,
        category: 'fruits',
        brand: 'Local Farm'
    },
    { 
        id: 'fruit10',
        url: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Strawberries',
            longTitle: 'Fresh Strawberries - Sweet & Tangy'
        }, 
        price: { mrp: 250, cost: 199, discount: '20%' },
        description: 'Fresh juicy strawberries, sweet and tangy. Perfect for desserts.',
        discount: 'Berry Fresh', 
        tagline: 'Premium Berries',
        rating: 4.7,
        reviews: 234,
        category: 'fruits',
        brand: 'Local Farm'
    },

    // ============ MORE DAIRY ============
    { 
        id: 'dairy5',
        url: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Fresh Butter 200g',
            longTitle: 'Pure Butter - Farm Fresh'
        }, 
        price: { mrp: 120, cost: 99, discount: '18%' },
        description: 'Pure farm fresh butter, creamy and delicious. Made from fresh cream.',
        discount: 'Creamy Fresh', 
        tagline: 'Pure Dairy',
        rating: 4.7,
        reviews: 189,
        category: 'dairy',
        brand: 'Local Farm'
    },
    { 
        id: 'dairy6',
        url: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Flavored Lassi 500ml',
            longTitle: 'Sweet Lassi - Traditional Drink'
        }, 
        price: { mrp: 50, cost: 40, discount: '20%' },
        description: 'Traditional sweet lassi, refreshing and probiotic. Made fresh daily.',
        discount: 'Refreshing', 
        tagline: 'Traditional',
        rating: 4.6,
        reviews: 234,
        category: 'dairy',
        brand: 'Local Farm'
    },

    // ============ MORE GRAINS ============
    { 
        id: 'grain4',
        url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Masoor Dal 1kg',
            longTitle: 'Red Lentils Masoor Dal - Protein Pack'
        }, 
        price: { mrp: 150, cost: 125, discount: '17%' },
        description: 'Premium masoor dal, quick cooking and protein rich. Daily essential.',
        discount: 'Protein Rich', 
        tagline: 'Quick Cook',
        rating: 4.5,
        reviews: 189,
        category: 'grains',
        brand: 'Local Farm'
    },
    { 
        id: 'grain5',
        url: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Moong Dal 1kg',
            longTitle: 'Yellow Moong Dal - Easy Digest'
        }, 
        price: { mrp: 180, cost: 150, discount: '17%' },
        description: 'Light and easy to digest moong dal. Perfect for all age groups.',
        discount: 'Light & Healthy', 
        tagline: 'Easy Digest',
        rating: 4.6,
        reviews: 167,
        category: 'grains',
        brand: 'Local Farm'
    },
    { 
        id: 'grain6',
        url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Brown Rice 5kg',
            longTitle: 'Organic Brown Rice - Fiber Rich'
        }, 
        price: { mrp: 450, cost: 380, discount: '16%' },
        description: 'Organic brown rice, rich in fiber and nutrients. Healthy alternative.',
        discount: 'Healthy Choice', 
        tagline: 'Fiber Rich',
        rating: 4.7,
        reviews: 145,
        category: 'grains',
        brand: 'Local Farm'
    },

    // ============ MORE PESTICIDES ============
    { 
        id: 'pest6',
        url: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Aphid Controller',
            longTitle: 'Organic Aphid Control Spray'
        }, 
        price: { mrp: 380, cost: 299, discount: '21%' },
        description: 'Effective organic solution for controlling aphids on all crops.',
        discount: 'Organic Safe', 
        tagline: 'Aphid Free',
        rating: 4.5,
        reviews: 112,
        category: 'pesticides',
        brand: 'Godrej',
        solution: 'pest-control'
    },
    { 
        id: 'pest7',
        url: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Mite Controller',
            longTitle: 'Acaricide - Mite Control Solution'
        }, 
        price: { mrp: 550, cost: 440, discount: '20%' },
        description: 'Effective acaricide for controlling mites in vegetables and fruits.',
        discount: 'Mite Shield', 
        tagline: 'Mite Free',
        rating: 4.4,
        reviews: 98,
        category: 'pesticides',
        brand: 'Bayer',
        solution: 'pest-control'
    },

    // ============ FARM TOOLS ============
    { 
        id: 'tool1',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Garden Sprayer 16L',
            longTitle: 'Manual Pressure Sprayer - 16 Liter'
        }, 
        price: { mrp: 1200, cost: 950, discount: '21%' },
        description: 'High-quality manual pressure sprayer for pesticides and fertilizers. Durable and efficient.',
        discount: 'Farm Essential', 
        tagline: 'Heavy Duty',
        rating: 4.6,
        reviews: 234,
        category: 'tools',
        brand: 'Godrej'
    },
    { 
        id: 'tool2',
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Hand Trowel Set',
            longTitle: 'Gardening Hand Tools Set - 5 Pieces'
        }, 
        price: { mrp: 450, cost: 350, discount: '22%' },
        description: 'Complete set of hand tools for gardening. Includes trowel, fork, weeder, and more.',
        discount: 'Complete Set', 
        tagline: 'Garden Kit',
        rating: 4.5,
        reviews: 189,
        category: 'tools',
        brand: 'Local Farm'
    },
    { 
        id: 'tool3',
        url: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Pruning Shears Pro',
            longTitle: 'Professional Pruning Shears - Sharp Blade'
        }, 
        price: { mrp: 650, cost: 520, discount: '20%' },
        description: 'Professional pruning shears with sharp blades. Perfect for trimming and shaping plants.',
        discount: 'Pro Quality', 
        tagline: 'Sharp Cut',
        rating: 4.7,
        reviews: 156,
        category: 'tools',
        brand: 'Local Farm'
    },
    { 
        id: 'tool4',
        url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Drip Irrigation Kit',
            longTitle: 'Complete Drip Irrigation System'
        }, 
        price: { mrp: 2500, cost: 1999, discount: '20%' },
        description: 'Complete drip irrigation kit for water-efficient farming. Easy to install.',
        discount: 'Water Saver', 
        tagline: 'Efficient',
        rating: 4.8,
        reviews: 278,
        category: 'tools',
        brand: 'Local Farm'
    },
    { 
        id: 'tool5',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Soil Testing Kit',
            longTitle: 'Complete Soil Testing Kit - pH & NPK'
        }, 
        price: { mrp: 800, cost: 640, discount: '20%' },
        description: 'Easy-to-use soil testing kit for pH, nitrogen, phosphorus, and potassium levels.',
        discount: 'Smart Farming', 
        tagline: 'Test Kit',
        rating: 4.6,
        reviews: 145,
        category: 'tools',
        brand: 'Local Farm',
        solution: 'soil-health'
    },
    { 
        id: 'tool6',
        url: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Garden Hose 15m',
            longTitle: 'Heavy Duty Garden Hose - 15 Meters'
        }, 
        price: { mrp: 900, cost: 720, discount: '20%' },
        description: 'Durable garden hose with brass fittings. Kink-resistant and long-lasting.',
        discount: 'Durable', 
        tagline: 'Heavy Duty',
        rating: 4.5,
        reviews: 167,
        category: 'tools',
        brand: 'Local Farm'
    },
    { 
        id: 'tool7',
        url: 'https://images.unsplash.com/photo-1599686061202-6cc5c71afdc0?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Mulching Sheet',
            longTitle: 'Black Mulching Sheet - UV Stabilized'
        }, 
        price: { mrp: 550, cost: 440, discount: '20%' },
        description: 'UV stabilized mulching sheet for weed control and moisture retention.',
        discount: 'Weed Control', 
        tagline: 'UV Protected',
        rating: 4.4,
        reviews: 98,
        category: 'tools',
        brand: 'Local Farm',
        solution: 'weed-management'
    },
    { 
        id: 'tool8',
        url: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Knapsack Sprayer',
            longTitle: 'Battery Operated Knapsack Sprayer - 20L'
        }, 
        price: { mrp: 3500, cost: 2800, discount: '20%' },
        description: 'Battery operated knapsack sprayer for effortless spraying. Rechargeable battery.',
        discount: 'Power Spray', 
        tagline: 'Electric',
        rating: 4.7,
        reviews: 189,
        category: 'tools',
        brand: 'Syngenta'
    },
    { 
        id: 'tool9',
        url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Seed Spreader',
            longTitle: 'Hand Crank Seed Spreader'
        }, 
        price: { mrp: 750, cost: 599, discount: '20%' },
        description: 'Efficient hand crank seed spreader for even distribution. Adjustable settings.',
        discount: 'Even Spread', 
        tagline: 'Efficient',
        rating: 4.5,
        reviews: 112,
        category: 'tools',
        brand: 'Local Farm'
    },
    { 
        id: 'tool10',
        url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Gardening Gloves',
            longTitle: 'Heavy Duty Gardening Gloves - Pair'
        }, 
        price: { mrp: 250, cost: 199, discount: '20%' },
        description: 'Durable gardening gloves with grip. Protects hands while working.',
        discount: 'Protection', 
        tagline: 'Durable',
        rating: 4.6,
        reviews: 234,
        category: 'tools',
        brand: 'Local Farm'
    },

    // ============ ORGANIC PRODUCTS ============
    { 
        id: 'org1',
        url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Organic Compost 5kg',
            longTitle: 'Premium Organic Compost - Enriched'
        }, 
        price: { mrp: 400, cost: 320, discount: '20%' },
        description: 'Premium organic compost for enriching soil naturally. Chemical-free.',
        discount: 'Natural', 
        tagline: 'Soil Food',
        rating: 4.7,
        reviews: 234,
        category: 'organic',
        brand: 'Godrej',
        solution: 'soil-health'
    },
    { 
        id: 'org2',
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Neem Cake 5kg',
            longTitle: 'Organic Neem Cake Fertilizer'
        }, 
        price: { mrp: 350, cost: 280, discount: '20%' },
        description: 'Natural neem cake for pest control and soil enrichment. Organic certified.',
        discount: 'Dual Action', 
        tagline: 'Neem Power',
        rating: 4.6,
        reviews: 189,
        category: 'organic',
        brand: 'Local Farm',
        solution: 'pest-control'
    },
    { 
        id: 'org3',
        url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Bio Humus 3kg',
            longTitle: 'Organic Bio Humus - Living Soil'
        }, 
        price: { mrp: 500, cost: 400, discount: '20%' },
        description: 'Living bio humus with beneficial microorganisms. Boosts soil health.',
        discount: 'Living Soil', 
        tagline: 'Microbe Rich',
        rating: 4.8,
        reviews: 156,
        category: 'organic',
        brand: 'Coromandel',
        solution: 'soil-health'
    },
    { 
        id: 'org4',
        url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Panchagavya 1L',
            longTitle: 'Organic Panchagavya - Growth Booster'
        }, 
        price: { mrp: 300, cost: 240, discount: '20%' },
        description: 'Traditional panchagavya for organic farming. Boosts immunity and growth.',
        discount: 'Traditional', 
        tagline: 'Ancient Wisdom',
        rating: 4.5,
        reviews: 123,
        category: 'organic',
        brand: 'Local Farm',
        solution: 'plant-growth'
    },
    { 
        id: 'org5',
        url: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Bone Meal 2kg',
            longTitle: 'Organic Bone Meal - Phosphorus Rich'
        }, 
        price: { mrp: 280, cost: 225, discount: '20%' },
        description: 'Organic bone meal for root development and flowering. Slow-release nutrients.',
        discount: 'Root Power', 
        tagline: 'Phosphorus',
        rating: 4.6,
        reviews: 145,
        category: 'organic',
        brand: 'Local Farm',
        solution: 'root-development'
    },
    { 
        id: 'org6',
        url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Jeevamrut 5L',
            longTitle: 'Natural Jeevamrut - Microbial Culture'
        }, 
        price: { mrp: 450, cost: 360, discount: '20%' },
        description: 'Traditional jeevamrut microbial culture for healthy plant growth.',
        discount: 'Microbial', 
        tagline: 'Living Culture',
        rating: 4.7,
        reviews: 167,
        category: 'organic',
        brand: 'Local Farm',
        solution: 'plant-growth'
    },
    { 
        id: 'org7',
        url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Coco Peat 5kg',
            longTitle: 'Organic Coco Peat Block - Growing Medium'
        }, 
        price: { mrp: 250, cost: 199, discount: '20%' },
        description: 'Premium coco peat for seedlings and hydroponics. Excellent water retention.',
        discount: 'Grow Medium', 
        tagline: 'Coco Fiber',
        rating: 4.5,
        reviews: 198,
        category: 'organic',
        brand: 'Local Farm',
        solution: 'plant-growth'
    },
    { 
        id: 'org8',
        url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Wood Ash 2kg',
            longTitle: 'Natural Wood Ash - Potassium Source'
        }, 
        price: { mrp: 150, cost: 120, discount: '20%' },
        description: 'Natural wood ash rich in potassium and minerals. Great for soil amendment.',
        discount: 'Natural', 
        tagline: 'Mineral Rich',
        rating: 4.4,
        reviews: 89,
        category: 'organic',
        brand: 'Local Farm',
        solution: 'soil-health'
    },
    { 
        id: 'org9',
        url: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Trichoderma 500g',
            longTitle: 'Trichoderma Bio-fungicide'
        }, 
        price: { mrp: 380, cost: 299, discount: '21%' },
        description: 'Beneficial fungus for controlling soil-borne diseases. Organic certified.',
        discount: 'Bio Shield', 
        tagline: 'Disease Guard',
        rating: 4.6,
        reviews: 145,
        category: 'organic',
        brand: 'BASF',
        solution: 'disease-prevention'
    },
    { 
        id: 'org10',
        url: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop', 
        title: {
            shortTitle: 'Azospirillum 1kg',
            longTitle: 'Azospirillum Bio-fertilizer'
        }, 
        price: { mrp: 320, cost: 260, discount: '19%' },
        description: 'Nitrogen-fixing bacteria for enhanced plant growth. Reduces fertilizer need.',
        discount: 'Bio Nitrogen', 
        tagline: 'N-Fixer',
        rating: 4.5,
        reviews: 112,
        category: 'organic',
        brand: 'Coromandel',
        solution: 'plant-growth'
    }
]

module.exports = products;
