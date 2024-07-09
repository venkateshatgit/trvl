import React from 'react'
import './product-card.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

function ProductCard({product}) {
    const {name, price, imageUrl} = product;
    console.log(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType='inverted'>Add to crat</CustomButton>
        </div>
    )
}

export default ProductCard