import CountContext from "./CountContext";
import { useState } from "react";

function CountProvider({ app }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count: count, setCount: setCount }}>
      {app}
    </CountContext.Provider>
  );
}

export default CountProvider;
