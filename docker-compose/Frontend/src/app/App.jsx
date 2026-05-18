import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
const [users, setusers] = useState([])

useEffect(() => {

fetch("/api/users")
    .then((response) => response.json())
    .then(data => setusers(data))
    .catch(error => console.error('Error fetching users:', error));
}, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App