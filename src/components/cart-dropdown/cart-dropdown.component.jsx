import React, { useContext } from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-item/cart-item.component'

function CartDropdown({...otherProps}) {

    const {cartItems} = useContext(CartContext);
    console.log(cartItems)

    return (
        <div className='cart-dropdown-container' {...otherProps}>
            <div className="cart-items">
                {cartItems.map(item => <CartItem item={item}/>)}
            </div>
            <CustomButton>GO TO CHECK OUT</CustomButton>
        </div>
    )
}

export default CartDropdown