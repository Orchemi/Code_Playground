'use client';

import { SiteLinkList } from '@/app/references/SiteLink';
import { css } from '@emotion/react';
import { NextPage } from 'next';
import { projectSetting, studyLibrary } from '@/app/references/data';

const Docs: NextPage = () => {
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

export default Docs;

const containerStyle = css`
  margin: 0 auto;
  width: 100%;
  min-width: 800px;
  max-width: 2000px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > li:last-child {
      margin-bottom: 50px;
    }
  }

  h1 {
    margin-bottom: 30px;
  }

  h2 {
    margin: 30px 0 20px 0;
    font-weight: 700;
    font-size: 28px;
  }

  h3 {
    margin: 20px 0 10px 0;
    font-weight: 500;
    font-size: 20px;
  }
`;
