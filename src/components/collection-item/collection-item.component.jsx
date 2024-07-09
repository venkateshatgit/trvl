import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

function CollectionItem({imageUrl, name, price }) {
    return (
        <div className="collection-item">
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType={"inverted"}>Add to card</CustomButton>
        </div>
    )
}

export default CollectionItem