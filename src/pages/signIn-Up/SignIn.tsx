import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaGooglePlusG } from "react-icons/fa6";
const SignInForm = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="font-semibold text-2xl">Sign in</h1>
        <div className="flex gap-2 m-4">
          <section className="  p-2 rounded-full cursor-pointer">
            <FaGooglePlusG className="text-black/[.7]" />
          </section>
          <section className=" p-2 rounded-full cursor-pointer">
            <BiLogoFacebook className="text-black/[.7]" />
          </section>
          <section className="p-2 cursor-pointer">
            <BiLogoLinkedin className="text-black/[.7]" />
          </section>
        </div>
        <span className="py-1" style={{ fontSize: ".6rem" }}>
          or use your account
        </span>
        <div className="flex flex-col gap-3 mb-2">
          <input
            className="bg-gray-100 placeholder:text-xs  px-2 py-1"
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <input
            className="bg-gray-100 placeholder:text-xs px-2 py-1"
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <p className="text-xs">Forgot your password?</p>
        <button
          className=" bg-orange-600 py-2 px-8 mt-3 rounded-3xl font-semibold text-white"
          style={{ fontSize: ".6rem", borderWidth: "1px" }}
          id="signIn"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
