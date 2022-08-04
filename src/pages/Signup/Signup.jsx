import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";


const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="container flex-shrink-0">
      <h1 className="text-white text-center">AniApp</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  );
};

export default Signup;
