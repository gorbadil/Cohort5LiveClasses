import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <h1>ToDo App</h1>
      <AddToDo />
      <ToDoList />
    </>
  );
}

export default App;
