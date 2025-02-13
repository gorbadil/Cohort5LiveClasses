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
import "./Doctor.css";

const initialDoctor = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
};

export default function Doctor() {
  const [newDoctor, setNewDoctor] = useState(initialDoctor);
  const [updateDoctor, setUpdateDoctor] = useState(initialDoctor);
  const [doctors, setDoctors] = useState(null);
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // get scene
  useEffect(() => {
    const request = async () => {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/api/v1/doctors"
      );
      setDoctors(res.data.content);
      setUpdate(true);
    };
    request();
  }, [update]);

  const handleDoctorPost = async () => {
    axios.post(import.meta.env.VITE_BASE_URL + "/api/v1/doctors", newDoctor);
    setUpdate(false);
    setNewDoctor(initialDoctor);
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
      import.meta.env.VITE_BASE_URL + `/api/v1/doctors/${id}`
    );
    handleAlert(response.data);
    setUpdate(false);
  };

  const handleUpdateForm = (doctor) => {
    setUpdateDoctor(doctor);
    console.log(doctor);
  };

  const handleUpdateDoctor = async () => {
    await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/v1/doctors/${updateDoctor.id}`,
      updateDoctor
    );
    setUpdateDoctor(initialDoctor);
    handleAlert("Doctor Updated");
    setUpdate(false);
  };

  return (
    <div>
      <Typography variant="h4" style={{ textAlign: "center", margin: "20px" }}>
        New Doctor
      </Typography>
      <div className="newDoctor">
        {Object.keys(initialDoctor).map((key) => (
          <TextField
            key={key}
            id="standard-basic"
            label={key}
            variant="standard"
            value={newDoctor[key]}
            onChange={(e) =>
              setNewDoctor((prev) => ({ ...prev, [key]: e.target.value }))
            }
          />
        ))}
        <Button variant="contained" onClick={handleDoctorPost}>
          Add New Doctor
        </Button>
      </div>

      <Typography variant="h4" style={{ textAlign: "center", margin: "20px" }}>
        Update Doctor
      </Typography>

      <div className="newDoctor">
        {Object.keys(initialDoctor).map((key) => (
          <TextField
            key={key}
            id="standard-basic"
            label={key}
            variant="standard"
            value={updateDoctor[key]}
            onChange={(e) =>
              setUpdateDoctor((prev) => ({ ...prev, [key]: e.target.value }))
            }
          />
        ))}
        <Button variant="contained" onClick={handleUpdateDoctor}>
          Update Doctor
        </Button>
      </div>

      <Typography variant="h1" style={{ textAlign: "center", margin: "20px" }}>
        Doctors
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors?.map((doctor) => (
              <TableRow
                key={doctor.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {doctor.name}
                </TableCell>
                <TableCell align="center">{doctor.phone}</TableCell>
                <TableCell align="center">{doctor.email}</TableCell>
                <TableCell align="center">{doctor.address}</TableCell>
                <TableCell align="center">{doctor.city}</TableCell>
                <TableCell align="center">
                  <DeleteForeverIcon
                    onClick={() => handleDoctorDelete(doctor.id)}
                    className="deleteIcon"
                  />
                </TableCell>
                <TableCell align="center">
                  <ArrowUpwardIcon
                    className="updateDoctor"
                    onClick={() => handleUpdateForm(doctor)}
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
