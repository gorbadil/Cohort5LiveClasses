import { Button } from "@mui/material";
import { useState } from "react";

function PaymentUpdated() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    address: "",
    cardNumber: "",
  });

  console.log(Object.keys(formData));

  const [error, setError] = useState({});
  // []
  // Object.keys(error) => []

  const validate = (name, value) => {
    let error = "";
    // switch (name) {
    //   case "username":
    //     if (value.length < 5) {
    //       error = "Username must be at least 5 characters long!";
    //     }
    //   case "password":
    //     if (value.length < 8) {
    //       error = "Password must be at least 8 characters long!";
    //     }
    //   case "address":
    //     if (value.length < 5) {
    //       error = "Address must be at least 5 characters long!";
    //     }
    //   case "cardNumber":
    //     if (value.length < 16) {
    //       error = "Card Number must be at least 16 characters long!";
    //     }
    //   default:
    //     break;
    // }
    if (name === "username") {
      if (value.length < 5) {
        error = "Username must be at least 5 characters long!";
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        error = "Password must be at least 8 characters long!";
      }
    }
    if (name === "address") {
      if (value.length < 5) {
        error = "Address must be at least 5 characters long!";
      }
    }
    if (name === "cardNumber") {
      if (value.length < 16) {
        error = "Card Number must be at least 16 characters long!";
      }
    }
    if (name === "name") {
      if (value.length < 2) {
        error = "Name must be at least 2 characters long!";
      }
    }
    if (name === "surname") {
      if (value.length < 2) {
        error = "Surname must be at least 2 characters long!";
      }
    }
    return error;
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

  return (
    <div>
      <h1>Payment Updated</h1>
      <div className="payment-form">
        {/* <input
          type="text"
          value={formData.username}
          name="username"
          placeholder="UserName"
          onChange={handleInputChange}
        />

        <input
          type="password"
          value={formData.password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={formData.address}
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={formData.cardNumber}
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleInputChange}
        /> */}
        {Object.keys(formData).map((key) => (
          <input
            type={key === "password" ? "password" : "text"}
            onChange={handleInputChange}
            name={key}
            value={formData[key]}
            placeholder={key}
            key={key}
          />
        ))}
        <p> Username: {formData.username} </p>
        <p> Password: {formData.password} </p>
        <p> Address: {formData.address} </p>
        <p> Card Number: {formData.cardNumber} </p>
        <h2>Errors</h2>
        {/* <p> Name: {error.name}</p>
        <p> Username: {error.username} </p>
        <p> Password: {error.password} </p>
        <p> Address: {error.address} </p>
        <p> Card Number: {error.cardNumber} </p> */}
        {Object.keys(error).map((key, index) => (
          <p key={index}> {error[key] ? error[key] : key + " is valid"} </p>
        ))}
        {Object.keys(error).length > 0 &&
          Object.values(error).every((err) => err === "") && (
            <Button>Submit</Button>
          )}
      </div>
    </div>
  );
}

export default PaymentUpdated;
