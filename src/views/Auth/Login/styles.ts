import styled from "styled-components";
import MainLayout from "../../../layouts/MainLayout";

// Styled component for the login page container
export const LoginPageContainer = styled(MainLayout)``;

// Styled component for the login form container
export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;
export const HeaderContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Headline = styled.h2`
    font-size: 150px;
    line-height: 240px;
    color: transparent;
    -webkit-text-stroke: 2px white;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 90px;
    }

`;
// Styled component for the form container
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    gap: 0.5rem;
    width: 100%;
    width: 80%;
`;

// Styled component for the button
export const SubmitButton = styled.button`
    width: 100%;
    margin-top: 20px;
`;

// Styled component for the horizontal rule
export const HorizontalRule = styled.hr`
    margin: 30px auto;
    width: 100%;
    max-width: 200px;
    border: 0.5px solid black;
`;
