import React, { useContext } from 'react'
import './product-card.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cart.context';

function ProductCard({product}) {
    const {name, price, imageUrl} = product;

    const {addItemToCart} = useContext(CartContext);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType='inverted' onClick={() => addItemToCart(product)}>Add to crat</CustomButton>
        </div>
    )
}

export default ProductCard