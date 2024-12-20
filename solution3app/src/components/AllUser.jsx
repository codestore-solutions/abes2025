import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <center>
            <table >
                <thead>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                </thead>
                <tbody >

                    {users.map((e) => (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.username}</td>
                            <td>{e.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
    );
};

export default AllUser;




