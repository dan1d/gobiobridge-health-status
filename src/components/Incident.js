import React from "react";
import { Card } from "antd";

const Incident = ({ title, severity, status, description, updatedAt }) => {
  return (
    <Card title={title} style={{ marginBottom: "20px" }}>
      <p><strong>Severity:</strong> {severity}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Updated At:</strong> {new Date(updatedAt).toLocaleString()}</p>
    </Card>
  );
};

export default Incident;
