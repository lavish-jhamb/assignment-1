import React,{useState} from "react";
import { useNavigate } from "react-router-dom"
import { authController } from "../../Api/Auth/Controller";
import "./Index.css";

function Register() {
  const navigate = useNavigate();

  const [contact,setContact]=useState('');

  const handleInput = (e) => {
    const contact = e.target.value;
    setContact(contact)
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await authController.register(contact);
    const isRegistered = response?.data?.success;
    if(isRegistered){
      return navigate('/login')
    }
  }

  return (
    <div className="register">
      <form className="register-form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Contact No.
          </label>
          <input onChange={handleInput} type="text" class="form-control" />
          <div id="emailHelp" class="form-text">
            We'll never share your contact with anyone else.
          </div>
        </div>
        <button onClick={handleRegister} type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;