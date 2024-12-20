
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name,
        email,
        password
      });

      alert(`Registration successful! Response ID: ${response.data.id}`);
      document.getElementById('registerForm').reset();
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  });

  document.getElementById('loadEmployees').addEventListener('click', async function() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const employees = response.data;

      const tbody = document.getElementById('employeeTable').querySelector('tbody');
      tbody.innerHTML = '';

      employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.username}</td>
          <td>${employee.email}</td>
        `;
        tbody.appendChild(row);
      });
    } catch (error) {
      alert('An error occurred while loading employees.');
      console.error(error);
    }
  });