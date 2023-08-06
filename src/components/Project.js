// import React from 'react'

// function Project() {
//     const projectTest = 'I am a test project'
//     return (
//         <div>
//             <h1>{projectTest}</h1>
//         </div>
//     )
// }


import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Project(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
            // img: "/path/to/your/image1.jpg"  <-- To add image to the item
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
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

    return (
        <Carousel
            fullHeightHover={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{          
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 2,
                    color:'black'
                }
            }}
            navButtonsWrapperProps={{   
                style: {
                    bottom: '0',
                    top: 'unset',
                }
            }}
            // NextIcon='next'
            // PrevIcon='prev'
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            {/* <img src={props.item.img} alt={props.item.name} /> */}
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Project;
