'use client';

import { FC } from 'react';
import { css } from '@emotion/react';
import { SiteLinkType } from '@/app/references/data';
import { COLORS } from '@styles/colors';

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
  background-color: ${COLORS.gray50};
  border-radius: 6px;
  margin: 0 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${COLORS.gray100};
  }

  &:visited {
    color: ${COLORS.main};
  }
`;
