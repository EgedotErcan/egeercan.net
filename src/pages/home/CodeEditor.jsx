import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const codeSnippet = `# Who am i?
I am a Computer Geek and Math student at METU.
Quick learner, deep thinker, love to outdoor sports!`;

const CodeEditor = () => {
  return (
    <>
      <SyntaxHighlighter
        language="markdown"
        style={dracula}
        showLineNumbers
        wrapLongLines  >
        {codeSnippet}
      </SyntaxHighlighter>
    </>
  );
};


export default CodeEditor;
