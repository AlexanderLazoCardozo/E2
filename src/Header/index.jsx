import React from 'react'
import './style.css'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="container">
            <div className="link">
                <Link to="/Heros">Heros</Link>
            </div>
            <div className="link">
                <Link to="/NombresR">NombresRandom</Link>
            </div>
        </div>
    )
}

export default Header
