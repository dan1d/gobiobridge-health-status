// src/incidentsData.js

const incidentsData = [
  {
    date: "2024-08-01",
    incidents: [
      {
        service: "Cardiac Monitoring",
        severity: "Critical",
        title: "Database Outage During Peak Hours",
        description: "Our database experienced an unexpected outage during peak hours, causing significant delays in data processing. The team upgraded the database server's RAM, which restored normal operations.",
        updates: [
          {
            timestamp: "2024-08-01T14:00:00Z",
            status: "Resolved",
            detail: "The database outage has been resolved."
          },
          {
            timestamp: "2024-08-01T10:00:00Z",
            status: "Investigating",
            detail: "Investigating the root cause of the database outage."
          }
        ]
      }
    ]
  },
  {
    date: "2024-08-03",
    incidents: [
      {
        service: "Data Analytics",
        severity: "Warning",
        title: "Slow Query Performance",
        description: "Some clients reported slow query performance due to a large influx of concurrent requests. The query execution plan was optimized, and performance monitoring was implemented.",
        updates: [
          {
            timestamp: "2024-08-03T16:00:00Z",
            status: "Resolved",
            detail: "Query performance has been optimized."
          },
          {
            timestamp: "2024-08-03T14:00:00Z",
            status: "Monitoring",
            detail: "Monitoring query performance after optimizations."
          }
        ]
      }
    ]
  },
  {
    date: "2024-08-05",
    incidents: [
      {
        service: "Reporting",
        severity: "Critical",
        title: "Report Generation Delays",
        description: "Report generation was delayed due to heavy load on the database caused by a spike in requests. Database processing capacity was increased to clear the backlog.",
        updates: [
          {
            timestamp: "2024-08-05T18:00:00Z",
            status: "Resolved",
            detail: "Backlog cleared and report generation returned to normal."
          },
          {
            timestamp: "2024-08-05T14:00:00Z",
            status: "Investigating",
            detail: "Investigating causes of report generation delays."
          }
        ]
      }
    ]
  },
  {
    date: "2024-08-07",
    incidents: [
      {
        service: "Data Synchronization",
        severity: "Critical",
        title: "Synchronization Issues Due to Database Locking",
        description: "Data synchronization slowed down significantly due to database locking issues caused by long-running transactions. Improved transaction management resolved the issue.",
        updates: [
          {
            timestamp: "2024-08-07T19:00:00Z",
            status: "Resolved",
            detail: "Synchronization issues resolved."
          },
          {
            timestamp: "2024-08-07T16:00:00Z",
            status: "Monitoring",
            detail: "Monitoring synchronization processes after fixes."
          }
        ]
      }
    ]
  },
  {
    date: "2024-08-10",
    incidents: [
      {
        service: "User Authentication",
        severity: "Warning",
        title: "Intermittent Login Failures",
        description: "Users experienced intermittent login failures due to database connection pool exhaustion. Connection pool settings were tuned to stabilize the authentication service.",
        updates: [
          {
            timestamp: "2024-08-10T15:00:00Z",
            status: "Resolved",
            detail: "Login failures resolved by tuning database connections."
          },
          {
            timestamp: "2024-08-10T12:00:00Z",
            status: "Investigating",
            detail: "Investigating causes of intermittent login failures."
          }
        ]
      }
    ]
  },
  {
    date: "2024-08-12",
    incidents: [
      {
        service: "System Monitoring",
        severity: "Critical",
        title: "Monitoring Tool Outage",
        description: "Internal monitoring tools failed to report accurate data due to a database connectivity issue, impacting our ability to manage the system proactively. Database connection settings were fixed.",
        updates: [
          {
            timestamp: "2024-08-12T11:00:00Z",
            status: "Resolved",
            detail: "Monitoring tool outage resolved by fixing database connections."
          },
          {
            timestamp: "2024-08-12T09:00:00Z",
            status: "Investigating",
            detail: "Investigating the monitoring tool outage."
          }
        ]
      }
    ]
  },
  {
    date: "2024-08-14",
    incidents: [
      {
        service: "Real-Time Alerts",
        severity: "Warning",
        title: "Delayed Alert Notifications",
        description: "There were delays in sending real-time alerts to clients due to a bottleneck in the database caused by a surge in alert generation. Optimized database operations to mitigate future issues.",
        updates: [
          {
            timestamp: "2024-08-14T13:00:00Z",
            status: "Resolved",
            detail: "Real-time alert delays resolved and operations optimized."
          },
          {
            timestamp: "2024-08-14T11:00:00Z",
            status: "Monitoring",
            detail: "Monitoring alert notification system for stability."
          }
        ]
      }
    ]
  }
];

export default incidentsData;
