import Proptypes from "prop-types";
import { useContext } from "react";
import CountContext from "../../../context/CountContext";

Component1.propTypes = {
  count: Proptypes.number.isRequired,
};

function Component1() {


  const { count } = useContext(CountContext);


  
  return <div>component1 count: {count} </div>;
}

export default Component1;
