import React from "react";
import { Card, Tag } from "antd";
import { ExclamationCircleOutlined, CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";

const getSeverityTag = (severity) => {
  switch (severity) {
    case "Resolved":
      return <Tag icon={<CheckCircleOutlined />} color="success">Resolved</Tag>;
    case "Warning":
      return <Tag icon={<WarningOutlined />} color="warning">Warning</Tag>;
    case "Critical":
      return <Tag icon={<ExclamationCircleOutlined />} color="error">Critical</Tag>;
    default:
      return <Tag>{severity}</Tag>;
  }
};

const Incident = ({ title, severity, status, description, updatedAt }) => {
  return (
    <Card title={title} style={{ marginBottom: "20px" }}>
      <p><strong>Severity:</strong> {getSeverityTag(severity)}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Updated At:</strong> {new Date(updatedAt).toLocaleString()}</p>
    </Card>
  );
};

export default Incident;
