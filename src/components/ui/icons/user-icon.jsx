import React from 'react';

function UserIcon({ width, height }) {
  return (
    <svg width={width ?? 16} height={height ?? 18} fill="none">
      <path d="M14.667 16.5c0-2.301-2.985-4.167-6.667-4.167S1.333 14.2 1.333 16.5M8 9.833A4.167 4.167 0 1 1 8 1.5a4.167 4.167 0 0 1 0 8.333Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default UserIcon;
