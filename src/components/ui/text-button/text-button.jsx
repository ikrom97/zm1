import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

function TextButton({ children, href, className, ...rest }) {
  return href ? (
    <Link
      className={classNames(style.button, className)}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      className={classNames(style.button, className)}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

export default TextButton;
