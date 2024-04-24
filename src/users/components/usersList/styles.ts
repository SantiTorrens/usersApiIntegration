import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2rem;
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }
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
    @media (max-width: 768px){
      flex-direction: column;
    }
`;

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
`

export const Headline = styled.h1`
color: #fff;
font-size: 2rem;
`