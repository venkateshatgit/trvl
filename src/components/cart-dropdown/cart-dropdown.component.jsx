import React, { useContext } from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-item/cart-item.component'
import { Link, useNavigate } from 'react-router-dom';

function CartDropdown({...otherProps}) {

    const {cartItems} = useContext(CartContext);
    const {setCartIsOpen} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate("/checkout");
        setCartIsOpen(false);
    }

    return (
        <div className='cart-dropdown-container' {...otherProps}>
            <div className="cart-items">
                {cartItems.map(item => <CartItem item={item}/>)}
            </div>
            <CustomButton onClick={goToCheckout}>
                GO TO CHECK OUT
            </CustomButton> 
        </div>
    )
}

export default CartDropdown