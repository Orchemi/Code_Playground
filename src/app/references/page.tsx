import {FC} from "react";

interface SiteLinkProps {
  href: string;
  children: React.ReactNode;
  isBlank?: boolean;
}

const SiteLink:FC<SiteLinkProps> = ({href, children, isBlank= true}) => {
  return (
    <a target={isBlank ? '_blank' : ''} href={href}>{children}</a>
  )
}

const Docs:FC = () => {
  return (
    <main>
      <div>
        <h1>참고자료</h1>
        <h2>1. 프로젝트 설정</h2>
        <SiteLink href={"https://velog.io/@brgndy/Next.js-13-%EB%9D%BC%EC%9A%B0%ED%8C%85"}>1.1. Next13 프로젝트 폴더 구조</SiteLink>
      </div>
    </main>
  )
}

export default Docs;