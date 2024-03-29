
const addEmployeesBtn = document.querySelector('#add-employees-btn');


employeesArray = []


// GATHERING EMPLOYEE DATA 
const collectEmployees = function() {
 
  let employee = {firstName:"", lastName:"", salary:0} 

  function continueInput() {
   
   employee = {firstName:"", lastName:"", salary:0} 

    employee.firstName = prompt("What is your FIRST name?");
    employee.lastName = prompt("What is your LAST name?");
    employee.salary = parseFloat(prompt("What is your SALARY?(use numbers)")); // parseInt()  "1234.56"
    
    if (isNaN (employee.salary)){
     alert("entry number was not a number, defaulted to zero")
    employee.salary = 0
  }
  employeesArray.push (employee)
  }
  
continueInput();
console.log(employeesArray);



// OPTION TO ADD ANOTHER EMPLYEE PLUS DATA
let addanother = confirm ("would you like to addd another employee?")
console.log(addanother);

while (addanother === true){
  continueInput();
  addanother = confirm ("would you like to addd another employee?")
}
  return employeesArray;
}



// CALCULATING AVERAGE SALARY AND DISPLAY IN THE LOG
const displayAverageSalary = function CalculateAverageOfArray(employeesArray) {
 
 console.log(employeesArray);
 
 let total = 0  
  for (let i=0; i < employeesArray.length; i++){
    total += employeesArray[i].salary;}
    let avg= total / employeesArray.length;

  console.log(`The average salary is ${avg}`)
}



// SELECTING RANDOM EMPLYEE AND DISPLAYING IN THE LOG
const getRandomEmployee = function(employeesArray) {

  console.log("----Random Employee------")
  
  var randomIndex = Math.floor(Math.random() * employeesArray.length) 
  var randEmp = employeesArray[randomIndex]
  console.log(`The random employee is ${randEmp.firstName} ${randEmp.lastName}`)
}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);
// var randomEmp = getRandomEmployee(employees)
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
