import React, { useEffect, useState } from "react";
import { List, Pagination } from "antd";
import Incident from "./Incident";
import incidentFiles from "../data/incidents.data";
import "../styles/incidents.css";

function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 3;
  const totalItems = incidentFiles.length;

  useEffect(() => {
    const loadIncidents = (page) => {
      setLoading(true);
      const startIndex = (page - 1) * itemsPerPage;
      const selectedIncidents = incidentFiles.slice(startIndex, startIndex + itemsPerPage);

      // Process incidents to extract status and updatedAt
      const processedIncidents = selectedIncidents.flatMap((incidentGroup) =>
        incidentGroup.incidents.map((incident) => {
          const latestUpdate = incident.updates[incident.updates.length - 1];
          return {
            ...incident,
            status: latestUpdate.status,
            updatedAt: latestUpdate.timestamp,
          };
        }),
      );

      const sortedData = processedIncidents.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
      );
      setIncidents(sortedData);
      setLoading(false);
    };

    loadIncidents(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="custom-loader" />
        </div>
      ) : (
        <>
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
                  updatedAt={item.updatedAt}
                />
              </List.Item>
            )}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={totalItems}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Incidents;
