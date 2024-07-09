import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

import React from 'react'

const CartDropdow = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">

        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  )
}

export default CartDropdow