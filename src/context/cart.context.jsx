import { createContext, useState } from "react";


export const CartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
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

export const CartProvider = ({children}) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {cartIsOpen, setCartIsOpen, cartItems, addItemToCart};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}