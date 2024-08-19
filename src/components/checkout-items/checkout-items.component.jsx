import { useDispatch, useSelector } from 'react-redux';
import './checkout-items.styles.scss';
import React from 'react'
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.slice';

function CheckoutItems({product}) {
    const {cartItems, cartCount, cartTotal} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className='checkout-item-container'>
            <div className='.image-container'>
                <img src={product.imageUrl} />
            </div>
            <span className='name'>{product.name}</span>
            
            
            <div className='quantity'>
                <span className='arrow' onClick={() => dispatch(removeItemFromCart({cartItems, cartCount, cartTotal, product}))}>&#00060;</span>
                <span className='value'>{product.quantity}</span>
                <span className='arrow' onClick={() => dispatch(addItemToCart({cartItems, cartCount, cartTotal, product}))}>&#00062;</span>
            </div>
            
            <span className='price'>{product.price}</span>
            <span className='remove-button' onClick={() => dispatch(removeItemFromCart({cartItems, cartCount, cartTotal, product, decrement:product.quantity}))}>&#10005;</span>
        </div>
    )
}

export default CheckoutItems