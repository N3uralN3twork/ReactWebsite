import React from 'react';

function PictureList({ pictures }) {
    return (
        <div className="picture-container">
            {pictures.map((picture, index) => (
                <div key={index} className="picture">
                    <img src={picture.url} alt={picture.name} />
                    <p>{picture.name}</p>
                </div>
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

function Techstack() {
    return (
        <div>
            <PictureList pictures={pictures} />
        </div>
    );
}

export default Techstack;
