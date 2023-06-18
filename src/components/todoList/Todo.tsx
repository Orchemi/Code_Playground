'use client';

import { FC } from 'react';
import { TodoType } from '@components/todoList/types';

const Todo: FC<Omit<TodoType, 'id'>> = ({ content, isDone }) => {
  return (
    <li>
      <input type="checkbox" checked={isDone} />
      {content}
    </li>
  );
};

export default Todo;
