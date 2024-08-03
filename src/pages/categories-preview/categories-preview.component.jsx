import './categories-preview.styles.scss';
import React, { Fragment, useContext } from 'react'
import { CategoriesConext } from '../../context/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component';

function CategoriesPreview() {
    const {categoriesMap} = useContext(CategoriesConext);
    
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