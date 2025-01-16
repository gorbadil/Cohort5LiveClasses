import ToDoContext from "../context/ToDoProvider";
import { useContext } from "react";

function ToDoList() {
  const { toDos, deleteToDo, toggleToDo } = useContext(ToDoContext);
  return (
    <div>
      {toDos.map((todo, index) => (
        <div key={index}>
          <p className={todo.completed ? "completed" : ""}>
            {" "}
            {todo.text} <span onClick={() => deleteToDo(todo)}>X</span>{" "}
            <span onClick={() => toggleToDo(todo)}>✓</span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
