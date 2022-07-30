import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const ChangePasswordForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pw: "",
    newPw: "",
    newPwConf: "",
  });

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.changePassword(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  const { pw, newPw, newPwConf } = formData;

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf);
  };

  return (
    <div className="container justify-content-center col-9 col-sm-8 col-md-6 col-xxl-4 ">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3 className="mb-3 fw-normal text-center text-white">
          Update credentials
        </h3>

        <div className="form-floating ">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            value={pw}
            name="pw"
            onChange={handleChange}
          />
          <label htmlFor="floatingName">Current Password</label>
        </div>
        <div className="form-floating ">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            value={newPw}
            name="newPw"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">New Password</label>
        </div>
        <div className="form-floating ">
          <input
            type="password"
            className="form-control"
            id="floatingPass"
            value={newPwConf}
            name="newPwConf"
            onChange={handleChange}
          />
          <label htmlFor="floatingPass">Confirm New Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-info mt-3"
          type="submit"
          disabled={isFormInvalid()}
        >
          Change Password
        </button>
      </form>
      <Link to="/" className="w-100 btn btn-lg btn-secondary mt-1 ">
        Cancel
      </Link>
    </div>
  );
};

export default ChangePasswordForm;
