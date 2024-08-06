import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartIsOpen } from '../../store/cart/cart.action';

function CartDropdown({...otherProps}) {

    const {cartItems} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate("/checkout");
        dispatch(setCartIsOpen(false))
    }

    return (
        <div className='cart-dropdown-container' {...otherProps}>
            <div className="cart-items">
                {
                    cartItems.map((item, index) => <CartItem item={item} key={index}/>)
                }  
            </div>
            <CustomButton onClick={goToCheckout}>
                GO TO CHECK OUT
            </CustomButton> 
        </div>
    )
}

export default CartDropdown