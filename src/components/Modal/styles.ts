import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const ModalOverlay = styled.div`
    position: absolute;
    background-color: #000;
    height: 100%;
    z-index: -1;
    width: 100%;
    opacity: 50%;
    top: 0;
    left: 0;
`;

export const ModalInnerContainer = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 2rem;
    padding: 2rem;
    height: fit-content;
    margin: auto;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 1024px) {
      width: 95%;
    }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end
`