import React from 'react';

const UploadError = (props) => (
  <svg width="26" height="26" viewBox="0 0 26 26" { ...props }>
    <path
      d="M165 410a13 13 0 1 0 13 13.016 12.99 12.99 0 0 0-13-13.016zm0 24.741a11.743 11.743 0 1 1 11.74-11.725 11.757 11.757 0 0 1-11.74 11.725zm.646-6.423a.681.681 0 1 1-.681-.679.682.682 0 0 1 .681.679zm-1.327-3.332v-7.647a.612.612 0 0 1 1.223 0v7.647a.607.607 0 0 1-.611.61.585.585 0 0 1-.612-.61z" // eslint-disable-line max-len
      transform="translate(-152 -410)"
    />
  </svg>
);

export default UploadError;
