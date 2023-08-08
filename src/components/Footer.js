import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
    const footerStyle = {
        position: 'absolute',
        bottom: '0%',
        height: '10vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeft: '85vw solid transparent',
        borderRight: '15vw solid transparent',
        borderBottom: '10vh solid #1A181B',
        zIndex:'10'
    }


    const iconSize = {
        fontSize: '40px',
        margin: '20px 30px',
        zIndex: '11',
        color: '#1282A2',
        textShadow: '-2px 2px 4px rgb(0, 0, 0)'
    }

    const footerLinkStyle = {
        position: "absolute",
        display: 'flex',
        right: '-43px',
        top: '5px'
    }
    return (
        <div style={footerStyle}>
            <div style={footerLinkStyle}>
            <a href="http://github.com/peterksharma" target='_blank' rel="noopener noreferrer">
                <GitHubIcon style={iconSize}/>
            </a>
            <a href="http://linkedin.com/in/Peterksharma" target='_blank' rel="noopener noreferrer">
            <LinkedInIcon style={iconSize} />
            </a>
            <a href="mailto:peterksharma@gmail.com" target='_blank' rel="noopener noreferrer">
            <EmailIcon style={iconSize} />
            </a>
            </div>
        </div>
    )
}

export default Footer;