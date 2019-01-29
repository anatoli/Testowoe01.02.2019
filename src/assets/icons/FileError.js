import React from 'react';

const FileError = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h48v48H0z"/>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 4H12a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V16L28 4z"/>
      <g stroke="#FD5A61" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M30 24L19 35M19 24l11 11"/>
      </g>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 4v12h12"/>
    </g>
  </svg>

);

export default FileError;
