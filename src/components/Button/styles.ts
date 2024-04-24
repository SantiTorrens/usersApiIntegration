import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
}
export const Button = styled.span<ButtonProps>`
    cursor: pointer;
    background-color: red;
    color: #fff;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    width: fit-content;
    text-align: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'gray'};
`;