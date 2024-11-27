import { Link } from "react-router-dom";
import "./styles.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = ({setAuth}) => {

  const navigate = useNavigate();

  const [LoginPayload , setLoginPayload] = useState({
    email:"",
    password:"",
  });

  const handleLoginPayload = (event) => {

    const {name , value} = event.target;
    setLoginPayload((prevPayload) => ({
      ...prevPayload, 
      [name]: value
    }));
    
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    

    const formdata = {
      
      email : LoginPayload.email,
      password : LoginPayload.password
    }

    try {
      const url = `http://localhost:4444/login`;
      const response = await axios.post(url, formdata);
  
      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem("jwt", response.data.token);
        setLoginPayload({
          email: "",
          password: "",
        });
        setAuth(true);
        
        // navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred during registration.',error);
    }
    
  }
  
  

  return (
    <div className="flex justify-center items-center  w-full min-h-screen">
      <div className="form-box">
        <h1 className="title">Login</h1>
        <form method="post" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input onChange={handleLoginPayload} type="email" id="email" name="email" value={LoginPayload.email} placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input onChange={handleLoginPayload} type="password" id="password" name="password" value={LoginPayload.password} placeholder="Enter your password" />
          </div>
          <button  className="btn">Login</button>
        </form>
        <p className="text">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
