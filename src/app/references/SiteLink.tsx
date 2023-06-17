'use client';

import { FC } from 'react';
import { css } from '@emotion/react';

interface SiteLinkProps {
  href: string;
  name: string;
  isBlank?: boolean;
}

const SiteLink: FC<SiteLinkProps> = ({ href, name, isBlank = true }) => {
  return (
    <li css={listStyle}>
      <a target={isBlank ? '_blank' : ''} href={href}>
        {name}
      </a>
    </li>
  );
};

export default SiteLink;

const listStyle = css`
  color: black;

  &:visited {
    color: black;
  }
`;
