import { useState } from "react";
import { motion } from "framer-motion";
import { hamburgerAnimation, textAnimation } from "../../Variants";
const HamburgerMenu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const clickedButton = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  const links = [
    {
      href: "about-us",
      content: "About Us",
    },
    {
      href: "contact-us",
      content: "Contact Us",
    },
    {
      href: "dogs",
      content: "Dogs",
    },
    {
      href: "cats",
      content: "Cats",
    },
    {
      href: "birds",
      content: "Birds",
    },
  ];
  return (
    <>
      <div
        className={`container ${
          hamburgerOpen ? "nav-open" : ""
        } hamburger-menu`}
        onClick={clickedButton}
      >
        <a id="menu-toggle" className="menu-toggle">
          <span className="menu-toggle-bar menu-toggle-bar--top"></span>
          <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
          <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </a>
      </div>
      <div
        className="mobile-overlay"
        style={{ display: hamburgerOpen ? "flex" : "none" }}
      ></div>
      <motion.div
        variants={hamburgerAnimation}
        className="mobile-menu"
        initial={"closed"}
        animate={hamburgerOpen ? "open" : "closed"}
        style={{ display: hamburgerOpen ? "flex" : "none" }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        <motion.nav
          style={{ display: hamburgerOpen ? "flex" : "none" }}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          className="link-mobile-header-div"
        >
          {links.map((link, index) => (
            <a onClick={clickedButton} key={index} href={link.href}>
              {link.content}
            </a>
          ))}
        </motion.nav>
      </motion.div>
    </>
  );
};
export default HamburgerMenu;
