import logo from "../assets/images/logo.svg";
import Navbar from "./Navbar";

function Header({ children }) {
  return (
    <div>
      <div className="nav-header">
        <img src={logo.svg} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars" />
        </button>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
