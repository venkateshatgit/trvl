import React, {useContext} from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assets/4.3 crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { CartContext } from '../../context/cart.context';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



function Header() {

    const {currUser, setCurrUser} = useContext(UserContext);
    const {cartIsOpen} = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrUser(null);
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