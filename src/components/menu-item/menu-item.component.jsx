import React from 'react'
import './menu-item.style.scss'

function MenuItem({ title, imageUrl, size }) {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-img"
                style={{
                    background: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem