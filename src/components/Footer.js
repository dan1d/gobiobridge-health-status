import React from "react";
import { Layout, Row, Col } from "antd";
import { LinkedinOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Footer } = Layout;

const LogoContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
  display: block;
  margin: 0 auto 10px;
`;

const HIPAAIcon = styled.img`
  height: 120px;  /* Reverted to smaller size */
  display: block;
  margin: 10px auto 0 auto;  /* Centered horizontally */
  filter: invert(1); /* Make the logo white */
`;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#001529", padding: "20px 50px", color: "#ffffff" }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={7} offset={1}>
          <LogoContainer>
            <Logo
              src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
              alt="BioBridge Logo"
            />
          </LogoContainer>
          <p>Improving lives through cardiac remote monitoring.</p>
        </Col>
        <Col xs={24} md={6}>
          <h3 style={{ color: "#ffffff" }}>Quick Links</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="https://www.gobiobridge.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/incidents" style={{ color: "#ffffff" }}>
                Incidents
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "#ffffff" }}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://www.gobiobridge.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
                Privacy Statement
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={5}>
          <h3 style={{ color: "#ffffff" }}>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@biobridge.com" style={{ color: "#ffffff" }}>
              info@biobridge.com
            </a>
          </p>
          <p>Phone: +1 (954) 266-8246</p>
          <div className="footer-icons" style={{ display: "flex", alignItems: "left", justifyContent: "left", marginTop: "10px" }}>
            <a href="https://www.linkedin.com/company/biobridge/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", marginRight: "15px" }}>
              <LinkedinOutlined className="social-icon" style={{ fontSize: "24px" }} />
            </a>
          </div>
        </Col>

        <Col xs={24} md={4}>
          <div className="footer-icons" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
            <HIPAAIcon
              src={`${process.env.PUBLIC_URL}/assets/hipaa-compliant.svg`}
              alt="HIPAA Compliant"
            />
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        BioBridge Health Status ©2024 Created by BioBridge Team
      </div>
    </Footer>
  );
};

export default AppFooter;
