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

  const changeTodoStatus = (id: number) => {
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

  return {
    createTodo,
    changeTodoStatus,
    todoList,
  };
};

export default useTodoList;
