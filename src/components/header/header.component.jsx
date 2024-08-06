import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assets/4.3 crown.svg';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrUser } from '../../store/user/user.action';



function Header() {
    const currUser = useSelector((state) => state.user.currUser);
    const {cartIsOpen} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const signOutHandler = async () => {
        await signOutUser();
        dispatch(setCurrUser(null));
    }

    return (
        <div className="header">
            <Link to={"/"} className='logo-container'>
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link to={"/shop"} className="option">
                    SHOP
                </Link>
                <Link className="option">
                    CONTACT
                </Link>

                {
                    currUser ? (
                        <span onClick={() => signOutHandler()}>SIGN OUT</span>
                    ):(
                        <Link to={"/auth"} className="option">
                            <span>SIGN IN</span>
                        </Link>
                    )
                }

                <CartIcon/>
                
                <CartDropdown style={{
                    display: `${cartIsOpen ? 'flex' : 'none'}`}}
                />
            </div>

                
        </div>
    )
}

export default Header