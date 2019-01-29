import React from 'react';

const Cloud = (props) => (
  <svg {...props} className="cloud" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
    <g fill="none" fillRule="evenodd">
      <path d="M0-2h24v24H0z"/>
      <path className="cloud__arrow" stroke="#FD5A61" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 14l-4-4-4 4M12 12v7"/>
      <path stroke="#FD5A61" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.39 16.39A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 3 14.3"/>
    </g>
  </svg>
);

export default Cloud;
