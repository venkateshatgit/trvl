import { CART_ACTION_TYPES } from "./cart.types";


const INITIAL_STATE = {
    cartIsOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}


// reducer
export const cartReducer = (state=INITIAL_STATE, action) => {
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
            return state;
    }
}
