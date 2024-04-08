import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function AnimatedImage({ src, alt, name }) {
    const props = useSpring({
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.1)' },
        config: { tension: 200, friction: 20 } // Adjust the tension and friction values as needed
    });

    return (
        <animated.div style={props} className="picture">
            <div className="image-container">
                <img src={src} alt={alt} className="image" />
                <p className="picture">{name}</p>
            </div>
        </animated.div>
    );
}

function PictureList({ pictures }) {
    return (
        <div className="picture-container">
            {pictures.map((picture, index) => (
                <AnimatedImage key={index} src={picture.url} alt={picture.name} name={picture.name} />
            ))}
        </div>
    );
}

const pictures = [
    { name: 'Python', url: process.env.PUBLIC_URL + 'Python-logo-notext.svg.png' },
    { name: 'SQL', url: process.env.PUBLIC_URL + 'SQL-Logo-with-Database.png' },
    { name: 'R', url: process.env.PUBLIC_URL + 'RStudio-Logo-Flat.png' },
    { name: 'SAS', url: process.env.PUBLIC_URL + '/SAS-Logo.png' },
    // Add more pictures as needed
];

function AnimatedTechStack() {
    return (
        <div>
            <PictureList pictures={pictures} />
        </div>
    );
}

export default AnimatedTechStack;
