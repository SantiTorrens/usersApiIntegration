import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from "@testing-library/react";
import FormInput from '../../components/FormInput';

describe("FormInput component", () => {
  const mockHandleInput = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders label correctly", () => {
    const label = "Username";
    render(<FormInput label={label} type="text" name="username" value="" handleInput={mockHandleInput} />);
    const inputLabel = screen.getByText(`${label}:`);
    expect(inputLabel).toBeInTheDocument();
  });

  test("renders input correctly", () => {
    const name = "username";
    const value = "testuser";
    render(<FormInput label="Username" type="text" name={name} value={value} handleInput={mockHandleInput} />);
    const inputElement = screen.getByRole("textbox", { name: /Username/i });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("name", name);
    expect(inputElement).toHaveValue(value);
  });

  test("handles input change correctly", () => {
    render(<FormInput label="Username" type="text" name="username" value="" handleInput={mockHandleInput} />);
    const inputElement = screen.getByRole("textbox");
    const inputValue = "testuser";
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(mockHandleInput).toHaveBeenCalledTimes(1);
    expect(mockHandleInput).toHaveBeenCalledWith(expect.any(Object)); // You can add more specific assertions based on your handleInput implementation
  });

  test("renders error message correctly", () => {
    const error = "Username is required";
    render(<FormInput label="Username" type="text" name="username" value="" handleInput={mockHandleInput} error={error} />);
    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();
  });

  test("disables input when disabled prop is true", () => {
    render(<FormInput label="Username" type="text" name="username" value="" handleInput={mockHandleInput} disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });
});
