'use client';

import { NextPage } from 'next';
import { css } from '@emotion/react';
import { commonContainerStyle } from '@styles/common';
import { TodoHeader, TodoInput, TodoList } from '@components/todoList';

const TodoListPage: NextPage = () => (
  <main css={containerStyle}>
    <h1>할 일들</h1>
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </main>
);

export default TodoListPage;

const containerStyle = css`
  ${commonContainerStyle}
`;
