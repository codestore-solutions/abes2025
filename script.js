document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register");
    const message = document.getElementById("message");
    const employeeTable = document.getElementById("employee-table");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
      };
  
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          message.textContent = "form successfull !";
          form.reset();
        } else {
          
        }
      } catch (error) {
        console.error(error);
      }
    });
  
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const employees = await response.json();
  
        employees.forEach((employee) => {
          const row = document.createElement("tr");
  
          row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.username}</td>
          `;
  
          employeeTable.appendChild(row);
        });
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  });
  