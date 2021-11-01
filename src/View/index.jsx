import React from 'react'

import Header from '../Header'

const View = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default View
