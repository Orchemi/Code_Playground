import { atom } from 'recoil';
import { TodoType } from '@components/todoList/types';

const findLocalStorageTodoList = (): TodoType[] => {
  const todoList = localStorage.getItem('todoList');
  return todoList ? JSON.parse(todoList) : [];
};

export const todoListState = atom({
  key: 'todoListState',
  default: findLocalStorageTodoList(),
});

export const latestTodoIdState = atom({
  key: 'latestTodoIdState',
  default: 1,
});
