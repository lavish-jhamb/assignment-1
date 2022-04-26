import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authController } from "../../Api/Auth/Controller";
import "./Index.css";

function Login() {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const contact = e.target.value;
    setContact(contact);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authController
      .login(contact)
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res?.data?.success));
        navigate("/");
      })
      .catch(() => setError('invalid Credentials'));
  };

  return (
    <div className="login">
      <form className="login-form">
        {error && <p>{error}</p>}
        <div className="mb-3">
          <h5 className="form-label">Contact No.</h5>
          <input onChange={handleInput} type="text" className="form-control" />
          <div id="emailHelp" className="form-text">
            We'll never share your contact with anyone else.
          </div>
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;