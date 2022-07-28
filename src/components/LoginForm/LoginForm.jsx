import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const { email, pw } = formData;
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

  const isFormInvalid = () => {
    return (email && pw) === "";
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="container col-9 col-sm-8 col-md-6 col-xxl-4 justify-content-center"
      >
        <h3 className="mb-3 fw-normal text-center text-white">
          Please sign in
        </h3>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-info mt-2 mb-1"
          type="submit"
          disabled={isFormInvalid()}
        >
          Sign in
        </button>
      </form>
      <p className="text-muted text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default LoginForm;
