import NewTodoInput from "./components/new-to-do-input";
import ToDoList from "./components/to-do-list";
import { TodoProvider } from "./context/ToDoContext";

function App() {
  return (
    <TodoProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          top: "50%",
          left: "50%",
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ToDoList />
        <NewTodoInput />
      </div>
    </TodoProvider>
  );
}

export default App;
