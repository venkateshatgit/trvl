import './categories-preview.styles.scss';
import React, { Fragment } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';

function CategoriesPreview() {
    const categoriesMap = useSelector((state) => state.categories.categoriesMap)
    
    return (
        <Fragment>
        {
            Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>
            })
        }
        </Fragment>
    )
}

export default CategoriesPreview