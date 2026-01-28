import React, { useState } from 'react';

const Login = () => {
  const [userData,setUserData] = useState({
  email:'',
  password:''})

  const handleChange = (e) => {
    setUserData((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(userData);
  }
  

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type={userData.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter the email" />
            <br/><br/>
        </div>

        
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter the password" />
                    
           <br /><br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;