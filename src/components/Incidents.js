import React, { useEffect, useState } from "react";
import { List } from "antd";
import Incident from "./Incident";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const loadIncidents = async () => {
      try {
        const dateFolder = "2024-08-30";
        const fileNames = ["1.json"]; // Add more files as needed

        const dataPromises = fileNames.map((fileName) =>
          fetch(`${process.env.PUBLIC_URL}/incidents/${dateFolder}/${fileName}`).then((res) => res.json())
        );

        const data = await Promise.all(dataPromises);
        setIncidents(data);
      } catch (error) {
        console.error("Error loading incidents:", error);
      }
    };

    loadIncidents();
  }, []);

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={incidents}
      renderItem={(item) => (
        <List.Item>
          <Incident
            title={item.title}
            severity={item.severity}
            status={item.status}
            description={item.description}
            updatedAt={item.updated_at}
          />
        </List.Item>
      )}
    />
  );
};

export default Incidents;
