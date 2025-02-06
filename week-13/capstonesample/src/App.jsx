import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [doctors, setDoctors] = useState(null);
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // get scene
  useEffect(() => {
    const request = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/doctors");
      setDoctors(res.data.content);
      setUpdate(true);
    };
    request();
  }, [update]);

  // post scene
  const body = {
    name: "Murat",
    phone: "01234567",
    email: "email@email.com",
    address: "John Address",
    city: "City of Angels",
  };

  const handleDoctorPost = async () => {
    axios.post("http://localhost:8080/api/v1/doctors", body);
    setUpdate(false);
  };

  const handleDoctorDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/api/v1/doctors/${id}`
    );
    setAlertMessage(response.data);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    setUpdate(false);
  };

  return (
    <>
      <button onClick={handleDoctorPost}>Doctor Post</button>
      <h1>Doctors</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
        </tr>
        {doctors?.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.name}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.email}</td>
            <td>{doctor.address}</td>
            <td>{doctor.city}</td>
            <td
              style={{
                paddingLeft: "30px",
                color: "red",
                fontSize: "25px",
                cursor: "pointer",
              }}
              onClick={() => handleDoctorDelete(doctor.id)}
            >
              X
            </td>
          </tr>
        ))}
      </table>
      {alert && <h1>{alertMessage}</h1>}
    </>
  );
}

export default App;
