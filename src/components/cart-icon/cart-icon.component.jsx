import './cart-icon.styles.scss';
import {ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context';

function CartIcon() {
    const {cartIsOpen, setCartIsOpen, cartItems} = useContext(CartContext);

    return (
        <div className='cart-icon-container'  
            onClick={() => setCartIsOpen(!cartIsOpen)}
        >
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>
                {cartItems.reduce((reducer, item) => reducer+item.quantity, 0)}
            </span>
        </div>
    )
}

export default CartIcon