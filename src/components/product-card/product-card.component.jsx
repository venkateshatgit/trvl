import React from 'react'
import './product-card.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';

function ProductCard({product}) {
    const {name, price, imageUrl} = product;
    const {cartItems, cartCount, cartTotal} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType='inverted' onClick={() => dispatch(addItemToCart(cartItems, cartCount, cartTotal, product))}>Add to crat</CustomButton>
        </div>
    )
}

export default ProductCard