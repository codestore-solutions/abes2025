import React, { useState, useEffect } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [employees, setEmployees] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Register
        </button>
      </form>

      <h2>Employee List</h2>
      <div>
        {employees.map((employee) => (
          <div
            key={employee.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <p>
              Website:{" "}
              <a
                href={http://${employee.website}}
                target="_blank"
                rel="noreferrer"
              >
                {employee.website}
              </a>
            </p>
            <p>
              Address:{" "}
              {${employee.address.street}, ${employee.address.suite}, ${employee.address.city}, ${employee.address.zipcode}}
            </p>
            <p>Company: {employee.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterForm;
