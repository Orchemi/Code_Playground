'use client';

import { FC } from 'react';
import { TodoType } from '@components/todoList/types';
import { todoButtonContainerCss, todoContentCss, todoCss } from '@components/todoList/styles';
import { COLORS } from '@styles/colors';
import { commonButtonCss } from '@styles/common';
import useTodo from '@components/todoList/useTodo';
import useTodoList from '@components/todoList/useTodoList';

interface TodoButtonProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

const TodoButton: FC<TodoButtonProps> = ({ color, onClick, children }) => {
  return (
    <span css={commonButtonCss({ color })} onClick={onClick}>
      {children}
    </span>
  );
};

const Todo: FC<TodoType> = ({ id, content, isDone }) => {
  const { changeTodoStatus } = useTodoList();
  const { isChangingTodoContent, changeTodoEditStatus } = useTodo();

  const onChangeTodoStatus = () => {
    changeTodoStatus(id);
  };

  return (
    <li css={todoCss}>
      <div css={todoContentCss(isDone)} onClick={onChangeTodoStatus}>
        <input type="checkbox" checked={isDone} onChange={onChangeTodoStatus} />
        <span>{content}</span>
      </div>

      {isChangingTodoContent ? (
        <div css={todoButtonContainerCss}>
          <TodoButton color={COLORS.gray500} onClick={changeTodoEditStatus}>
            취소
          </TodoButton>
          <span css={commonButtonCss({ color: COLORS.blue500 })}>완료</span>
        </div>
      ) : (
        <div css={todoButtonContainerCss}>
          <TodoButton color={COLORS.green500} onClick={changeTodoEditStatus}>
            수정
          </TodoButton>
          <span css={commonButtonCss({ color: COLORS.red500 })}>삭제</span>
        </div>
      )}
    </li>
  );
};

export default Todo;
