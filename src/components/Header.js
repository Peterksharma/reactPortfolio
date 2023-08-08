import React from 'react'
import Navigation from './Navigation';

function Header() {
    const headerStyle = {
        height: '10vh',
        borderLeft: '15vw solid transparent',
        borderRight: '85vw solid transparent',
        borderTop: '10vh solid #1A181B',
        zIndex: '2',
        position: 'absolute',
        top: '0%',        
    }

    return (
        <div style={headerStyle}>
            <Navigation />
        </div>
    )
}



export default Header;

