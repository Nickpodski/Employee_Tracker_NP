const mysql = require('mysql')
const express = require('express')
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({

host: 'localhost',
port: 3306,
user: 'root',
password: 'Develop07Root',
database: 'employeeDB',
});

connection.connect(err => {
    if(err) throw err;
    console.log("Connected as id" + connection.threadId);
    mainMenu();
});

const mainMenu = () => {
  inquirer.prompt(
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'View all Employees by Department',
        'View All Employees by Role',
        'Add Employee',
        'Add Department',
        'Add Role',
        'Update Employee Role',
        'Exit'
      ]
    }
  )
  .then((res) => {
    switch (res.options) {
      case 'View All Employees':
        viewEmployees();
        break;
      case 'View all Employees by Department':
        employeesDepartment();
        break;
      case 'View All Employees by Role':
        emplyeesRole();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'Add Department':
        addDepartment();
        break;
      case 'Add Role':
        addRole();
        break;
      case 'Update Employee Role':
        updateRole();
        break;
      case 'Exit':
        connection.end();
        break;
    }
  })
}

const viewEmployees = () => {

}

const employeesDepartment = () => {
  
}

const emplyeesRole = () => {
  
}

const addDepartment = () => {
  
}

const addEmployee = () => {
  
}

const addRole = () => {
  
}

const updateRole = () => {
  
}

