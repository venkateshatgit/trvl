import React, { useContext, useEffect, useState } from 'react'
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { CategoriesConext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';


function Category() {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesConext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
            <h1>{category.toUpperCase()}</h1>
            <div className='category-container-products'>
                {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                }
            </div>
        </div>
    )
}

export default Category