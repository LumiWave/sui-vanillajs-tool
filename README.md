Here’s the translated version of your **README.md**:

---

# SUI SDK Usage Guide

## Introduction  
This project utilizes **SUI SDK** to provide functionalities within a **Vanilla JavaScript environment**. This repository offers instructions on **building** and **running** the SUI SDK along with sample code.

## Installation and Execution

### 1. **Install Dependencies**  
First, install the necessary dependencies for the project. Execute the following command:

```bash
npm install
```

### 2. **Build (Compile)**  
To build the SUI SDK, use the following command. This will compile the SDK and bundle it into a JavaScript-ready format.

```bash
npm run build
```

### 3. **Run the Server**  
After building the SDK, run the server using the following command:

```bash
npm start
```

### 4. **Check the Results**  
Open your browser and go to [http://localhost:3000](http://localhost:3000) to confirm that the server is running correctly.

## Directory Structure

```
/project-root
│
├── /src              # Source code folder
├── /dist             # Compiled output files
├── /node_modules     # Installed npm packages
├── /public           # HTML, JavaScript, and other static resources
├── package.json      # Project metadata and scripts
└── README.md         # Project usage guide
```

## Dependency Management  
This project requires **Node.js** and **npm**. Make sure Node.js is installed on your system before proceeding.  
[Download Node.js](https://nodejs.org/)

## Scripts  
- **`npm run build`**: Builds the source code.
- **`npm start`**: Starts the server and runs the built SDK.

## Issues and Support  
If you encounter any issues or have suggestions for improvements, please submit them on the [Issue tab](https://github.com/LumiWave/sui-vanillajs-tool/issues).
