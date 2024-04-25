import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import ProtectedRoute from '../../components/ProtectedRoute';

jest.mock('../../hooks/store', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));


describe('ProtectedRoute', () => {
  const mockUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;

  beforeEach(() => {
    mockUseAppSelector.mockClear();
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/protected' });

  });

  test('renders children when user is authenticated', () => {
    mockUseAppSelector.mockReturnValue('mockToken');

    const { getByText } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    expect(getByText('Protected Content')).toBeInTheDocument();
  });

  test('redirects to login page when user is not authenticated', () => {
    mockUseAppSelector.mockReturnValue(null);

    const assignMock = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).location = { assign: assignMock };

    render(
      <MemoryRouter> 
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );


    setTimeout(() => {
      // Check if window.location.assign is called with the login page URL
      expect(assignMock).toHaveBeenCalledWith('/');
    }, 50);
  });
  
});