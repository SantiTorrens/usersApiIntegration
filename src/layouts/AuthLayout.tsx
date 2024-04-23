import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Sidebar from '../components/Auth/Sidebar';
import AuthHeader from '../components/Auth/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

// Styled component for the main layout container
const AuthLayoutContainer = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; 
  overflow: hidden;
`;

// Styled component for the main content container
const MainContent = styled.div`
  display: flex;
  @media (min-width: 720px) {
    flex: 1
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ChildrenContainer = styled.div`
height: 100%;
margin-left: auto;
margin-right: auto;
padding: 1rem;
@media (min-width: 720px) {
  padding: 2rem
  width: 70%;
}
`

const SidebarContainer = styled.div`
  border-top: 1px solid white;
  padding: 2rem;
  height: 100%;
  background-color: #3498db; 
  @media (min-width: 720px) {

    width: 25%;
  }
`
export default function AuthLayout({ children }: MainLayoutProps): ReactElement {
  return (
    <AuthLayoutContainer>
      <AuthHeader />
      <MainContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ChildrenContainer >{children}</ChildrenContainer>
      </MainContent>
      <Footer />
    </AuthLayoutContainer>
  );
}

