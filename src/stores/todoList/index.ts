import { atom } from 'recoil';
import { TodoType } from '@components/todoList/types';

export const todoListState = atom({
  key: 'todoListState',
  default: [] as TodoType[],
});

export const latestTodoIdState = atom({
  key: 'latestTodoIdState',
  default: 1,
});
