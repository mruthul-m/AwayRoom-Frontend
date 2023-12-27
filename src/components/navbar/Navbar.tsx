import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto bg-slate-50 px-4 py-4  flex justify-between rounded-md box-border">
      <div className="flex flex-row justify-between gap-9 p-2 ">
        <h2 className="Navbar-logo">logo</h2>
        <div>
          <ul className="flex flex-row gap-4">
            <li className="Navbar-li">Home</li>
            <li className="Navbar-li">About</li>
            <li className="Navbar-li">Contact us</li>
            <li className="Navbar-li">Policy</li>
            <li className="Navbar-li">Pages</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <button className="rounded-3xl bg-green-900 px-6 text-white font-semibold cursor-pointer">
          + Add Listing
        </button>
        <button className="rounded-3xl bg-orange-400 text-white px-5 cursor-pointer font-semibold">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
