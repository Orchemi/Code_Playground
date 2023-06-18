'use client';

import { css } from '@emotion/react';
import { NextPage } from 'next';
import { commonContainerStyle } from '@styles/common';
import Link from 'next/link';

const Projects: NextPage = () => {
  return (
    <main css={containerStyle}>
      <h1>프로젝트들</h1>
      <h2>
        <Link href={'projects/todo-list'}>1. 투두리스트</Link>
      </h2>
    </main>
  );
};

export default Projects;

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
