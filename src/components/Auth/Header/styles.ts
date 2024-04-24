import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled component for the header container
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #3498db; /* Blue color */
`;

// Styled component for the inner container
export const InnerContainer = styled.div`
    display: flex;
    height: 5rem;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 820px) {
        flex-direction: row;
    }
`;

// Styled component for the logo/link
export const LogoLink = styled(Link)`
    margin-right: auto;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff; /* White color */
    text-decoration: none;

    &:hover {
        color: #ffffff; /* White color */
    }
`;

export const logoutButton = styled.button`
    margin-left: auto;
`;
export const Image = styled.img`
    border-radius: 50%;
    margin-left: 10px;
    border: 2px solid black;
    height: 3.5rem;
    width: 3.5rem;
    cursor: pointer;
`;
