import { createContext, useState } from "react";


export const CartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {}
});

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

    if(decrement === 0 || productToRemove.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id === productToRemove.id ? false : true);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
        {...cartItem, quantity : cartItem.quantity-1}
        :cartItem
    );
}

export const CartProvider = ({children}) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd ));
    }

    const removeItemFromCart = (productToRemove, decrement=0) => {
        setCartItems(removeCartItem(cartItems, productToRemove, decrement));
    }

    const value = {cartIsOpen, setCartIsOpen, cartItems, addItemToCart, removeItemFromCart};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}