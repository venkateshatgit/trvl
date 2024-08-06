import { CART_ACTION_TYPES } from "./cart.types";


export const setCartIsOpen = (boolValue) => {
    return ({
        type: CART_ACTION_TYPES.SET_CART_IS_OPEN,
        payload: boolValue
    })
}


export const setCartItems = (newCartItems, newCartCount, newCartTotal) => {
    return ({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: { newCartItems, newCartCount, newCartTotal }
    })
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


export const addItemToCart = (cartItems, cartCount, cartTotal, productToAdd) => {

    return setCartItems(
        addCartItem(cartItems, productToAdd), 
        cartCount+1, 
        cartTotal+productToAdd.price
    )
}

export const removeItemFromCart = (cartItems, cartCount, cartTotal, productToRemove, decrement=1) => {

    return setCartItems(
        removeCartItem(cartItems, productToRemove, decrement), 
        cartCount-decrement,
        cartTotal-(productToRemove.price*decrement)
    )
}
