import Home from "./pages/Home";
import About from "./pages/About";
import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  // const [link, setLink] = useState("home");
  // const handleAbout = () => {
  //   setLink("about");
  //   window.history.pushState({}, "", "/about");
  // };
  // const handleHome = () => {
  //   setLink("home");
  //   window.history.pushState({}, "", "/home");
  // };
  return (
    <div className="App">
      <div className="left-panel">
        {/* Link Area */}
        {/* <button onClick={handleHome}>Home</button> */}
        <Link to="/home">Home</Link>
        <br />
        {/* <button onClick={handleAbout}>About</button> */}
        <Link to="/about">About</Link>
      </div>
      <div className="right-panel">
        <header>
          <h1>Cohort 5 Çalışma</h1>
        </header>
        <div className="route">
          {/* Switch Area */}
          {/* {link === "home" && <Home />} */}
          {/* {link === "about" && <About />} */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

// BrowserRouter => Provider (Kapsayıcı) => 1. görev tamamladım
// Switch => Değişecek olan alanın Kapsayıcısı => 2. görev tamamladım
// Route => Değişecek item ve koşulu
// Link => koşulu yöneten item

// if (link === "home") {
//   //switch
//   return (
//     <div>
//       <Home /> //Route
//     </div>
//   );
// }
// if (link === "about") {
//   //switch
//   return (
//     <div>
//       <About /> //Route
//     </div>
//   );
// }

// function link1() {
//   setLink("home");
// }
// function link2() {
//   setLink("about");
// }
