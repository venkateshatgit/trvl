import React from 'react'
import './custom-button.styles.scss'

function CustomButton({children, buttonType, ...otherProps}) {
    return (
        <button className={`custom-button ${buttonType}`} 
            {...otherProps} >
                {children}
        </button>
    )
}

export default CustomButton