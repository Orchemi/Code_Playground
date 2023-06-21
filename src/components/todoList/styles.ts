import { commonButtonCss } from '@/styles/common';
import { css } from '@emotion/react';
import { COLORS } from '@styles/colors';

export const todoListCss = css`
  margin: 20px 0;
  border: 1px solid ${COLORS.gray400};
  border-radius: 10px;
  overflow: hidden;

  & > li {
    border-top: 1px solid ${COLORS.gray400};

    &:first-child {
      border-top: none;
    }
  }
`;

export const todoCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: ${COLORS.main};
  padding: 0 20px;
  background: ${COLORS.white};

  &:hover {
    background: ${COLORS.gray50};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const todoContentCss = (isDone: boolean) => css`
  input {
    width: 20px;
    aspect-ratio: 1/1;
  }

  span {
    text-decoration: ${isDone ? 'line-through' : 'none'};
  }
`;

export const todoButtonContainerCss = css`
  & > button:hover {
    cursor: pointer;
  }
`;

export const todoInputContainerCss = css``;

export const TodoInputCss = css`
  display: flex;
  gap: 10px;
  height: 40px;
`;

export const todoInputCss = css`
  width: 100%;
  flex-shrink: 1;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${COLORS.gray600};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${COLORS.gray600};
  }
`;

export const todoUpdateInputCss = css`
  ${todoInputCss};
  font-size: 16px;
  color: ${COLORS.main};
  height: 35px;
  width: calc(100% - 80px);

  &:focus {
    box-shadow: 0 0 0 1px ${COLORS.main};
  }
`;

export const todoAddButtonCss = css`
  width: 60px;
  background: ${COLORS.lime800};
  border: 1px solid ${COLORS.lime900};
  border-radius: 4px;
  color: ${COLORS.white};
`;

export const todoHeaderCss = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 20px;
  margin: 20px 0;
  background: ${COLORS.gray100};
`;

export const deleteAllTodoButtonCss = css`
  ${commonButtonCss({})};
  ${todoAddButtonCss};
  height: 40px;
  width: auto;
  padding: 0 10px;
`;
