import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import coinImage from '../assets/images/coinCollector3000.svg';
import dataWizard from '../assets/images/dataWizard.png'


function Project(props) {
    var items = [
        {
            name: "",
            description: "This project uses BootStrap, MySQL, Node",
            img: coinImage,
            deployedApp: 'https://coin-tracker3000-912fb443b4e5.herokuapp.com/',
            githubRepo: "https://github.com/Peterksharma/Coin-Tracker"
        },
        {
            name: "",
            description: "Hello World!",
            img: dataWizard,
            deployedApp: 'https://peterksharma-structure-wizard-app-v4gp2f.streamlit.app/',
            githubRepo: "https://github.com/Peterksharma/Structure-wizard"
        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #4",
            description: "Hello World!"
        }
    ]

    const projectStyle = {
        opacity: '90%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        margin: 'auto',
        zIndex: '4',
    }

    return (
        <div style={projectStyle}>
            <Carousel
                fullHeightHover={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: '#1282A2',
                        borderRadius: 2,
                        color: 'white',
                        margin: '0 30px',
                        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)'
                    }
                }}
                navButtonsWrapperProps={{
                    style: {
                        bottom: '0',
                        top: 'unset',
                    }
                }}
                // style={{

                // }}
                interval={10000}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    const paperStyle = {
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '.75rem solid #1A181B',
        borderRadius: '2%'
    };

    const deployedLink = {
        backgroundColor: '#C5E0D8',
        color: '#1A181B',
    }
    const gitHubLink = {
        backgroundColor: '#1282A2',
        width: '100%',
    }

    return (
        <Paper style={paperStyle}>
            <h2 style={{ fontSize: '2em' }}>{props.item.name}</h2>
            <img src={props.item.img} alt={props.item.name} style={{ width: 'auto', height: '60%', border: '.75rem solid #1A181B', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)' }} />
            <p style={{ fontSize: '1.2em' }}>{props.item.description}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href={props.item.deployedApp} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button style={deployedLink} className="CheckButton" variant="contained" size="large">
                    Deloyed Link
                </Button>
            </a>
            <a href={props.item.githubRepo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button style={gitHubLink} className="CheckButton" variant="contained" size="large">
                    Github Repo
                </Button>
            </a>
            </div>
        </Paper>
    )
}

export default Project;
