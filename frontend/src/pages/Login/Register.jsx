import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [registerPayload , setRegsiterPayload] = useState({
    username : "",
    email:"",
    password:"",
    cpassword : "",
  });

  const handleRegisterPayload = (event) => {

    const {name , value} = event.target;
    setRegsiterPayload((prevPayload) => ({
      ...prevPayload, 
      [name]: value
    }));
    
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if(registerPayload.password != registerPayload.cpassword){
      toast.error("Password Didn't Match.");
      return;
    }

    const formdata = {
      username : registerPayload.username,
      email : registerPayload.email,
      password : registerPayload.password
    }

    try {
      const url = `http://localhost:4444/register`;
      const response = await axios.post(url, formdata);
  
      if (response.status === 200) {
        toast.success(response.data.message);
        setRegsiterPayload({
          username: "",
          email: "",
          password: "",
          cpassword:""
        });
        
        navigate("/login");
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
        <h1 className="title">Register</h1>
        <form method="post" onSubmit={handleRegister}>
          <div className="input-group">
            <label>Full Name</label>
            <input onChange={handleRegisterPayload} value={registerPayload.name} type="text" id="username" name="username" placeholder="Enter your full name" required/>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input onChange={handleRegisterPayload} value={registerPayload.email} type="email" id="email" name="email" placeholder="Enter your email" required/>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input onChange={handleRegisterPayload} value={registerPayload.password} type="password" id="password" name="password" placeholder="Enter your password" required/>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input onChange={handleRegisterPayload} value={registerPayload.cpassword} type="password" id="cpassword" name="cpassword" placeholder="Confirm your password" required/>
          </div>
          <button className="btn">Register</button>
        </form>
        <p className="text">
          Already have an account?{" "}
          <Link to="/login" className="link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
