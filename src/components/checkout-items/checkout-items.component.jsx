import { useDispatch, useSelector } from 'react-redux';
import './checkout-items.styles.scss';
import React from 'react'
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';

function CheckoutItems({item}) {
    const {cartItems, cartCount, cartTotal} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className='checkout-item-container'>
            <div className='.image-container'>
                <img src={item.imageUrl} />
            </div>
            <span className='name'>{item.name}</span>
            
            
            <div className='quantity'>
                <span className='arrow' onClick={() => dispatch(removeItemFromCart(cartItems, cartCount, cartTotal, item))}>&#00060;</span>
                <span className='value'>{item.quantity}</span>
                <span className='arrow' onClick={() => dispatch(addItemToCart(cartItems, cartCount, cartTotal, item))}>&#00062;</span>
            </div>
            
            <span className='price'>{item.price}</span>
            <span className='remove-button' onClick={() => dispatch(removeItemFromCart(cartItems, cartCount, cartTotal, item, item.quantity))}>&#10005;</span>
        </div>
    )
}

export default CheckoutItems