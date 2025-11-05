import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;
