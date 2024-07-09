import React from 'react'
import './cart-item.styles.scss';

function CartItem({item}) {
  return (
    <div className='cart-item-container'>
        <img src={item.imageUrl} />
        <div className="item-detail">
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity}*${item.price}</span>
        </div>
    </div>
  )
}

export default CartItem