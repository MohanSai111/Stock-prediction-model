import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[loading,setLoading]= useState(false);
    const{isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
    const navigate= useNavigate();

    const handlelogin= async(e)=>{
        e.preventDefault();
        setLoading(true);
        const userData={
            username,password
        }
        console.log(userData);

      try{
     const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
     localStorage.setItem('accesstoken',response.data.access)
     localStorage.setItem('refreshtoken',response.data.refresh)
     console.log('Login SuccessFul');
     setIsLoggedIn(true)
     navigate('/')
      }catch{
        console.log("Login Error");
      }finally{
        setLoading(false);
      }
    }

  return (
    <>
       <div className="container">
        <div className="row">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Login to our portal</h3>
            <form onSubmit={handlelogin}>
              <div className='mb-3'>
                <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
              </div>

              <div className="mb-3">
                <input type="password" className="form-control mb-5" placeholder="Set password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
              {loading?(
                <button type="submit" className="btn btn-info d-block mx-auto" disabled>Loggingin</button>
              ):(
                <button type="submit" className="btn btn-info d-block mx-auto">login</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
