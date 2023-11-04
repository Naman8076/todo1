import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    // name:"",
    email: "",
    password: "",
  });

  const loginhandler = (e) => {
    e.preventDefault();
   const loggedUser= JSON.parse(localStorage.getItem("user"));
   if(input.email===loggedUser.email && input.password===loggedUser.password)
   {
    localStorage.setItem("logeduser",true);
    navigate("/");
   }
   else{
   alert("please enter correct email and password")
   }
  };

  return (
    <>
      <div className="main">
        <h1>Login</h1>

        <form className="form-container" onSubmit={loginhandler}>
          <label className="label-element" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            //  value={na}
            className="input-container"
          />
          <label className="label-element" htmlFor="">
            password
          </label>
          <input
           type="password"
            name="password"
            value={input.password}
            className="input-container"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
            <div className="btn-div">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
       
      </div>
    </>
  );
};

export default Login;
