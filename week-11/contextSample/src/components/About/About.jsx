import Component2 from "./Component2/Component2";
import Proptypes from "prop-types";

About.propTypes = {
  setCount: Proptypes.func.isRequired,
};

function About() {
  return (
    <div>
      <h1>About</h1>
      <Component2/>
    </div>
  );
}

export default About;
