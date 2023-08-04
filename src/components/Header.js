import React from 'react'
import Navigation from './Navigation';

function Header() {
    const headerTest = 'I am a test header'
    return (
        <div>
            
            <h1>{headerTest}</h1>
            <Navigation />
        </div>
    )
}



export default Header;