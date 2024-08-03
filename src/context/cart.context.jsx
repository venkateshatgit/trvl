import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer, useState } from "react";


export const CartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});



const INITIAL_STATE = {
    cartIsOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CART_ACTION_TYPES = {
    'SET_CART_IS_OPEN': 'SET_CART_IS_OPEN',
    'SET_CART_ITEMS': 'SET_CART_ITEMS' 
}


// reducer
const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return {
                ...state,
                cartIsOpen: payload
            }
        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartCount: payload.newCartCount,
                cartItems: payload.newCartItems,
                cartTotal: payload.newCartTotal
            }

        default: 
            return new Error(`Unhandled type of action, received acction: ${type} in cartReducer `);
    }
}


export const defaultCartItemField = {
    id: '',
    imageUrl: '',
    name: '',
    price: 0,
    quantity: 1
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


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const {cartIsOpen,  cartItems, cartCount, cartTotal} = state;

    const setCartIsOpen = (boolValue) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_IS_OPEN,
            payload: boolValue
        });
    }

    const setCartItems = (newCartItems, newCartCount, newCartTotal) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: { newCartItems, newCartCount, newCartTotal }
        })
    }


    const addItemToCart = (productToAdd) => {
        setCartItems(
            addCartItem(cartItems, productToAdd), 
            cartCount+1, 
            cartTotal+productToAdd.price
        );
    }

    const removeItemFromCart = (productToRemove, decrement=1) => {
        setCartItems(
            removeCartItem(cartItems, productToRemove, decrement), 
            cartCount-decrement,
            cartTotal-(productToRemove.price*decrement)
        );
    }

    const value = {cartIsOpen, setCartIsOpen, cartItems, addItemToCart, removeItemFromCart, cartCount, cartTotal};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}