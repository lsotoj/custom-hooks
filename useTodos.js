import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "delete todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "toggle todo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount,
    pendingTodosCount,
  };
};
