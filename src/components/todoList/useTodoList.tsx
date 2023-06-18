import { useRecoilState } from 'recoil';
import { latestTodoIdState, todoListState } from '@stores/todoList';

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [latestTodoId, setLatestTodoId] = useRecoilState(latestTodoIdState);

  const createTodo = (content: string) => {
    const newTodoList = [
      ...todoList,
      {
        id: latestTodoId,
        content,
        isDone: false,
      },
    ];
    setTodoList(newTodoList);
    setLatestTodoId(latestTodoId + 1);
  };

  return {
    createTodo,
    todoList,
  };
};

export default useTodoList;
