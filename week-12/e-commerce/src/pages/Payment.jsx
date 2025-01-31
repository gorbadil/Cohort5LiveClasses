import { useState } from "react";

function Payment() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const handlePasswordChange = (password) => {
    setPassword(password);
    if (password.length < 5) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  return (
    <div>
      <h1>Payment</h1>
      <div className="payment-form">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <span> Username: {username} </span>
        <br />
        {/* Controlled Input => value => input, setValue => onChange */}
        <input
          type="password"
          value={password}
          onChange={(event) => handlePasswordChange(event.target.value)}
        />
        <span> Password: {!passwordError ? password : "Min Character 6"} </span>
        <br />
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <span> Address: {address} </span>
        <br />
        <input
          type="text"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
        <span> Card Number: {cardNumber} </span>
      </div>
    </div>
  );
}

export default Payment;
