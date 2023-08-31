import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import coinImage from '../assets/images/coinCollector3000.png';
import dataWizard from '../assets/images/dataWizard.png'
import elevate from '../assets/images/elevate.png'
import portfolio from '../assets/images/portfolio.png'
import furryfeet from '../assets/images/furryFeet.png'



function Project(props) {
    var items = [
        {
            name: "",
            description: "",
            img: furryfeet,
            deployedApp: 'https://furryfeetfinal-db9205523da5.herokuapp.com/',
            githubRepo: "https://github.com/Peterksharma/ecommerce",
            technologies: [
                {
                    label: "HTML",
                    color: "239120",
                    logoColor: "white"
                },
                {
                    label: "CSS",
                    color: "2965F1",
                    logoColor: "white"
                },
                {
                    label: "JavaScript",
                    color: "323330",
                    logoColor: "F7DF1E"
                },
                {
                    label: "React",
                    color: "61DAFB",
                    logoColor: "20232A"
                },
                {
                    label: "GraphQL",
                    color: "E10098",
                    logoColor: "white"
                },
                {
                    label: "MongoDB",
                    color: "4DB33D",
                    logoColor: "white"
                },
                {
                    label: "ThreeJs",
                    color: "8AC64A",
                    logoColor: "black"
                }
            ]


        },
        {
            name: "",
            description: "",
            img: elevate,
            githubRepo: "https://github.com/Peterksharma/Elevate-Your-Recipe",
            technologies: [
                {
                    label: "HTML",
                    color: "239120",
                    logoColor: "white"
                },
                {
                    label: "JavaScript",
                    color: "323330",
                    logoColor: "F7DF1E"
                }
            ]


        },
        {
            name: "",
            description: "",
            img: coinImage,
            deployedApp: 'https://coin-tracker3000-912fb443b4e5.herokuapp.com/',
            githubRepo: "https://github.com/Peterksharma/Coin-Tracker",
            technologies: [
                {
                    label: "HTML",
                    color: "239120",
                    logoColor: "white"
                },
                {
                    label: "JavaScript",
                    color: "323330",
                    logoColor: "F7DF1E"
                },
                {
                    label: "Express.js",
                    color: "404D59",
                    logoColor: 'black'
                },
                {
                    label: "Node.js",
                    color: "43853D",
                    logoColor: 'white'
                }
            ]
        },
        {
            name: "",
            description: "",
            img: dataWizard,
            deployedApp: 'https://peterksharma-structure-wizard-app-v4gp2f.streamlit.app/',
            githubRepo: "https://github.com/Peterksharma/Structure-wizard",
            technologies: [
                {
                    label: "Python",
                    color: "14354C",
                    logoColor: "White"
                },
                {
                    label: "ChatGPT",
                    color: "74aa9c",
                    logoColor: "White"
                },
            ]
        },
        {
            name: "",
            description: "",
            img: portfolio,
            deployedApp: 'http://www.petersharma.dev',
            githubRepo: "https://github.com/Peterksharma/portfolio",
            technologies: [
                {
                    label: "HTML",
                    color: "239120",
                    logoColor: "white"
                },
                {
                    label: "JavaScript",
                    color: "323330",
                    logoColor: "F7DF1E"
                }, {
                    label: "CSS",
                    color: "239120",
                    logoColor: "white"
                },
                {
                    label: "Debdian",
                    color: "A81D33",
                    logoColor: "White"
                },
            ]
        },
    ]

    const projectStyle = {
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
                        backgroundColor: '#1A181B',
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
                interval={12000}
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
        height: '70vh',
        display: 'flex',     // Change to flex for horizontal layout
        flexDirection: 'row',  // Items should layout horizontally
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '3%',
        // backgroundColor: 'white',
        background: 'rgba(255, 255, 255, 0.45)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1vh solid rgba(255, 255, 255, 0.78)',
        '@media (maxWidth: 480px)': {
            width: '85vw',
            flexDirection: 'column', // Stack content vertically
            height: 'auto',
            padding: '20px',
        }
    };

    const deployedLink = {
        backgroundColor: '#C5E0D8',
        color: '#1A181B',
        width: '15vw',
        '@media (maxWidth: 480px)': {
            width: '100%', // Full width button
        }
    }

    const gitHubLink = {
        backgroundColor: '#1282A2',
        width: '15vw',
        marginTop: '5px',
        '@media (maxWidth: 480px)': {
            width: '100%', // Full width button
        }
    }

    const leftContentStyle = {
        flex: 1,
        paddingLeft: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (maxWidth: 480px)': {
            paddingLeft: '0',
            marginBottom: '20px'
        }
    }

    const rightContentStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (maxWidth: 480px)': {
            padding: '0 10px'
        }
    };

    const badgeLayout = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        '@media (maxWidth: 480px)': {
            flexDirection: 'row',
            margin: '5px 0'
        }
    }

    const imgShadow = {
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        '@media (maxWidth: 480px)': {
            width: '100%', // Full width image
            height: 'auto',
            border: 'none', // Removing the border for small screens, can adjust this
            boxShadow: 'none' // Adjusting the shadow for smaller screens
        }
    }
    const txtShadow = {
        textShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)'
    }

    return (
        <Paper style={paperStyle}>
            <div style={leftContentStyle}>
                <h2 style={{ fontSize: '2em' }}>{props.item.name}</h2>
                <img src={props.item.img} alt={props.item.name} style={{ width: '100%', height: 'auto', border: '.5rem solid #1A181B', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)' }} />
                <p style={{ fontSize: '1.2em' }}>{props.item.description}</p>

                {props.item.deployedApp && (
                    <a href={props.item.deployedApp} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button style={deployedLink} className="CheckButton" variant="contained" size="large">
                            Deployed Link
                        </Button>
                    </a>
                )}

                <a href={props.item.githubRepo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button style={gitHubLink} className="CheckButton" variant="contained" size="large">
                        Github Repo
                    </Button>
                </a>
            </div>

            <div style={rightContentStyle}>
                <h3 style={txtShadow}>Technologies Used</h3>
                <div>
                    {props.item.technologies && props.item.technologies.map(tech => (
                        <div style={badgeLayout} key={tech.label}>
                            <img style={imgShadow}
                                src={`https://img.shields.io/badge/${tech.label}-${tech.color}?style=for-the-badge&logo=${tech.label}&logoColor=${tech.logoColor}`}
                                alt={`${tech.label} Badge`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Paper>
    )
}

export default Project;
