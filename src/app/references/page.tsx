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

const Docs: FC = () => {
  return (
    <main>
      <div>
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
        </ul>
      </div>
    </main>
  );
};

export default Docs;
