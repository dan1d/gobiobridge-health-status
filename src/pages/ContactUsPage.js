import React from "react";
import { Form, Input, Button, Layout, Row, Col, Card } from "antd";

const { Content } = Layout;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Layout>
      <Content style={{ padding: "50px", maxWidth: "1000px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {/* Contact Information */}
          <Col xs={24} md={8}>
            <Card
              style={{
                backgroundColor: "#001529",
                color: "#ffffff",
                borderRadius: "10px",
              }}
              bodyStyle={{ padding: "20px" }}
            >
              <h2 style={{ color: "#ffffff" }}>Contact Us</h2>
              <p>
                Have any questions? Just fill out this quick form, and our team
                will be in touch ASAP.
              </p>
              <div style={{ marginTop: "40px" }}>
                <h3>Go Bio Bridge</h3>
                <p>
                  Bio Bridge Solutions Inc, 134 South Dixie Highway, Suite 209,
                  Hallandale Beach, FL, 33009, United States
                </p>
                <p>Phone: +1 (954) 266-8246</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@biobridge.com" style={{ color: "#ffffff" }}>
                    info@biobridge.com
                  </a>
                </p>
              </div>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col xs={24} md={16}>
            <h1>Get in Touch</h1>
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[{ required: true, message: "Please enter your first name" }]}
                  >
                    <Input placeholder="Type Here" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[{ required: true, message: "Please enter your last name" }]}
                  >
                    <Input placeholder="Type Here" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="companyName" label="Company Name">
                <Input placeholder="Type Here" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email address", type: "email" },
                ]}
              >
                <Input placeholder="Type Here" />
              </Form.Item>
              <Form.Item name="phoneNumber" label="Phone Number">
                <Input placeholder="Type Here" />
              </Form.Item>
              <Form.Item name="comments" label="Comments">
                <Input.TextArea rows={4} placeholder="Example Text" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContactUs;
