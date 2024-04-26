import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

// Styled component for the main layout container
const MainLayoutContainer = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; 
  overflow: hidden;
`;

// Styled component for the main content container
const MainContent = styled.div`
  flex: 1;
  padding: 0 1rem; 
`;

const ChildrenContainer = styled.div`
  max-width: 1366px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem
  @media (max-width: 1024px) {
    padding: 0.5rem
  }

  `

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <MainLayoutContainer>
      <Header />
      <MainContent>
        <ChildrenContainer >{children}</ChildrenContainer>
      </MainContent>
      <Footer />
    </MainLayoutContainer>
  );
}

