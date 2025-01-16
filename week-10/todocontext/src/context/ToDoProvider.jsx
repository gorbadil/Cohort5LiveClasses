import { createContext, useState } from "react";

const ToDoContext = createContext();

// todo = { text: "Buy milk", completed: false }

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos((prev) => [...prev, toDo]);
  };

  const deleteToDo = (toDo) => {
    setToDos((prev) => prev.filter((todo) => todo !== toDo));
  };

  const toggleToDo = (toDo) => {
    // setToDos((prev) =>
    //   prev.map((todo) =>
    //     todo.text === toDo.text ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
    const updatedArr = toDos.map((todo) => {
      return todo.text === toDo.text
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setToDos(updatedArr);
  };

  const data = {
    toDos,
    addToDo,
    deleteToDo,
    toggleToDo,
  };

  return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>;
};

export default ToDoContext;
