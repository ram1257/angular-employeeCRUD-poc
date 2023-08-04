# Angular Employee CRUD Application

This is a simple Employee CRUD (Create, Read, Update, Delete) application built using Angular. It interacts with a JSON web server to manage employee data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js(18.16.1) and npm installed on your development machine.
- Angular CLI installed globally: `npm install -g @angular/cli`
- JSON web server installed globally: `npm install -g json-server`

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/ram1257/angular-employeeCRUD-poc.git

2. Navigate to the project directory
    ```bash
    cd angular-crud-app 
3. Install dependencies:
    ```bash
    npm install
4. Start the JSON web server for employee data:
    ```bash
    json-server --watch db.json
5. Start the Angular development server:
    ```bash
    ng serve
    
## Features
- **Add Employee:** Click the "Add Employee" button to add a new employee to the list.
- **Update Employee:** Click the "Edit" button next to an employee to update their information.
- **Delete Employee:** Click the "Delete" button next to an employee to remove them from the list.
