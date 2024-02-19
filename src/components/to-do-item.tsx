import { useTodoContext } from "../context/ToDoContext";
import { ListItem } from "../mock-data/list";

interface Props {
  toDoItem: ListItem;
}
const ToDoItem = ({ toDoItem }: Props) => {
  const { id, name } = toDoItem;
  const { onDeleteItem } = useTodoContext();

  return (
    <li style={{ display: "flex", gap: "10px" }}>
      {name}
      <button onClick={() => onDeleteItem(id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
