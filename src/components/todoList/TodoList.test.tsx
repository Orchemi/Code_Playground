import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoType } from '@/components/todoList/types';
import TodoList from '@/components/todoList/TodoList';
import { RecoilRoot } from 'recoil';

describe('TodoList', () => {
  it('should render the components', () => {
    const todoListMock: TodoType[] = [
      {
        id: 1,
        content: '할 일1',
        isDone: false,
      },
    ];

    const container = render(
      <RecoilRoot>
        <TodoList todoList={todoListMock} />
      </RecoilRoot>,
    );

    // 할 일1이라는 텍스트가 화면에 보이는지 확인
    const todoText = container.getByText('할 일1');
    expect(todoText).toHaveTextContent('할 일1');
  });
});
