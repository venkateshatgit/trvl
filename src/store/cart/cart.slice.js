import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    cartIsOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
                {...cartItem, quantity: cartItem.quantity+1}
                :cartItem
            );
    }

    return [...cartItems, {...productToAdd, quantity:1}];
}

const removeCartItem = (cartItems, productToRemove, decrement) => {
    if(decrement === productToRemove.quantity || productToRemove.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id === productToRemove.id ? false : true);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
        {...cartItem, quantity : cartItem.quantity-1}
        :cartItem
    );
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers:{
        setCartIsOpen(state, action){
            state.cartIsOpen = action.payload
        },

        addItemToCart(state, action){
            console.log(action);
            const {cartItems, cartCount, cartTotal, product} = action.payload;
            state.cartItems = addCartItem(cartItems, product);
            state.cartCount = cartCount+1;
            state.cartTotal = cartTotal+product.price;
        },

        removeItemFromCart(state, action){
            console.log(action);
            const {cartItems, cartCount, cartTotal, product, decrement=1} = action.payload;
            state.cartItems = removeCartItem(cartItems, product, decrement);
            state.cartCount = cartCount-decrement;
            state.cartTotal = cartTotal-(product.price*decrement);
        }
    }
})

export const {
    setCartIsOpen,
    addItemToCart, 
    removeItemFromCart
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
