import React, { useState, useEffect } from "react";
import Incidents from "../components/Incidents";
import styled from "styled-components";
import { Spin } from "antd";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f6f8;
  min-height: 50vh;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 30px;
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
  background-color: #5175B3;
  transform: translateX(-50%);
  border-radius: 2px;
`;

const IncidentsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Random delay between 30ms and 100ms
    const delay = Math.floor(Math.random() * 70) + 30;
    const timer = setTimeout(() => setLoading(false), delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      <ContentWrapper>
        <Title>
          Incident Reports
          <Underline />
        </Title>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Incidents />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default IncidentsPage;
