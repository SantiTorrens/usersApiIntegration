import styled from "styled-components";

// Styled component for the footer container
export const FooterContainer = styled.div`
  width: 100%;
  height: 5rem; 
  margin-top: auto;
  background-color: #ccc;
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }
`;

// Styled component for the inner container
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Styled component for the text
export const Text = styled.span`
  color: #000; /* Black color */
`;