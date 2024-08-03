import './cart-icon.styles.scss';
import {ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context';

function CartIcon() {
    const {cartIsOpen, setCartIsOpen, cartItems, cartCount} = useContext(CartContext);

    return (
        <div className='cart-icon-container'  
            onClick={() => setCartIsOpen(!cartIsOpen)}
        >
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>
                {cartCount}
            </span>
        </div>
    )
}

export default CartIcon