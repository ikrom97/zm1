import React from 'react';

function TwitterIcon({ width, height }) {
  return (
    <svg width={width ?? 20} height={height ?? 16} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.29 16c7.547 0 11.675-6.157 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.272 8.272 0 0 1-2.356.636A4.07 4.07 0 0 0 19.448.292a8.304 8.304 0 0 1-2.606.981 4.153 4.153 0 0 0-5.806-.175 4.005 4.005 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.121 4.121 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.068c.537 1.646 2.078 2.774 3.833 2.806A8.315 8.315 0 0 1 0 14.186a11.754 11.754 0 0 0 6.29 1.812" fill="currentColor" />
    </svg>
  );
}

export default TwitterIcon;