import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';


  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  
  const handleAddUser = (e) => {
    e.preventDefault();
    if (name && email) {
      const newUser = {
        name,
        email,
      };

      axios.post(apiUrl, newUser)
        .then(response => {
         
          setUsers([...users, response.data]);
          setName('');
          setEmail('');
        })
        .catch(error => {
          console.error('Error adding the user:', error);
        });
    }
  };

  return (
    <div className="App">
      <h1>User List</h1>

      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
