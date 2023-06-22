'use client';

import { todoProgressBarCss } from '@/components/todoList/styles';
import useTodoList from '@/components/todoList/useTodoList';
import { FC } from 'react';

const TodoProgressBar: FC = () => {
  const { progressPercent } = useTodoList();

  return (
    <div css={todoProgressBarCss(progressPercent)}>
      <div></div>
    </div>
  );
};

export default TodoProgressBar;
