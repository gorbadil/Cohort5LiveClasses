import { useState } from "react";
import "./App.css";
import ListItem from "./Components/ListItem";
import FormData from "./Components/FormData";

function App() {
  const initForm = {
    harcama: "",
    fiyat: "",
  };
  // String
  // const [harcama, setHarcama] = useState("");
  // const [fiyat, setFiyat] = useState("");
  // Object => Key, Value
  const [formData, setFormData] = useState(initForm);
  const [harcamalar, setHarcamalar] = useState([]);

  const [alert, setAlert] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  // const handleHarcamaChange = (event) => {
  //   setHarcama(event.target.value);
  // };

  // const handleFiyatChange = (event) => {
  //   setFiyat(event.target.value);
  // };

  const toplamHarcama = harcamalar.reduce(
    (total, item) => total + Number(item.fiyat),
    0
  );

  const handleFormDataChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHarca = () => {
    setAlert((prev) => !prev);
    setTimeout(() => {
      setAlert((prev) => !prev);
    }, 3000);

    // const yeniHarcama = formData.harcama + " - " + formData.fiyat + " TL";
    // const newHarcamalar = [...harcamalar, yeniHarcama];
    // setHarcamalar(newHarcamalar);
    setHarcamalar((prev) => [...prev, formData]);
    // console.log(harcamalar);

    // setHarcama("");
    // setFiyat("");
    setFormData(initForm);
  };

  const handleDelete = (harcama) => {
    const filteredHarcamalar = harcamalar.filter(
      (item) => item.harcama !== harcama
    );
    console.log(harcama);
    setHarcamalar(filteredHarcamalar);
  };

  if (username === "") {
    return (
      <div>
        <input
          type="text"
          placeholder="Kullanıcı Adını Gir"
          onChange={(e) => setUsernameInput(e.target.value)}
          value={usernameInput}
        />
        <button onClick={() => setUsername(usernameInput)}>Giriş Yap</button>
      </div>
    );
  }

  return (
    <>
      <h3>Expense Tracker {username} </h3>
      <FormData
        formData={formData}
        alert={alert}
        handleFormDataChange={handleFormDataChange}
        handleHarca={handleHarca}
      />
      <h3> {toplamHarcama} TL</h3>
      {/* {alert ? <p>Harcadım</p> : <p>Henüz Harcamadım</p>} */}
      <p>{alert ? "Harcadım" : "Henüz Harcamadım"}</p>
      <ul>
        {harcamalar.map(function (harca, index) {
          // return <li>{harca}</li>;
          return (
            <ListItem
              handleDelete={handleDelete}
              key={`${index}harca`}
              harca={harca}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
