import Logo from "../assets/petexpo.svg";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
const Header = () => {
  return (
    <header>
      <a>
        <img src={Logo} alt="Petexpo Logo" />
      </a>
      <nav>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <div class="animals-dropdown">
          <button class="animals-button">Animals</button>
          <div class="animals-content">
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
