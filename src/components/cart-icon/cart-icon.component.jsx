import './cart-icon.styles.scss';
import {ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartIsOpen } from '../../store/cart/cart.action';

function CartIcon() {
    const {cartIsOpen, cartItems, cartCount} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className='cart-icon-container'  
            onClick={() => dispatch(setCartIsOpen(!cartIsOpen))}
        >
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>
                {cartCount}
            </span>
        </div>
    )
}

export default CartIcon