'use client';

import { FC } from 'react';
import useTodoList from '@components/todoList/useTodoList';
import Todo from '@components/todoList/Todo';

const TodoList: FC = () => {
  const { todoList } = useTodoList();

  return (
    <ul>
      {todoList.map(({ id, content, isDone }) => (
        <Todo key={id} content={content} isDone={isDone} />
      ))}
    </ul>
  );
};

export default TodoList;
