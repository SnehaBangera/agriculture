// Load cart from localStorage
const loadCartFromStorage = () => {
    try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    } catch {
        return [];
    }
};

const initialState = {
    cartItems: loadCartFromStorage()
};

export const cartReducer = (state = initialState, action) => {
    let updatedCart;
    
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                // Update quantity if item exists
                updatedCart = state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            } else {
                // Add new item
                updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
            }
            
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };
            
        case "REMOVE_FROM_CART":
            updatedCart = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };
            
        case "UPDATE_CART_QUANTITY":
            updatedCart = state.cartItems.map(item =>
                item.id === action.payload.productId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };
            
        case "CLEAR_CART":
            localStorage.removeItem('cart');
            return { ...state, cartItems: [] };
            
        default:
            return state;
    }
};
