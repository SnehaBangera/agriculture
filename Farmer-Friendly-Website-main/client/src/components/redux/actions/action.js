export const getProducts=()=>async(dispatch)=>{
    try{
        const data= await fetch("/getproducts",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        const res=await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    }catch(error){

        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}

// Add product to cart (local state)
export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

// Remove product from cart
export const removeFromCart = (productId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId
    }
}

// Update cart quantity
export const updateCartQuantity = (productId, quantity) => {
    return {
        type: "UPDATE_CART_QUANTITY",
        payload: { productId, quantity }
    }
}

// Clear cart
export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}