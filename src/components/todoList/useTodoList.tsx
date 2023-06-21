import { todoListState } from '@stores/todoList';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const useTodoList = (id?: number) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [latestTodoId, setLatestTodoId] = useState(0);

  useEffect(() => {
    const findLatestTodoId = () => Math.max(...todoList.map((todo) => todo.id), 0);
    setLatestTodoId(findLatestTodoId());
  }, []);

  useEffect(() => {
    const refreshTodoListInLocalStorage = () => localStorage.setItem('todoList', JSON.stringify(todoList));
    refreshTodoListInLocalStorage();
  }, [todoList]);

  const createTodo = async (content: string) => {
    const newTodoList = [
      ...todoList,
      {
        id: latestTodoId + 1,
        content,
        isDone: false,
      },
    ];
    setTodoList(newTodoList);
    setLatestTodoId(latestTodoId + 1);
  };

  const changeTodoStatus = () => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = () => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const deleteAllTodo = () => {
    setTodoList([]);
    setLatestTodoId(0);
  };

  return {
    createTodo,
    changeTodoStatus,
    todoList,
    setTodoList,
    deleteTodo,
    deleteAllTodo,
  };
};

export default useTodoList;
