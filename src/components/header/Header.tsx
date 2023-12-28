import { ReactNode } from "react";
import "./header.css";
interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div className="Header-bg">{children}</div>;
};

export default Header;
