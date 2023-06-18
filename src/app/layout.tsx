'use client';

import './globals.css';
import GlobalNavBar from '@components/navbar/GlobalNavBar';
import { css } from '@emotion/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <title>Next13 활용 놀이터</title>
        <meta name="description" content={'Next13에서 이것저것 다 해보는 사이트'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <GlobalNavBar />
        <div css={globalLayoutCss}>{children}</div>
      </body>
    </html>
  );
}

const globalLayoutCss = css`
  margin-top: 100px;
`;
