import React, { useState } from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


function ShopPage() {
    const [collections, setcollections] = useState(SHOP_DATA)
    return (
        <div>
            {collections.map(({id, ...otherItems}) => (
                <div>
                    <CollectionPreview key={id} {...otherItems}/>
                </div>
            ))}
        </div>
    )
}

export default ShopPage