'use client';

import { FC } from 'react';
import { TodoType } from '@components/todoList/types';
import { todoCss } from '@components/todoList/styles';
import useTodoList from '@components/todoList/useTodoList';

const Todo: FC<TodoType> = ({ id, content, isDone }) => {
  const { changeTodoStatus } = useTodoList();

  const onChangeTodoStatus = () => changeTodoStatus(id);

  return (
    <li css={todoCss(isDone)} onClick={onChangeTodoStatus}>
      <input type="checkbox" checked={isDone} onChange={onChangeTodoStatus} />
      <span>{content}</span>
    </li>
  );
};

export default Todo;
