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
   cd gobiobridge-health-status
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

Incidents are stored as JSON files in the `public/incidents` directory. Each incident corresponds to a specific date and is stored in a folder with the date as the name (formatted as `YYYY-MM-DD`).

### Steps to Add a New Incident

1. **Create a Directory for the Date**

   Navigate to the `public/incidents` directory and create a new folder named after the incident date. For example, for an incident on September 1, 2024:

   ```bash
   mkdir -p public/incidents/2024-09-01
   ```

2. **Create the Incident JSON File**

   Inside the new folder, create a `1.json` file (or another number if there are multiple incidents on the same day). This file should contain an array of incident objects. Here's an example:

   ```json
   [
     {
       "service": "Cardiac Monitoring",
       "severity": "High",
       "title": "API Outage",
       "description": "The Cardiac Monitoring API was unavailable for 3 hours on September 1, 2024. The issue has been resolved.",
       "status": "Resolved",
       "updated_at": "2024-09-01T15:00:00Z"
     }
   ]
   ```

### Incident Attributes

- **service**: The name of the service affected.
- **severity**: The severity level of the incident (e.g., Low, Medium, High, Critical).
- **title**: A brief title describing the incident.
- **description**: A detailed description of the incident.
- **status**: The current status of the incident (e.g., Investigating, Resolved, Monitoring).
- **updated_at**: The timestamp for when the incident was last updated (formatted in ISO 8601).

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

2. **Add the `homepage` Field to `package.json`

   Open `package.json` and add the following field:

   ```json
   "homepage": "https://yourusername.github.io/gobiobridge-health-status"
   ```

   Replace `yourusername` with your actual GitHub username.

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

Your site should now be live at `https://yourusername.github.io/gobiobridge-health-status`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.