import React from "react";
import styled from "styled-components";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string | number | boolean;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined;
  disabled?: boolean;
}

// Styled component for the form input container
const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Styled component for the input element
const Input = styled.input<{ disabled?: boolean }>`
  padding: 0.5rem;
  color: ${({ disabled }) => (disabled ? "#666" : "#000")};
  background-color: ${({ disabled }) => (disabled ? "#eee" : "#fff")};
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  &:focus,
  &:active {
    border-color: #3498db;
  }
`;

// Styled component for the error message
const ErrorMessage = styled.span`
  height: 1.25rem;
  color: #f00;
`;

const FormInput: React.FC<FormInputProps> = ({
  disabled,
  label,
  type,
  name,
  value,
  handleInput,
  error,
}) => {
  return (
    <FormInputContainer>
      <label htmlFor={name} className="text-black">
        {label}:
      </label>
      <Input
        type={type}
        name={name}
        id={name}
        autoFocus
        disabled={disabled}
        autoComplete="mail@example.com"
        value={value as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
      />
      <ErrorMessage>{error ? error : ""}</ErrorMessage>
    </FormInputContainer>
  );
};

export default FormInput;
