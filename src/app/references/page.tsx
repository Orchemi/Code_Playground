'use client';

import { SiteLinkList } from '@/app/references/SiteLink';
import { css } from '@emotion/react';
import { NextPage } from 'next';
import { referenceLinkGroup } from '@/app/references/data';
import { commonContainerStyle } from '@styles/common';

const References: NextPage = () => {
  return (
    <main css={containerStyle}>
      <h1>참고자료</h1>
      {referenceLinkGroup.map(({ title, links }) => (
        <div key={title}>
          <h2>{title}</h2>
          <SiteLinkList links={links} />
        </div>
      ))}
    </main>
  );
};

export default References;

const containerStyle = css`
  ${commonContainerStyle}
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > li:last-child {
      margin-bottom: 50px;
    }
  }
`;
