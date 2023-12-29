import "./header.css";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";

const Header = () => {
  return (
    <div className="Header-bg">
      {" "}
      <Navbar />
      <Search />
    </div>
  );
};

export default Header;
