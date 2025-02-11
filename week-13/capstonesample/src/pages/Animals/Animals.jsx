import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./Animals.css";

const initialAnimal = {
  name: "",
  species: "",
  breed: "",
  gender: "",
  colour: "",
  dateOfBirth: "",
  customer: {},
};

function Animals() {
  const [newAnimal, setNewAnimal] = useState(initialAnimal);
  const [updateAnimal, setUpdateAnimal] = useState(initialAnimal);
  const [animals, setAnimals] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const animalRequest = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/animals");
      setAnimals(res.data.content);
      setUpdate(true);
    };
    const customerRequest = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/customers");
      setCustomers(res.data.content);
    };
    animalRequest();
    customerRequest();
  }, [update]);

  const handleAnimalPost = async () => {
    axios.post("http://localhost:8080/api/v1/doctors", newAnimal);
    setUpdate(false);
    setNewAnimal(initialAnimal);
    handleAlert("Doctor Added");
  };

  const handleAlert = (alertM) => {
    setAlertMessage(alertM);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const handleDoctorDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/api/v1/doctors/${id}`
    );
    handleAlert(response.data);
    setUpdate(false);
  };

  const handleUpdateForm = (doctor) => {
    setUpdateAnimal(doctor);
    console.log(doctor);
  };

  const handleUpdateAnimal = async () => {
    await axios.put(
      `http://localhost:8080/api/v1/doctors/${updateAnimal.id}`,
      updateAnimal
    );
    setUpdateAnimal(initialAnimal);
    handleAlert("Doctor Updated");
    setUpdate(false);
  };

  return (
    <div>
      <Typography variant="h4" style={{ textAlign: "center", margin: "20px" }}>
        New Doctor
      </Typography>
      <div className="newDoctor">
        {Object.keys(initialAnimal).map((key) => {
          if (key !== "customer") {
            return (
              <TextField
                key={key}
                autoComplete="off"
                type={key === "dateOfBirth" ? "date" : "text"}
                id="standard-basic"
                label={key === "dateOfBirth" ? " " : key}
                variant="standard"
                value={newAnimal[key]}
                onChange={(e) =>
                  setNewAnimal((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            );
          } else {
            return (
              <div key={key}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newAnimal.customer.id}
                  name={key}
                  label="Age"
                  onChange={(e) => {
                    setNewAnimal((prev) => ({
                      ...prev,
                      [key]: { id: e.target.value },
                    }));
                  }}
                >
                  {customers?.map((customer) => (
                    <MenuItem key={customer.id} value={customer.id}>
                      {customer.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            );
          }
        })}
        <Button variant="contained" onClick={handleAnimalPost}>
          Add New Animal
        </Button>
      </div>

      <Typography variant="h4" style={{ textAlign: "center", margin: "20px" }}>
        Update Doctor
      </Typography>

      <div className="newDoctor">
        {Object.keys(initialAnimal).map((key) => (
          <TextField
            key={key}
            id="standard-basic"
            label={key}
            variant="standard"
            value={updateAnimal[key]}
            onChange={(e) =>
              setUpdateAnimal((prev) => ({ ...prev, [key]: e.target.value }))
            }
          />
        ))}
        <Button variant="contained" onClick={handleUpdateAnimal}>
          Update Animal
        </Button>
      </div>
      <Typography variant="h1" style={{ textAlign: "center", margin: "20px" }}>
        Animals
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(initialAnimal).map((key) => {
                if (key === "customer") {
                  return Object.keys(initialAnimal.customer).map(
                    (customerKey) => (
                      <TableCell key={key}>{customerKey}</TableCell>
                    )
                  );
                }
                return <TableCell key={key}>{key}</TableCell>;
              })}
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animals?.map((animal) => (
              <TableRow
                key={animal.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {animal.name}
                </TableCell>
                <TableCell align="center">{animal.phone}</TableCell>
                <TableCell align="center">{animal.email}</TableCell>
                <TableCell align="center">{animal.address}</TableCell>
                <TableCell align="center">{animal.city}</TableCell>
                <TableCell align="center">
                  <DeleteForeverIcon
                    onClick={() => handleDoctorDelete(animal.id)}
                    className="deleteIcon"
                  />
                </TableCell>
                <TableCell align="center">
                  <ArrowUpwardIcon
                    className="updateDoctor"
                    onClick={() => handleUpdateForm(animal)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {alert && <h1>{alertMessage}</h1>}
    </div>
  );
}

export default Animals;
