import { useState } from "react";
import "./App.css";

function App() {
  const [harcama, setHarcama] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [harcamalar, setHarcamalar] = useState(["harca1", "harca2"]);

  const handleHarcamaChange = (event) => {
    setHarcama(event.target.value);
  };

  const handleFiyatChange = (event) => {
    setFiyat(event.target.value);
  };

  const handleHarca = () => {
    const yeniHarcama = harcama + " - " + fiyat;
    const newHarcamalar = [...harcamalar, yeniHarcama];
    setHarcamalar(newHarcamalar);
  };

  return (
    <>
      <h3>Expense Tracker</h3>
      <input
        type="text"
        placeholder="Neye Harcadın"
        onChange={handleHarcamaChange}
      />
      <p> {harcama} </p>
      <br />
      <input
        type="text"
        placeholder="Ne Kadar Harcadın"
        onChange={handleFiyatChange}
      />
      <p> {fiyat} </p>
      <br />
      <button onClick={handleHarca}>Harca</button>
      <hr />
      <ul>
        {harcamalar.map(function (harca) {
          return <li>{harca}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
