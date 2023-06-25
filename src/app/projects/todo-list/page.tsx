'use client';

import { NextPage } from 'next';
import { css } from '@emotion/react';
import { commonContainerStyle } from '@styles/common';
import { TodoHeader, TodoInput, TodoList } from '@components/todoList';
import TodoProgressBar from '@/components/todoList/TodoProgressBar';
import useTodoList from '@/components/todoList/useTodoList';

const TodoListPage: NextPage = () => {
  const { todoList } = useTodoList();

  return (
    <main css={containerStyle}>
      <h1>할 일들</h1>
      <TodoHeader />
      <TodoInput />
      <TodoProgressBar />
      <TodoList todoList={todoList} />
    </main>
  );
};

export default TodoListPage;

const containerStyle = css`
  ${commonContainerStyle}
`;
