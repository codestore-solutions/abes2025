document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Registration successful!');
        addEmployeeToList({ name: name, email: email });  // Add the new user directly to the list
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    loadEmployees();  // Load the list of employees when the page loads
});

function loadEmployees() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';  // Clear the current list
            data.forEach(employee => {
                addEmployeeToList(employee);
            });
        })
        .catch(error => console.error('Error fetching employee data:', error));
}

function addEmployeeToList(employee) {
    const employeeList = document.getElementById('employeeList');
    const employeeItem = document.createElement('div');
    employeeItem.className = 'employee-item';
    employeeItem.innerText = `${employee.name} - ${employee.email}`;
    employeeList.appendChild(employeeItem);
}
