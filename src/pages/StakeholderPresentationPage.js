import React from 'react';
import StakeholderPresentation from '../components/Presentation';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;

const StakeholderPresentationPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <StakeholderPresentation />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StakeholderPresentationPage;
