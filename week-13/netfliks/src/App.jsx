import "./App.css";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import Navbar from "./components/Navbar/Navbar";
import { rows } from "./Helper/rows.js";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      {rows.map((row) => (
        <Row key={row.id} title={row.title} fetchUrl={row.fetchUrl} />
      ))}
    </>
  );
}

export default App;
