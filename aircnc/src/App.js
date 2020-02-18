import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './components/GlobalStyles';
import { Container, Logo, Content } from './components/Container';

import Routes from './routes';
import AuthenticationProvider from './components/AuthProvider';

function App() {
  return (
    <Container>
      <Logo />
      <Content>
        <AuthenticationProvider>
          <Routes />
        </AuthenticationProvider>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Content>
    </Container>
  );
}

export default App;
