import Logo from "../assets/petexpo.svg";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
const Header = () => {
  return (
    <header>
      <a>
        <img src={Logo} alt="Petexpo Logo" />
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
        <div className="animals-dropdown">
          <button className="animals-button">Animals</button>
          <div className="animals-content">
            <a href="#">Dogs</a>
            <a href="#">Cats</a>
            <a href="#">Birds</a>
          </div>
        </div>
      </nav>
      <HamburgerMenu/>
    </header>
  );
};

export default Header;
