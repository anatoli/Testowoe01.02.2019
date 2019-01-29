import React from 'react';

const SuccessIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="abgc"
        d="M9 16.219L19.594 5.578 21 6.984l-12 12-5.578-5.578L4.781 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bgcd" fill="#fff">
        <use xlinkHref="#abgc" />
      </mask>
      <use fill="#000" xlinkHref="#aabgc" />
      <g className="ico-checkbox__icon" fill="#000" mask="url(#bgcd)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SuccessIcon;