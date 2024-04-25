import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import StyledButton from '../../components/Button/Index';

describe('StyledButton', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<StyledButton text={buttonText} handleAction={() => {}} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls handleAction when clicked', () => {
    const handleActionMock = jest.fn();
    const buttonText = 'Click me';
    const { getByText } = render(<StyledButton text={buttonText} handleAction={handleActionMock} />);
    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(handleActionMock).toHaveBeenCalledTimes(1);
  });

  test('renders button with custom background color', () => {
    const buttonText = 'Click me';
    const customBackgroundColor = 'red';
    const { getByText } = render(<StyledButton text={buttonText} handleAction={() => {}} background={customBackgroundColor} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toHaveStyle(`background-color: ${customBackgroundColor}`);
  });
});
