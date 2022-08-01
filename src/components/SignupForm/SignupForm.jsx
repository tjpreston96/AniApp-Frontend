import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });
  const [photoData, setPhotoData] = useState({});

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(formData, photoData.photo);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  const { name, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  };

  return (
    <div className="container justify-content-center col-9 col-sm-8 col-md-6 col-xxl-4 ">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3 className="mb-3 fw-normal text-center text-white">
          Please sign up
        </h3>

        <div className="form-floating ">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating ">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating ">
          <input
            type="password"
            className="form-control"
            id="floatingPass"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPass">Password</label>
        </div>
        <div className="form-floating ">
          <input
            type="password"
            className="form-control"
            id="floatingPasswordConf"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
          <label htmlFor="floatingPasswordConf">Confirm Password</label>
        </div>
        <div className="mt-1">
          <input
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>

        <button
          className="w-100 btn btn-lg btn-info mt-3"
          type="submit"
          disabled={isFormInvalid()}
        >
          Sign Up
        </button>
      </form>
      <Link to="/" className="w-100 btn btn-lg btn-secondary mt-1 ">
        Cancel
      </Link>
      <p className="text-muted text-center">
        Already have an account? <Link to="/login">Sign in</Link>{" "}
      </p>
    </div>
  );
};

export default SignupForm;
