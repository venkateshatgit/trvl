import { CartContext } from '../../context/cart.context';
import './checkout-items.styles.scss';
import React, { useContext } from 'react'

function CheckoutItems({item}) {
    const {addItemToCart, removeItemFromCart} = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='.image-container'>
                <img src={item.imageUrl} />
            </div>
            <span className='name'>{item.name}</span>
            
            
            <div className='quantity'>
                <span className='arrow' onClick={() => removeItemFromCart(item, 1)}>&#00060;</span>
                <span className='value'>{item.quantity}</span>
                <span className='arrow' onClick={() => addItemToCart(item)}>&#00062;</span>
            </div>
            
            <span className='price'>{item.price}</span>
            <span className='remove-button' onClick={() => removeItemFromCart(item)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItems