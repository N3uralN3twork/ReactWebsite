import React from 'react';
import ReactMarkdown from 'react-markdown';
import HighlightSyntax from '../SyntaxHighlighter';
import XGBoost from './XGBoost.md';

function XGBoostPage(){
  return (
    <main className="h-full bg-white rounded-md border">
      <header>
        .........
      </header>
      <div
        className=" leading-8 marker:text-black max-w-2xl mx-auto py-6 prose
          prose-lg prose-p:block prose-li:py-[0.5] prose-li:my-0 prose-a:text-blue-600
         hover:prose-a:text-blue-500 prose-code:text-sm prose-code:bg-gray-200 
          prose-code:p-1 prose-code:rounded prose-img:mx-auto       "
      >
        <ReactMarkdown components={HighlightSyntax}>{XGBoost}</ReactMarkdown>
      </div>

      <section className="border-t-2 px-8 py-4">
        ........
      </section>
    </main>
  );
};

export default XGBoostPage;