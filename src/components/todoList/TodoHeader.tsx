'use client';

import { deleteAllTodoButtonCss, todoHeaderCss } from '@/components/todoList/styles';
import useTodoList from '@/components/todoList/useTodoList';
import { FC } from 'react';

const TodoHeader: FC = () => {
  const { deleteAllTodo } = useTodoList();

  return (
    <div css={todoHeaderCss}>
      <button css={deleteAllTodoButtonCss} onClick={deleteAllTodo}>
        전체 삭제
      </button>
    </div>
  );
};

export default TodoHeader;
