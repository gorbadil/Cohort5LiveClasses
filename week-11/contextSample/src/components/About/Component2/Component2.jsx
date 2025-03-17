import Proptypes from "prop-types";
import CountContext from "../../../context/CountContext";
import { useContext } from "react";

Component2.propTypes = {
  setCount: Proptypes.func.isRequired,
};

function Component2() {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      Component2
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Arttır</button>
    </div>
  );
}

export default Component2;
