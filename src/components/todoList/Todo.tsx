'use client';

import { FC, useEffect, useState } from 'react';
import { TodoType } from '@components/todoList/types';
import { todoButtonContainerCss, todoContentCss, todoCss, todoUpdateInputCss } from '@components/todoList/styles';
import { COLORS } from '@styles/colors';
import { commonButtonCss } from '@styles/common';
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
  const {
    changeTodoStatus,
    deleteTodo,
    updatingTodoValue,
    setUpdatingTodoValue,
    updatingTodoId,
    beginTodoContentChange,
    resetUpdateTodoContent,
    completeUpdateTodoContent,
  } = useTodoList(id);
  const [isUpdatingTodoContent, setIsUpdatingTodoContent] = useState(false);

  useEffect(() => {
    setIsUpdatingTodoContent(updatingTodoId === id);
  }, [updatingTodoId]);

  const onClickEditButton = () => {
    beginTodoContentChange(content);
  };

  const onChangeUpdatingTodoContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUpdatingTodoValue(e.target.value);
  };

  return (
    <li css={todoCss}>
      {isUpdatingTodoContent ? (
        <>
          <input
            css={todoUpdateInputCss}
            type="text"
            value={updatingTodoValue}
            onChange={onChangeUpdatingTodoContent}
          />
          <div css={todoButtonContainerCss}>
            <TodoButton color={COLORS.blue500} onClick={completeUpdateTodoContent}>
              완료
            </TodoButton>
            <TodoButton color={COLORS.gray500} onClick={resetUpdateTodoContent}>
              취소
            </TodoButton>
          </div>
        </>
      ) : (
        <>
          <div css={todoContentCss(isDone)} onClick={changeTodoStatus}>
            <input type="checkbox" checked={isDone} onChange={changeTodoStatus} />
            <span>{content}</span>
          </div>
          <div css={todoButtonContainerCss}>
            <TodoButton color={COLORS.green500} onClick={onClickEditButton}>
              수정
            </TodoButton>
            <TodoButton color={COLORS.red500} onClick={deleteTodo}>
              삭제
            </TodoButton>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
