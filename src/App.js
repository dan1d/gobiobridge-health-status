import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import IncidentsPage from './pages/IncidentsPage';
import ContactUsPage from './pages/ContactUsPage';
import bioBridgeTheme from './styles/globalStyles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${bioBridgeTheme.colorBackground};
    color: ${bioBridgeTheme.colorText};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    color: ${bioBridgeTheme.colorPrimary};
  }

  a:hover {
    color: ${bioBridgeTheme.colorInfo};
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <ConfigProvider theme={bioBridgeTheme}>
      <Router>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<IncidentsPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/incidents" element={<IncidentsPage />} />
            </Routes>
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </Router>
    </ConfigProvider>
  );
}

export default App;
