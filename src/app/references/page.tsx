'use client';

import { SiteLinkList } from '@/app/references/SiteLink';
import { css } from '@emotion/react';
import { NextPage } from 'next';
import { projectSetting, studyLibrary } from '@/app/references/data';
import { commonContainerStyle } from '@styles/common';

const References: NextPage = () => {
  return (
    <main css={containerStyle}>
      <h1>참고자료</h1>
      <h2>1. 프로젝트 설정</h2>
      <SiteLinkList links={projectSetting} />

      <h2>2. 라이브러리 적응기</h2>
      <h3>2.1. emotion</h3>
      <SiteLinkList links={studyLibrary} />
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
