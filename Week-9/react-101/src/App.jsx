import FirstComponent from "./FirstComponent";
import PropComponent from "./PropComponent";
import { useState } from "react";
import "./App.css";
import ComponentA from "./ComponentA";

// 1. Component => JS Function, return HTML
// 2. Prop => Funcion Parametresi

function App() {
  // JS Area
  // let count = 0;

  // const countObj = useState(0);
  // let count = countObj[0];
  // let setCount = countObj[1];

  const [count, setCount] = useState(0);

  // function useState(param) {
  //  let state = param;
  //  return [state, setState];
  // }

  function handleArttir() {
    // count = count + 1;
    // const newCount = count + 1;
    // setCount(newCount);

    // setCount(count + 1);

    setCount((prev) => prev + 1);
  }
  const appData = "App Parametre";
  // HTML ve JSX Area
  return (
    <>
      {/* <h1> {count} </h1> */}
      {/* <FirstComponent /> */}
      {/* <PropComponent str="Merhaba" str1="Str1" /> */}
      {/* {PropComponent("Merhaba")}
      {PropComponent("")} */}
      {/* <button onClick={handleArttir}>Arttır</button> */}
      <ComponentA data={appData} count={count} handleArttir={handleArttir} />
    </>
  );
}

export default App;
