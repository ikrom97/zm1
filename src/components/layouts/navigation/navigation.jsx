import React from 'react';
import { useRouter } from 'next/router';
import { navs } from '@/const';
import style from './style.module.css';
import Link from 'next/link';

function Navigation() {
  const router = useRouter();

  if (router.pathname === '/') {
    return null;
  }

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {navs?.map(({ title, path }) => (
          <li key={title} className={style.listItem}>
            <Link
              className={style.link}
              href={path}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
