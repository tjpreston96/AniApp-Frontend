import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="container">
      <h1 className="text-white text-center">AniApp</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
  );
};

export default LoginPage;
