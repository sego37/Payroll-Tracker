// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



employeesArray = []




// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employee = {firstName:"", lastName:"", salary:0} 

  
  function continueInput() {
   


    employee.firstName = prompt("What is your FIRST name?");
    employee.lastName = prompt("What is your LAST name?");
    employee.salary = parseFloat(prompt("What is your SALARY?(use numbers)")); // parseInt()  "1234.56"
    
  }
  
continueInput();
console.log(employee)
if (isNaN (employee.salary)){
  alert("Please enter a numerical number")
  continueInput();
  
}

employeesArray.push (employee)

console.log(employeesArray);

let addanother = confirm ("would you like to addd another employee?")
console.log(addanother);

if (addanother === true){
  continueInput();

}else {
  return employeesArray;

}

}






// Display the average salary
const displayAverageSalary = function CalculateAverageOfArray(employeesArray) {
  // TODO: Calculate and display the average salary
 console.log(employeesArray);
 
 let total = 0  

  for (let i=0; i < employeesArray.length; i++){
    total += employeesArray[i].salary;}
    let avg= total / employeesArray.length;

  console.log(total,avg)
}






// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  console.log("----Random Employee------")
  console.log(employeesArray[Math.floor(Math.random() * employeesArray.length)]);

  var randomIndex = Math.floor(Math.random() * employeesArray.length) //var variable - 
  var randEmp = employeesArray[randomIndex]
  console.log(randEmp)
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
