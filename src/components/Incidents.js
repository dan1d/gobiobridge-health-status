import React, { useEffect, useState } from "react";
import { List, Pagination } from "antd";
import Incident from "./Incident";
import { incidentFiles } from "../incidents.data";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const totalItems = incidentFiles.length;

  useEffect(() => {
    const loadIncidents = async (page) => {
      try {
        const startIndex = (page - 1) * itemsPerPage;
        const filesToLoad = incidentFiles.slice(startIndex, startIndex + itemsPerPage);

        const dataPromises = filesToLoad.map((file) =>
          fetch(`${process.env.PUBLIC_URL}/incidents/${file}`).then((res) => res.json())
        );

        const data = await Promise.all(dataPromises);
        const sortedData = data.flat().sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setIncidents(sortedData);
      } catch (error) {
        console.error("Error loading incidents:", error);
      }
    };

    loadIncidents(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={incidents}
        renderItem={(item) => (
          <List.Item>
            <Incident
              title={item.title}
              severity={item.severity}
              description={item.description}
              updates={item.updates}
            />
          </List.Item>
        )}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={totalItems}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Incidents;
