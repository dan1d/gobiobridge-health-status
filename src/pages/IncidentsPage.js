import React from "react";
import Incidents from "../components/Incidents";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content horizontally */
  padding: 20px;
`;

const ContentWrapper = styled.div`
  max-width: 800px; /* Set a max width to the content */
  width: 100%; /* Ensure content takes full width up to max-width */
`;

const IncidentsPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1>Incident Reports</h1>
        <Incidents />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default IncidentsPage;
