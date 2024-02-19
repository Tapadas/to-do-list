import { createContext, useContext, useState } from "react";
import { ListItem, mockDataList } from "../mock-data/list";
import { v4 as uuidv4 } from "uuid";

interface TodoContextProps {
  toDoList: ListItem[];
  onSubmitInput: (value: string) => void;
  onDeleteItem: (id: string) => void;
}
export const TodoContext = createContext<TodoContextProps>({
  toDoList: [],
  onSubmitInput: () => {},
  onDeleteItem: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [toDoList, setToDoList] = useState<ListItem[]>(mockDataList);

  const onSubmitInput = (value: string) => {
    const isExistingTodo = toDoList.some(({ name }) => name === value);
    if (isExistingTodo) {
      alert("Item already exists");
    } else {
      setToDoList((prevList) => {
        return [...prevList, { id: uuidv4(), name: value }];
      });
    }
  };

  const onDeleteItem = (id: string) => {
    setToDoList((prevList) =>
      prevList.filter((toDoItem) => toDoItem.id !== id)
    );
  };

  return (
    <TodoContext.Provider value={{ toDoList, onSubmitInput, onDeleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodoContext = () => useContext(TodoContext);
