import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import { useAppSelector } from '../../hooks/store';
import Sidebar from '../../components/Auth/Sidebar';

jest.mock('../../hooks/store', () => ({
  useAppSelector: jest.fn(),
}));

describe('Sidebar', () => {
  const mockUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;

  beforeEach(() => {
    mockUseAppSelector.mockClear();
  });

  test('renders the sidebar with welcome message', () => {
    mockUseAppSelector.mockReturnValue({ username: 'John' });

    const { getByText } = render(<Sidebar />);
    expect(getByText('Welcome to the Dashboard!')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    
   });

  test('renders the sidebar with default message when userInfo is not available', () => {
    mockUseAppSelector.mockReturnValue({ userInfo: null });

    const { getByText } = render(<Sidebar />);

    expect(getByText('Welcome to the Dashboard!')).toBeInTheDocument();
  });
});
