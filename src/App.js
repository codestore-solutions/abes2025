import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  const [newEmployee, setNewEmployee] = useState(null);

  const handleAddEmployee = (employee) => {
    setNewEmployee(employee);
  };

  return (
    <div>
      <RegisterForm onAddEmployee={handleAddEmployee} />
      <EmployeeList newEmployee={newEmployee} />
    </div>
  );
};

export default App;
