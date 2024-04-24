import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
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
    width: 50%;
    margin: auto;
    z-index: 2;
    display: flex;
    flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end
`