import './category-preview.styles.scss';
import React from 'react'
import ProductCard from '../product-card/product-card.component';
import { Link, useParams } from 'react-router-dom';

function CategoryPreview({title, products}){
  return (
    <div className='category-preview-container'>
        <h2>
            <span className='title'>
            <Link to={`/shop/${title.toLowerCase()}`} className='link'>
              {title.toUpperCase()}
            </Link>  
            </span>
        </h2>
        <div className="preview">
        {products
            .filter((_, index) => index < 4)
            .map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    </div>
  )
}

export default CategoryPreview;