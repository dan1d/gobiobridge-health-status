
# BioBridge Health Status

BioBridge Health Status is a static React application designed to display the health status and incident reports for BioBridge's services. The application is built with React and Ant Design and is intended to be deployed on GitHub Pages.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Adding a New Incident](#adding-a-new-incident)
- [Building the Project](#building-the-project)
- [Deploying to GitHub Pages](#deploying-to-github-pages)

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. This project requires Node.js version `v20.17.0`.
- **npm**: npm is the default package manager for Node.js. It should be installed automatically with Node.js.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dan1d/gobiobridge-health-status.git
   cd gobriobridge-health-status
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the development server and run the project locally:

```bash
npm start
```

The application will be available at `http://localhost:3000` in your web browser.

## Adding a New Incident

Incidents are stored directly in the source code within the `src/data/incidents.data.js` file as an array of incident objects. Each incident corresponds to a specific date.

### Steps to Add a New Incident

1. **Open the `src/data/incidents.data.js` File**

   Locate the `incidentsData` array within the file.

2. **Add a New Incident Object**

   Add a new object to the `incidentsData` array for the new incident. The structure of the incident object is as follows:

   ```javascript
   const incidentsData = [
     {
       date: "2024-09-01",
       incidents: [
         {
           service: "Cardiac Monitoring",
           severity: "High",
           title: "API Outage",
           description: "The Cardiac Monitoring API was unavailable for 3 hours on September 1, 2024. The issue has been resolved.",
           updates: [
             {
               timestamp: "2024-09-01T15:00:00Z",
               status: "Resolved",
               detail: "The API outage has been resolved."
             },
             {
               timestamp: "2024-09-01T12:00:00Z",
               status: "Investigating",
               detail: "Investigating the cause of the API outage."
             }
           ]
         }
       ]
     },
     // Add more incidents as needed
   ];
   ```

### Incident Attributes

- **date**: The date of the incident (formatted as `YYYY-MM-DD`).
- **service**: The name of the service affected.
- **severity**: The severity level of the incident (e.g., Low, Medium, High, Critical).
- **title**: A brief title describing the incident.
- **description**: A detailed description of the incident.
- **updates**: An array of update objects, each containing:
  - **timestamp**: The timestamp for when the update was made (formatted in ISO 8601).
  - **status**: The current status of the incident (e.g., Investigating, Resolved, Monitoring).
  - **detail**: Detailed information about the update.

## Building the Project

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build of the application in the `build` directory.

## Deploying to GitHub Pages

To deploy the project to GitHub Pages:

1. **Install the gh-pages Package**

   If you haven't already, install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add the `homepage` Field to `package.json`**

   Open `package.json` and add the following field:

   ```json
   "homepage": "https://dan1d.github.io/gobiobridge-health-status"
   ```

3. **Add Deployment Scripts**

   In `package.json`, add the following scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy the Application**

   To deploy the application, run:

   ```bash
   npm run deploy
   ```

This command will build the project and push the contents of the `build` directory to the `gh-pages` branch of your repository.

Your site should now be live at `https://dan1d.github.io/gobiobridge-health-status`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
