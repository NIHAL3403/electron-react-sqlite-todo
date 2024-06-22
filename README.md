# Electron React SQLite Todo

![Electron React SQLite Todo](https://camo.githubusercontent.com/f2b96de822b2c58c5c24a667b2f017101410ef271eadc9abf3d3954e46a1b611/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323438382f312a326e744b7456426f7747644143736f3647636d7931412e6a706567)

This is an Electron application that uses React and SQLite for managing a todo list. This project includes end-to-end (E2E) testing using WebdriverIO (WDIO) and unit testing with Mocha, Chai, and Sinon.

## Table of Contents

- [Setup](#setup)
- [Running the App](#running-the-app)
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NIHAL3403/electron-react-sqlite-todo.git
   cd electron-react-sqlite-todo

2. **Install dependencies:**
npm install --legacy-peer-deps

Running the App

To start the Electron app, run:
npm start

**Testing**

Unit Tests
Unit tests are located in the 'test/unit' directory. They test individual components and modules of the application.

1.Run unit tests:
npm run test:unit

2.Unit Test Details:

-Database Tests: Tests for the database initialization and query functions.
-'should retrieve todos from database': Ensures that the database can retrieve todos correctly.

**End-to-End Tests**
End-to-end tests simulate user interactions and verify the application flow. These tests are located in the test/e2e directory.

1.Setup WDIO:

Ensure that WDIO is configured properly. Configuration file wdio.conf.js should be present.

2.Run end-to-end tests:
npm run test:e2e

3.E2E Test Details:

App Navigation: Tests navigation between different windows.
Todo Functionality: Tests adding, editing, and deleting todos.
UI Interactions: Tests various UI interactions to ensure the interface behaves correctly.

**Project Structure**

# Project Structure

- **README.md**: The main documentation file for the project.
- **package.json**: Configuration file for npm dependencies and scripts.
- **electron-react-sqlite-todo/**
  - **src/**
    - **db.js**: Contains SQLite database initialization and query functions.
    - **components/**: Directory for React components used in the application.
  - **test/**
    - **unit/**
      - **db.test.js**: Unit tests specifically for the database functions.
    - **e2e/**
      - **app.e2e.js**: End-to-end (E2E) tests for the Electron app's functionality.
  - **node_modules/**: Directory where npm installs dependencies.
  - **images/**
    - **app-screenshot.png**: Example image file related to the project.
  - **LICENSE**: File containing details about the licensing terms of the project.




**Contributing**

1.Fork the repository.
2.Create a new branch: git checkout -b my-branch-name.
3.Make your changes and commit them: git commit -m 'Add some feature'.
4.Push to the branch: git push origin my-branch-name.
5.Submit a pull request.

**License**

This project is licensed under the MIT License.

