import React from 'react';
import { Card } from 'primereact/card';

function About() {
    const aboutMeStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        letterSpacing: '.2em',
        zIndex: '33',
        textAlign: 'center',
        width: '70%',
        padding: '2%',
        borderRadius: '3%',
        background: 'rgba(255, 255, 255, 0.45)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1vh solid rgba(255, 255, 255, 0.78)'
        
        
    };


    return (
        <div style={aboutMeStyle}>
            <Card className="md:w-25rem">
                <p className="m-0">
                <p>
                    Hello, and welcome to my corner of the internet! My name is Peter Sharma, and I'm a culinary
                    aficionado, 3D printing enthusiast, and burgeoning full-stack web developer based out of the vibrant
                    city of
                    Austin, Texas.
                    </p>
                    <p>
                    My journey started back in 2009, when I attended culinary school and embarked on an exciting career
                    in the culinary industry. I've always had a particular passion for creating handmade pasta and
                    artisanal bread, and more recently, I've ventured into the delightful realm of smoking meats. One of
                    the
                    crowning achievements of my culinary career was the exhilarating experience of opening a restaurant
                    for the
                    iconic Pebble Beach, and honing my culinary prowess at a Michelin-starred restaurant.
                    </p>
                    <p>
                    This year, I decided to tap into my lifelong interest in computers and began a coding bootcamp for
                    full-stack web development. I've found an unexpected symmetry between the logic used in coding and
                    cooking; both require a mix of creativity, precision, and a dash of intuition. I see every line of
                    code as a recipe, each one leading to a unique and satisfying result.
                    </p>
                    <p>
                    But I'm more than just my professional pursuits. I have an insatiable thirst for learning and trying
                    new things. Whether it's tinkering with radios, experimenting with microcontrollers, mastering the
                    art
                    of calligraphy, tending to my garden, or getting under the hood of a classic car, I am driven by
                    curiosity and a desire to understand the world around me.
                    </p>
                    <p>
                    Thank you for stopping by my website, I hope you enjoy exploring my diverse world of interests and
                    experiences. I look forward to sharing my journey and learning from all of you along the way.
                    </p>
                </p>
            </Card>
        </div>
    );
}

export default About;
