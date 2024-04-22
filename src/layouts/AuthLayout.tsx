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
  flex: 1
`;

const ChildrenContainer = styled.div`
  width: 70%;
  height: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem`

const SidebarContainer = styled.div`
border-top: 1px solid white;
  width: 25%;
  padding: 2rem;
  height: 100%;
  background-color: #3498db; 
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

