import React from 'react'
import './menu-item.style.scss'
import { useNavigate } from 'react-router-dom'

function MenuItem({ title, imageUrl, size, route }) {

    const navigate = useNavigate();
    const navigateHandler = () => navigate(route);

    return (
        <div className={`${size} menu-item`} onClick={navigateHandler}>
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