import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaGooglePlusG } from "react-icons/fa6";
const SignUpForm = () => {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="font-semibold text-2xl">Create Account</h1>
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
          or use your email for registration
        </span>
        <div className="flex flex-col gap-3 mb-2">
          {" "}
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-gray-100 placeholder:text-xs text-sm font-normal  px-2 py-1"
          />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-gray-100 placeholder:text-xs text-sm px-2 py-1 "
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-gray-100 placeholder:text-xs  px-2 py-1"
          />
        </div>

        <button
          className=" bg-orange-600 py-2 px-8 mt-3 rounded-3xl font-semibold text-white"
          style={{ fontSize: ".6rem", borderWidth: "1px" }}
          id="signIn"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
