# Automation Supporting Team - KML Processing Tools


## Overview
The **Automation Supporting Team** application is a React-based web suite designed to streamline GIS data management and automate the processing of KML files. It provides targeted utilities for editing, validating, and calculating data related to optical fiber network components and cable pathways.

The application includes user authentication and offers a dashboard of distinct tools tailored for network planning, data accuracy, and spatial analysis.

## Live Application
The project is hosted and accessible via GitHub Pages: 
👉 **[Automation Supporting Team - Live Demo](https://princeyadav78.github.io/Automation-Supporting-Team/)**

## Key Features & Tools

The application features several dedicated modules (accessible via the main routing interface) to handle complex KML manipulations:

* **KML Data Filler (`/kml-data-filler`)**: Automates the population of missing attributes and metadata for spatial nodes and network elements.
* **KML Cable Snapper (`/kml-cable-snapper`)**: A precision tool to mathematically snap optical cable vectors to their correct termination points (like ODFs and FATs) or splicing enclosures, ensuring topologically correct network maps.
* **KML Cable Length Filler (`/kml-cable-length-filler`)**: Automatically calculates the geographical distances of cable spans within the KML and populates the respective length attributes.
* **KML P2P Data (`/kml-p2p-data`)**: Extracts and generates Point-to-Point (P2P) connection data, detailing the origin and destination of network links.
* **KML Verifier (`/kml-verifier`)**: Runs automated checks against the KML files to validate structural integrity, identify overlapping routes, or flag missing attributes before finalized export to software like QGIS.
* **NESA Generator (`/nesa-generator`)**: Compiles the processed spatial data into NESA-compliant formats or reports.

## Tech Stack
* **Frontend**: React.js 
* **Routing**: React Router DOM (Single Page Application architecture)
* **Build Tool**: Vite / Webpack (Implied by module preloading)
* **State Management**: React Hooks (`useState`)
* **Local Storage**: Utilizes `ast_user` token for basic session management and authentication gating.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and npm installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/PrinceYadav78/Automation-Supporting-Team.git](https://github.com/PrinceYadav78/Automation-Supporting-Team.git)
