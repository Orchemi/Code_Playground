import { FC } from 'react';

interface SiteLinkProps {
  href: string;
  name: string;
  isBlank?: boolean;
}

const SiteLink: FC<SiteLinkProps> = ({ href, name, isBlank = true }) => {
  return (
    <li>
      <a target={isBlank ? '_blank' : ''} href={href}>
        {name}
      </a>
    </li>
  );
};

export default SiteLink;
