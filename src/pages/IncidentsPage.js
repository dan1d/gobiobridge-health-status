import React from "react";
import Incidents from "../components/Incidents";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f6f8; /* Light background color for contrast */
  min-height: 50vh; /* Ensure the page takes full viewport height */
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #ffffff; /* White background for content */
  padding: 30px;
  border-radius: 8px; /* Rounded corners for a modern look */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem; /* Larger font size for emphasis */
  color: #333333; /* Darker text color for better readability */
  margin-bottom: 30px; /* Spacing between the title and the content */
  font-weight: bold;
  position: relative;
`;

const Underline = styled.span`
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 60px;
  height: 4px;
  background-color: #5175B3; /* Matches the theme color */
  transform: translateX(-50%);
  border-radius: 2px;
`;

const IncidentsPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Title>
          Incident Reports
          <Underline />
        </Title>
        <Incidents />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default IncidentsPage;
