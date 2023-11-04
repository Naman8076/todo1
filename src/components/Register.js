import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  //  to store
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <>
      <div className="main">
        <h1>Register</h1>

        <form className="form-container" onSubmit={handleSubmit}>
          <label className="label-element" htmlFor="">
            Username
          </label>
          <input
            type="name"
            name="name"
            value={input.name}
            className="input-container"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label className="label-element" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={input.email}
            className="input-container"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label className="label-element" htmlFor="">
            password
          </label>
          <input
            type="password"
            name="password"
            className="input-container"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <div className="btn-div">
            <button className="btn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
