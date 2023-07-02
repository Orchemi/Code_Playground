'use client';

import { FC } from 'react';
import Todo from '@components/todoList/Todo';
import { todoListCss } from '@components/todoList/styles';
import { TodoType } from '@/components/todoList/types';

interface Props {
  todoList: TodoType[];
}

const TodoList: FC<Props> = ({ todoList }) => {
  return (
    <ul css={todoListCss}>
      {todoList.map(({ id, content, isDone }) => (
        <Todo key={id} id={id} content={content} isDone={isDone} />
      ))}
    </ul>
  );
};

export default TodoList;
