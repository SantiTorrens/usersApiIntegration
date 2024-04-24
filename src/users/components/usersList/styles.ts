import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: auto;
  `

export const Image = styled.img`
    width: 3rem;
    height: 3rem;
    margin: auto;
    border-radius: 50%;
`;

export const ButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100%;
    @media (max-width: 720px){
      flex-direction: column;
    }
`;
