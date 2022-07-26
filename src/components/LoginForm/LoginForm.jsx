import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className=" col-8 col-sm-6 col-lg-5 col-xxl-4"
    >
      <div className="">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="text"
            autoComplete="off"
            className="form-control "
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="password"
            autoComplete="off"
            className="form-control "
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-info me-3">Log In</button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
