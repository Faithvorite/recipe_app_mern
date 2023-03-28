import React from 'react'

const Login = () => {
  return (
    <div>
            <div>
        <form>
            <h2>Login</h2>
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
                onChange={(e)=> setUsername(e.target.value)} 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
    </div>
  )
}

export default Login