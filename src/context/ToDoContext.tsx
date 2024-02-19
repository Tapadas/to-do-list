import { createContext, useContext, useState } from "react";
import { ListItem, mockDataList } from "../mock-data/list";

interface TodoContextProps {
  toDoList: ListItem[];
  onSubmitInput: (value: string) => void;
  onDeleteItem: (id: number) => void;
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
        return [...prevList, { id: prevList.length + 1, name: value }];
      });
    }
  };

  const onDeleteItem = (id: number) => {
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
