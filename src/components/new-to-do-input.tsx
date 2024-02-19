import { useState } from "react";
import { useTodoContext } from "../context/ToDoContext";

const NewTodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { onSubmitInput } = useTodoContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitInput(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button disabled={!inputValue} type="submit">
        Add
      </button>
    </form>
  );
};

export default NewTodoInput;
