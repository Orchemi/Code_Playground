'use client';

import SiteLink from '@/app/references/SiteLink';
import { css } from '@emotion/react';
import { NextPage } from 'next';

const Docs: NextPage = () => {
  return (
    <main>
      <h1>참고자료</h1>
      <h2>1. 프로젝트 설정</h2>
      <ul>
        <SiteLink
          href={'https://velog.io/@brgndy/Next.js-13-%EB%9D%BC%EC%9A%B0%ED%8C%85'}
          name={'1.1. Next13 프로젝트 폴더 구조'}
        />
        <SiteLink href={'https://velog.io/@rmaomina/prettier-eslint-settings'} name={'1.2. Prettier, ESLint 설정'} />
        <SiteLink
          href={'https://flamingotiger.github.io/frontend/react/nextjs-absolute-path/'}
          name={'1.3. Next.js에서 절대경로 alias 설정'}
        />
        <SiteLink
          href={'https://velog.io/@s_sangs/CSS-in-JS-Stylelint-feat.-emotion-styled-components'}
          name={'1.4. CSS-in-JS stylelint 설정'}
        />
        <SiteLink
          href={'https://stackoverflow.com/questions/244777/can-comments-be-used-in-json'}
          name={'1.5. JSON 주석 사용'}
        />
      </ul>
      <br />
      <h2>2. 라이브러리 적응기</h2>
      <h3>2.1. emotion</h3>
      <ul>
        <SiteLink
          href={'https://nuhends.tistory.com/125'}
          name={'2.1.1. emotion 사용 중 css 속성 사용시 타입 에러 해결 방법'}
        />
        <SiteLink
          href={'https://velog.io/@favorcho/Emotion-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0'}
          name={'2.1.2. emotion 소개 및 사용하기'}
        />
      </ul>
    </main>
  );
};

export default Docs;
