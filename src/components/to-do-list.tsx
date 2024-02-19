import { useTodoContext } from "../context/ToDoContext";
import ToDoItem from "./to-do-item";

const ToDoList = () => {
  const { toDoList = [] } = useTodoContext();

  return (
    <ul>
      {toDoList.map((item, idx) => (
        <ToDoItem key={idx} toDoItem={item} />
      ))}
    </ul>
  );
};

export default ToDoList;
