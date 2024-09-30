import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import { ItemList } from "./ItemList";
import { ITodo } from "../../domains";

const mockTodoData: ITodo = {
  todoId: "1",
  todoName: "Test Todo",
  todoDescription: "This is a test description",
  removeItem: vi.fn(), // Mock function to track if removeItem is called
};

describe("Test for ItemList components", () => {
  beforeEach(() => {
    render(<ItemList {...mockTodoData} />);
  });
  it("Renders Itemlist components with associated props", () => {
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("toggles cancelform when checkbox is clicked", () => {
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText(/Test Todo/i)).toHaveStyle(
      "text-decoration: line-through"
    );

    // Clicking again should uncheck the checkbox and remove the line-through
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText(/Test Todo/i)).toHaveStyle("text-decoration: none");
  });
  it("displays remove and cancel buttons when checkbox is checked", () => {
    const checkbox = screen.getByRole("checkbox");

    // Initially, the buttons should not be in the document
    expect(screen.queryByText(/remove/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cancel/i)).not.toBeInTheDocument();

    // Simulate checking the checkbox
    fireEvent.click(checkbox);

    // Now the remove and cancel buttons should appear
    expect(screen.getByText(/remove/i)).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });
  it("calls removeItem when the remove button is clicked", () => {
    const checkbox = screen.getByRole("checkbox");

    // Simulate checking the checkbox to display the buttons
    fireEvent.click(checkbox);

    // Find the remove button
    const removeButton = screen.getByText(/remove/i);

    // Simulate clicking the remove button
    fireEvent.click(removeButton);

    // Check if the removeItem function was called with the correct todoId
    expect(mockTodoData.removeItem).toHaveBeenCalledWith(mockTodoData.todoId);
  });

  it("hides remove and cancel buttons when cancel is clicked", () => {
    const checkbox = screen.getByRole("checkbox");

    // checking the checkbox to display the buttons
    fireEvent.click(checkbox);

    // Find the cancel button
    const cancelButton = screen.getByText(/cancel/i);

    // Simulate clicking the cancel button
    fireEvent.click(cancelButton);

    // Check if the checkbox is unchecked and buttons are hidden
    expect(checkbox).not.toBeChecked();
    expect(screen.queryByText(/remove/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cancel/i)).not.toBeInTheDocument();
  });
});
