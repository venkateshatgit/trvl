import React from 'react'
import './custom-button.styles.scss'

function CustomButton({children, ...otherProps}) {
    return (
        <button className={`custom-button 
            ${children === "Sign in with Google" ? "google-sign-in": ""}`} 
            {...otherProps} >
                {children}
        </button>
    )
}

export default CustomButton