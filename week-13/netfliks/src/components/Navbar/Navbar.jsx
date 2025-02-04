import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <nav className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav-avatar"
        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        alt="User Logged"
      />
    </nav>
  );
}

export default Navbar;
