export interface SiteLinkType {
  href: string;
  name: string;
  isBlank?: boolean;
}

// 1. 프로젝트 설정
export const projectSetting: SiteLinkType[] = [
  {
    href: 'https://velog.io/@brgndy/Next.js-13-%EB%9D%BC%EC%9A%B0%ED%8C%85',
    name: 'Next13 프로젝트 폴더 구조',
  },
  {
    href: 'https://flamingotiger.github.io/frontend/react/nextjs-absolute-path/',
    name: 'Next.js에서 절대경로 alias 설정',
  },
  {
    href: 'https://velog.io/@rmaomina/prettier-eslint-settings',
    name: 'Prettier, ESLint 설정',
  },
  {
    href: 'https://velog.io/@s_sangs/CSS-in-JS-Stylelint-feat.-emotion-styled-components',
    name: 'CSS-in-JS stylelint 설정',
  },
  {
    href: 'https://stackoverflow.com/questions/244777/can-comments-be-used-in-json',
    name: 'JSON 주석 사용',
  },
];

// 2. 라이브러리 적응기
export const studyLibrary: SiteLinkType[] = [
  {
    href: 'https://velog.io/@favorcho/Emotion-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0',
    name: 'emotion 소개 및 사용하기',
  },
  {
    href: 'https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0#5%EF%B8%8F%E2%83%A3---%EC%95%84%EC%A7%81-%EB%AF%B8%ED%9D%A1%ED%95%9C-devtools-%EA%B7%B8%EB%A6%AC%EA%B3%A0-snapshot',
    name: 'Recoil 200% 활용하기',
  },
];
