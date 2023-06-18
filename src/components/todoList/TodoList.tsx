'use client';

import { FC } from 'react';
import useTodoList from '@components/todoList/useTodoList';
import Todo from '@components/todoList/Todo';
import { todoListCss } from '@components/todoList/styles';

const TodoList: FC = () => {
  const { todoList } = useTodoList();

  return (
    <ul css={todoListCss}>
      {todoList.map(({ id, content, isDone }) => (
        <Todo key={id} id={id} content={content} isDone={isDone} />
      ))}
    </ul>
  );
};

export default TodoList;
