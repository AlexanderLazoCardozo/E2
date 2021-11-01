import React from 'react'

import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/Heros">Heros</Link>
            </div>
            <div>
                <Link to="/NombresR">NombresRandom</Link>
            </div>
        </div>
    )
}

export default Header
