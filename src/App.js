import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import IncidentsPage from './pages/IncidentsPage';
import { bioBridgeTheme } from './styles/globalStyles';
// import 'antd/dist/antd.less';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${bioBridgeTheme.brandBackground};
    color: ${bioBridgeTheme.textColor};
  }

  a {
    color: ${bioBridgeTheme.brandPrimary};
  }

  a:hover {
    color: ${bioBridgeTheme.brandInfo};
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<IncidentsPage />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
