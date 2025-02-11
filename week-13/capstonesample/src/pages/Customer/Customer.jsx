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
import "./Customer.css";

const initialCustomer = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
};

function Customer() {
  const [newCustomer, setNewCustomer] = useState(initialCustomer);
  const [updateCustomer, setUpdateCustomer] = useState(initialCustomer);
  const [customers, setCustomer] = useState(null);
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/customers");
      setCustomer(res.data.content);
      setUpdate(true);
    };
    request();
  }, [update]);

  const handleAlert = (alertM) => {
    setAlertMessage(alertM);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const handleCustomerPost = async () => {
    await axios.post("http://localhost:8080/api/v1/customers", newCustomer);
    setUpdate(false);
    setNewCustomer(initialCustomer);
    handleAlert("Customer Added");
  };

  const handleCustomerDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/api/v1/customers/${id}`
    );
    handleAlert(response.data);
    setUpdate(false);
  };

  const handleUpdateForm = (customer) => {
    setUpdateCustomer(customer);
    console.log(customer);
  };

  const handleUpdateCustomer = async () => {
    await axios.put(
      `http://localhost:8080/api/v1/doctors/${updateCustomer.id}`,
      updateCustomer
    );
    setUpdateCustomer(initialCustomer);
    handleAlert("Customer Updated");
    setUpdate(false);
  };

  return (
    <div>
      <Typography variant="h4" style={{ textAlign: "center", margin: "20px" }}>
        New Doctor
      </Typography>
      <div className="newDoctor">
        {Object.keys(initialCustomer).map((key) => (
          <TextField
            key={key}
            id="standard-basic"
            label={key}
            variant="standard"
            value={newCustomer[key]}
            onChange={(e) =>
              setNewCustomer((prev) => ({ ...prev, [key]: e.target.value }))
            }
          />
        ))}
        <Button variant="contained" onClick={handleCustomerPost}>
          Add New Doctor
        </Button>
      </div>

      <Typography variant="h4" style={{ textAlign: "center", margin: "20px" }}>
        Update Doctor
      </Typography>

      <div className="newDoctor">
        {Object.keys(initialCustomer).map((key) => (
          <TextField
            key={key}
            id="standard-basic"
            label={key}
            variant="standard"
            value={updateCustomer[key]}
            onChange={(e) =>
              setUpdateCustomer((prev) => ({ ...prev, [key]: e.target.value }))
            }
          />
        ))}
        <Button variant="contained" onClick={handleUpdateCustomer}>
          Update Customer
        </Button>
      </div>

      <Typography variant="h1" style={{ textAlign: "center", margin: "20px" }}>
        Customers
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
            {customers?.map((doctor) => (
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
                    onClick={() => handleCustomerDelete(doctor.id)}
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

export default Customer;
