// Handle form submission to register user
const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    const userData = { name, email, username };

    // POST request to the API to register the user
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
        const messageElement = document.getElementById('responseMessage');
        messageElement.textContent = `User registered with ID: ${data.id}`;

        // Add new user to the employee list
        addEmployeeToList(data);
    })
    .catch((error) => {
        console.error('Error registering user:', error);
        const messageElement = document.getElementById('responseMessage');
        messageElement.textContent = 'Error registering user!';
    });
};

// Function to add the new employee to the employee list (in the UI)
const addEmployeeToList = (employee) => {
    const employeesContainer = document.getElementById('employees');

    const employeeCard = document.createElement('div');
    employeeCard.classList.add('employee-card');
    employeeCard.innerHTML = `
        <h3>${employee.name}</h3>
        <p>Email: ${employee.email}</p>
        <p>Username: ${employee.username}</p>
    `;

    employeesContainer.appendChild(employeeCard);
};

// Fetch and display employee list
const fetchEmployees = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((employees) => {
        const employeesContainer = document.getElementById('employees');
        employeesContainer.innerHTML = ''; // Clear previous employee data

        // Loop through employees and display their details
        employees.forEach((employee) => {
            const employeeCard = document.createElement('div');
            employeeCard.classList.add('employee-card');
            employeeCard.innerHTML = `
                <h3>${employee.name}</h3>
                <p>Email: ${employee.email}</p>
                <p>Username: ${employee.username}</p>
            `;
            employeesContainer.appendChild(employeeCard);
        });
    })
    .catch((error) => {
        console.error('Error fetching employees:', error);
    });
};

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);

// Fetch employee data on page load
window.onload = () => {
    fetchEmployees();
};
