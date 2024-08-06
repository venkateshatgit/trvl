import { useSelector } from 'react-redux';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import './checkoutpage.styles.scss';

import React, { useContext } from 'react'

function CheckoutPage() {
    const {cartItems, cartTotal} = useSelector((state) => state.cart);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => {
                return (
                    <CheckoutItems key={item.id} item={item}/>
                )
            })}
            <span className='total'>Total: {cartTotal}</span>
        </div>
    )
}

export default CheckoutPage;