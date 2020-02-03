import React, { useState } from 'react';
// import axios from 'axios';

const Test = () => {
  const [users, setUsers] = useState({ username: '', password: '' })

  const handleChange = e => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <label>Username</label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleChange}
          value={users.username}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          value={users.password}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}

export default Test;