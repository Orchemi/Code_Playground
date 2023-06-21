import { todoListState } from '@stores/todoList';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const useTodoList = (id?: number) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [latestTodoId, setLatestTodoId] = useState<number>(0);
  const [updatingTodoId, setUpdatingTodoId] = useState<number | null>(null);
  const [updatingTodoValue, setUpdatingTodoValue] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const findLatestTodoId = () => Math.max(...todoList.map((todo) => todo.id), 0);
    setLatestTodoId(findLatestTodoId());
  }, []);

  useEffect(() => {
    const refreshTodoListInLocalStorage = () => localStorage.setItem('todoList', JSON.stringify(todoList));
    const calcProgressPercent = () => {
      const doneTodoCount = todoList.filter((todo) => todo.isDone).length;
      const totalTodoCount = todoList.length;
      setProgressPercent((doneTodoCount / totalTodoCount) * 100);
    };

    refreshTodoListInLocalStorage();
    calcProgressPercent();
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

  const beginTodoContentChange = (currentContent: string) => {
    if (id === undefined) return;
    if (updatingTodoId) return;

    setUpdatingTodoValue(currentContent);
    setUpdatingTodoId(id);
  };

  const updateTodoContent = (newContent: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          content: newContent,
        };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
  };

  const resetUpdateTodoContent = () => {
    setUpdatingTodoId(null);
    setUpdatingTodoValue('');
  };

  const completeUpdateTodoContent = () => {
    if (updatingTodoId === null) return;
    if (!updatingTodoValue) return;

    const newTodoList = todoList.map((todo) => {
      if (todo.id === updatingTodoId) {
        return {
          ...todo,
          content: updatingTodoValue,
        };
      } else {
        return todo;
      }
    });

    setTodoList(newTodoList);
    resetUpdateTodoContent();
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
    progressPercent,
    createTodo,
    changeTodoStatus,
    todoList,
    setTodoList,
    updateTodoContent,
    deleteTodo,
    deleteAllTodo,
    updatingTodoId,
    updatingTodoValue,
    setUpdatingTodoValue,
    beginTodoContentChange,
    resetUpdateTodoContent,
    completeUpdateTodoContent,
  };
};

export default useTodoList;
