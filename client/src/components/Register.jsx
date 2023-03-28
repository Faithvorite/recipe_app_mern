import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <form>
            <h2>Register</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="text" 
                id="password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)} 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
    
  )
}

export default Register