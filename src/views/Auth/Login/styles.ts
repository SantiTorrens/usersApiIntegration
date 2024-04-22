import styled from "styled-components";
import MainLayout from "../../../layouts/MainLayout";

// Styled component for the login page container
export const LoginPageContainer = styled(MainLayout)`
  .animatedHeadline {
    /* Add your styles for the headline */
  }
`;

// Styled component for the login form container
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const HeaderContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

`
// Styled component for the form container
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
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