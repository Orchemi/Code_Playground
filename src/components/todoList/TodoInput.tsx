'use client';

import { FC, useState } from 'react';
import useTodoList from '@components/todoList/useTodoList';

const TodoInput: FC = () => {
  const { createTodo } = useTodoList();
  const [writingTodoValue, setWritingTodoValue] = useState('');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createTodo(writingTodoValue);
    setWritingTodoValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={writingTodoValue}
        onChange={(e) => {
          e.preventDefault();
          setWritingTodoValue(e.target.value);
        }}
      />
      <button type={'button'} onClick={onSubmit}>
        추가
      </button>
    </form>
  );
};

export default TodoInput;
