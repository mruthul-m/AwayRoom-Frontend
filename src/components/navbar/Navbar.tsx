import { Link } from "react-router-dom";
import { HashLink as JumpLink } from "react-router-hash-link";
import "./navbar.css";

interface NavProps {
  content: boolean;
}
const Navbar = ({ content }: NavProps) => {
  return (
    <nav className="max-w-screen-xl mx-auto bg-slate-50 px-4 py-4  flex justify-between rounded-md box-border">
      <div className="flex flex-row justify-between gap-9 p-2 ">
        <Link to={"/"}>
          <h2 className="Navbar-logo">logo</h2>
        </Link>

        <div>
          <ul className="flex flex-row gap-4">
            <Link to={"/"}>
              <li className="Navbar-li">Home</li>
            </Link>
            <JumpLink to={"#about"}>
              <li className="Navbar-li about relative">
                About
                <div className="dropdown-about">
                  this is only opens if it hower over it
                </div>
              </li>
            </JumpLink>

            <JumpLink to="#contacts">
              <li className="Navbar-li">Contact us</li>
            </JumpLink>

            <li className="Navbar-li">Policy</li>
            <li className="Navbar-li">Pages</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between gap-3">
        {content !== true && (
          <Link to={"/addlisting"}>
            <button className="rounded-3xl bg-green-900 px-6 text-white font-semibold cursor-pointer border-2 border-transparent hover:text-green-900 hover:border-green-900 hover:bg-white duration-500 h-full">
              + Add Listing
            </button>
          </Link>
        )}
        <Link to="/login">
          <button className="rounded-3xl bg-orange-400 text-white px-5 cursor-pointer font-semibold border-2 border-transparent hover:bg-white hover:text-orange-400 hover:border-orange-400 duration-500 h-full">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
