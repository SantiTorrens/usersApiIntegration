import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import Header from '../../components/Header';

jest.mock('../../hooks/store', () => ({
  useAppSelector: jest.fn(),
}));

describe('Header', () => {
  const mockUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;

  test('renders the logo link to home when user is not authenticated', () => {
    mockUseAppSelector.mockReturnValue(null);

    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoLink = getByText('Cloud District');
    expect(logoLink.getAttribute('href')).toBe('/');
  });

  test('renders the logo link to dashboard when user is authenticated', () => {
    mockUseAppSelector.mockReturnValue('mockToken');

    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoLink = getByText('Cloud District');
    expect(logoLink.getAttribute('href')).toBe('/users');
  });

  test('renders the dashboard button when user is authenticated', () => {
    mockUseAppSelector.mockReturnValue('mockToken');

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const dashboardButton = screen.getByTestId('link-redirection');
    expect(dashboardButton.getAttribute('href')).toBe('/usersApiIntegration/users');
  });

  test('does not render the dashboard button when user is not authenticated', () => {
    mockUseAppSelector.mockReturnValue(null);

    const { queryByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const dashboardButton = queryByText('Dashboard');
    expect(dashboardButton).toBeNull();
  });
});
