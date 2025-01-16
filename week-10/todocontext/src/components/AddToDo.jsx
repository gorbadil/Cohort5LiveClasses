import ToDoContext from "../context/ToDoProvider";
import { useState, useContext } from "react";

function AddToDo() {
  const [toDo, setToDo] = useState("");
  const { addToDo } = useContext(ToDoContext);
  const handleAddToDo = () => {
    addToDo({ text: toDo, completed: false });
    setToDo("");
  };
  return (
    <div>
      <input
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button onClick={handleAddToDo}>Add ToDo</button>
    </div>
  );
}

export default AddToDo;
