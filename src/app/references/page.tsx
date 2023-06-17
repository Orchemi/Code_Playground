import { FC } from 'react';
import SiteLink from '@/app/references/SiteLink';

const Docs: FC = () => {
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
      </ul>
    </main>
  );
};

export default Docs;
