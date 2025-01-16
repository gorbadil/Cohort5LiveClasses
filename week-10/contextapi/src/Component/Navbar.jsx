import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

function Navbar() {
  const data = useContext(ThemeContext);

  return (
    <div>
      <img src="" alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>{data.theme}</li>
      </ul>
    </div>
  );
}

export default Navbar;
