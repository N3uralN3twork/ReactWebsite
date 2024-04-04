import React, { useState, useEffect, createElement } from 'react';
import { remark } from 'remark';
import remarkMath from 'remark-math';
import reactRenderer from 'remark-react';

function MarkdownWithMathRenderer({ markdownFilePath }) {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(markdownFilePath)
            .then(response => response.text())
            .then(data => {
                setMarkdownContent(data);
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }, [markdownFilePath]);

    return (
        <div className="markdown-container">
            {markdownContent && remark()
                .use(remarkMath)
                .use(reactRenderer, { createElement }) // Pass createElement function
                .processSync(markdownContent).result}
        </div>
    );
}

export default MarkdownWithMathRenderer;
