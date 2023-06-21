'use client';

import { FC, useState } from 'react';
import useTodoList from '@components/todoList/useTodoList';
import { TodoInputCss, todoAddButtonCss, todoInputCss } from '@components/todoList/styles';

const TodoInput: FC = () => {
  const { createTodo } = useTodoList();
  const [writingTodoValue, setWritingTodoValue] = useState('');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!writingTodoValue) return;

    createTodo(writingTodoValue);
    setWritingTodoValue('');
  };

  return (
    <form onSubmit={onSubmit} css={TodoInputCss}>
      <input
        css={todoInputCss}
        type="text"
        value={writingTodoValue}
        onChange={(e) => {
          e.preventDefault();
          setWritingTodoValue(e.target.value);
        }}
      />
      <button css={todoAddButtonCss} type={'button'} onClick={onSubmit}>
        추가
      </button>
    </form>
  );
};

export default TodoInput;
