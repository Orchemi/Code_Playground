import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '@/app/projects/page';

describe('projects', () => {
  it('should render the page', () => {
    render(<Projects />);

    const headerText = screen.getByRole('heading', { name: '프로젝트들' });

    expect(headerText).toBeInTheDocument();
  });
});
