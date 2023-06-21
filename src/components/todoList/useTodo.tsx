import { useState } from 'react';

const useTodo = () => {
  const [isChangingTodoContent, setIsChangingTodoContent] = useState(false);

  const changeTodoEditStatus = () => {
    setIsChangingTodoContent(!isChangingTodoContent);
  };

  return {
    isChangingTodoContent,
    changeTodoEditStatus,
  };
};

export default useTodo;
