import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Doctor from "./pages/Doctor/Doctor";
import Customer from "./pages/Customer/Customer";
import Animals from "./pages/Animals/Animals";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/doctor">
          <Doctor />
        </Route>
        <Route path="/customer">
          <Customer />
        </Route>
        <Route path="/animal">
          <Animals />
        </Route>
      </Switch>
    </>
  );
}

export default App;
