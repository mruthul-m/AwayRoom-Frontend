import { useState } from "react";
import "./login.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

const Login = () => {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text: string) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="w-full flex justify-center items-center h-screen flex-col">
      <div
        className={containerClass}
        id="container"
        style={{ width: "40vw", height: "50vh" }}
      >
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-2xl font-bold  tracking-wider m-2">
                Welcome Back!
              </h1>
              <p className="text-xs font-light m-2">
                To keep connected with us please login with your personal info
              </p>
              <button
                className=" border-white py-2 px-6 mt-3 rounded-3xl font-semibold "
                style={{ fontSize: ".6rem", borderWidth: "1px" }}
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                SIGN IN
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="text-2xl font-bold tracking-wider">
                Hello, Friend!
              </h1>
              <p className="text-xs font-light m-2">
                Enter your personal details and start journey with us
              </p>
              <button
                id="signUp"
                onClick={() => handleOnClick("signUp")}
                className=" border-white py-2 px-6 mt-3 rounded-3xl font-semibold"
                style={{ fontSize: ".6rem", borderWidth: "1px" }}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
