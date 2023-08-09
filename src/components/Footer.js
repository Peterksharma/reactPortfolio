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
        zIndex: '10'
    }


    const iconSize = {
        fontSize: '300%',
        // margin: '0 1%',
        zIndex: '11',
        color: '#1282A2',
        textShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    }

    const iconHoverStyle = {
        '&:hover': {
            color: '#C5E0D8',
        }
    }

    const footerLinkStyle = {
        position: "absolute",
        display: 'flex',
        gap: '20%',
        right: '4vw',
        top: '3vh'
    }
    return (
        <div style={footerStyle}>
            <div style={footerLinkStyle}>
                <a href="http://github.com/peterksharma" target='_blank' rel="noopener noreferrer">
                    <GitHubIcon sx={{ ...iconHoverStyle, ...iconSize }} />
                </a>
                <a href="http://linkedin.com/in/Peterksharma" target='_blank' rel="noopener noreferrer">
                    <LinkedInIcon sx={{ ...iconHoverStyle, ...iconSize }} />
                </a>
                <a href="mailto:peterksharma@gmail.com" target='_blank' rel="noopener noreferrer">
                    <EmailIcon sx={{ ...iconHoverStyle, ...iconSize }} />
                </a>
            </div>
        </div>
    )
}

export default Footer;