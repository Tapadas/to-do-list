import { useTodoContext } from "../context/ToDoContext";
import ToDoItem from "./to-do-item";

const ToDoList = () => {
  const { toDoList = [] } = useTodoContext();

  return (
    <ul>
      {toDoList.map((item) => (
        <ToDoItem key={item.id} toDoItem={item} />
      ))}
    </ul>
  );
};

export default ToDoList;
