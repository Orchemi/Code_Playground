import { render, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '@/components/todoList/TodoList';
import { RecoilRoot } from 'recoil';
import useTodoList from '@/components/todoList/useTodoList';

describe('TodoList', () => {
  it('should render the components', () => {
    const useTodoListData = renderHook(() => useTodoList(), { wrapper: RecoilRoot });
    const { todoList } = useTodoListData.result.current;

    render(
      <RecoilRoot>
        <TodoList todoList={todoList} />
      </RecoilRoot>,
    );

    // screen으로부터 todoListElement를 가져온다.
    const todoListElement = screen.getByRole('list');

    expect(todoListElement).toBeEmptyDOMElement();
    expect(todoList).toHaveLength(0);
  });
});
