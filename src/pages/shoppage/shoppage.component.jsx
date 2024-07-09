import React, { useContext, useState } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { ProductsConext } from '../../context/product.context'
import ProductCard from '../../components/product-card/product-card.component';
import './shoppage.style.scss';

function ShopPage() {
    const {products} = useContext(ProductsConext);

    return (
        <div className="products-container">
            {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ShopPage