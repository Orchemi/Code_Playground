'use client';

import { FC } from 'react';
import { css } from '@emotion/react';
import { SiteLinkType } from '@/app/references/data';

interface SiteLinksProps {
  links: SiteLinkType[];
}

export const SiteLinkList: FC<SiteLinksProps> = ({ links }) => (
  <ul>
    {links.map(({ name, href, isBlank = true }) => (
      <SiteLink key={name} href={href} name={name} isBlank={isBlank} />
    ))}
  </ul>
);

const SiteLink: FC<SiteLinkType> = ({ href, name, isBlank = true }) => (
  <li>
    <a css={anchorStyle} target={isBlank ? '_blank' : ''} href={href}>
      {name}
    </a>
  </li>
);

export default SiteLink;

const anchorStyle = css`
  display: block;
  padding: 18px;
  background-color: #f0f0f0;
  color: black;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e5e5e5;
  }

  &:visited {
    color: black;
  }
`;
