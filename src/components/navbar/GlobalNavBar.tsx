'use client';

import { FC } from 'react';
import Link from 'next/link';
import { globalNavbarCss } from '@components/navbar/styles';
import { globalNavbarLinks } from '@components/navbar/data';

const GlobalNavBar: FC = () => (
  <nav css={globalNavbarCss}>
    {globalNavbarLinks.map(({ name, href }) => (
      <Link key={name} href={href}>
        {name}
      </Link>
    ))}
  </nav>
);

export default GlobalNavBar;
