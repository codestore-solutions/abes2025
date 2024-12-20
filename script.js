document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const successMessage = document.getElementById("successMessage");
    const employeeList = document.getElementById("employeeList");
  
    // Handle form submission
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
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
          successMessage.classList.remove("hidden");
          setTimeout(() => successMessage.classList.add("hidden"), 3000);
          registerForm.reset();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    });
  
    // Fetch and display employees
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const employees = await response.json();
  
        employeeList.innerHTML = employees
          .map(
            (employee) => `
            <div class="employee-card">
              <h3>${employee.name}</h3>
              <p>Email: ${employee.email}</p>
              <p>Phone: ${employee.phone}</p>
            </div>
          `
          )
          .join("");
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
  
    fetchEmployees();
  });
  