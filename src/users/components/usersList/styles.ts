import styled from "styled-components";

export const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-columns: 4;
    gap: 1rem;
`;

export const Image = styled.img`
    width: 3rem;
    height: 3rem;
    margin: auto;
    border-radius: 50%;
`;

export const ButtonsContainer = styled.div`
    align-items: center;
    width: 100%;
`;
export const DeleteButton = styled.span`
    cursor: pointer;
    background-color: red;
    color: #fff;
    margin-right: auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: fit-content;
`;
export const EditButton = styled.span`
    cursor: pointer;
    background-color: blue;
    padding: 0.5rem;
    color: #fff;
    border-radius: 0.5rem;
    margin-left: 1rem;
    width: fit-content;
`;
