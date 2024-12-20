document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const userData = {
        name: name,
        username: username,
        email: email,
        phone: phone
    };

    // POST request to register the user
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('User  registered:', data);
        fetchEmployees(); 
    })
    .catch(error => console.error('Error:', error));
});

// Function to fetch and display employees
function fetchEmployees() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const employeeList = document.getElementById('employeeList');
        employeeList.innerHTML = '<h2>Employee List</h2>';
        data.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.innerHTML = `
                <strong>${employee.name}</strong><br>
                Username: ${employee.username}<br>
                Email: ${employee.email}<br>
                Phone: ${employee.phone}<br>
                <hr>
            `;
            employeeList.appendChild(employeeDiv);
        });
    })
    .catch(error => console.error('Error fetching employees:', error));
}
