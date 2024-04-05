import React from 'react';

function HTMLFrame({ src }) {
    return (
        <iframe
            src={src}
            title="HTMLFrame"
            style={{ width: '90%', height: '90vh', border: '10px' }}
            allowFullScreen
        />
    );
}

export default HTMLFrame;
