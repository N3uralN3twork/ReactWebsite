import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const HighlightSyntax = {
  code({ node, inline, className, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <Prism style={oneDark} language={match[1]} PreTag="div" className="codeStyle" {...props} />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default HighlightSyntax;