import { render, screen } from "@testing-library/react";
import ToDoList from "../components/to-do-list";
import { mockDataList } from "../mock-data/list";
import { TodoProvider } from "../context/ToDoContext";

describe("TodoList", () => {
  test("render ToDoList", () => {
    render(
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
    );

    mockDataList.map((item) => {
      const toDoName = screen.getByText(item.name);
      expect(toDoName).toBeInTheDocument();
    });

    const toDoElements = screen.getAllByRole("listitem");
    expect(toDoElements.length).toEqual(mockDataList.length);
  });
});
