import TextField from "@mui/material/TextField";

function InputHandler({ initial, inputState, inputStateSetter }) {
  return (
    <div>
      {Object.keys(initial).map((key) => (
        <TextField
          key={key}
          id="standard-basic"
          label={key}
          variant="standard"
          value={inputState[key]}
          type={initial[key][type]}
          onChange={(e) =>
            inputStateSetter((prev) => ({ ...prev, [key]: e.target.value }))
          }
        />
      ))}
    </div>
  );
}

export default InputHandler;
