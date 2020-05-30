import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import { Context } from "./context";
import reducer from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos"))
  ); //1е значение - это наш редьюсер, второе - начальный стейт

  // const [todos, setTodos] = useState([
  // { id: 1, title: "First todo", completed: false },
  // { id: 2, title: "Second todo", completed: true },
  // ]);

  const [todoTitle, setTodoTitle] = useState("");

  // const handleClick = () => console.log("--handleClick");

  //componentDidMount
  // useEffect(() => {
  //   const raw = localStorage.getItem("todos") || [];
  //   setTodos(JSON.parse(raw));
  // }, []);

  //componentDidUpdate
  useEffect(() => {
    // document.addEventListener("click", handleClick);
    localStorage.setItem("todos", JSON.stringify(state));

    // return () => {
    //   document.removeEventListener("click", handleClick); //теперь handleClick отрабатывает один раз
    // };
  }, [state]);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      // setTodos([
      //   ...state,
      //   {
      //     id: Date.now(),
      //     title: todoTitle,
      //     completed: false,
      //   },
      // ]);
      dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
    }
  };

  // const removeTodo = (id) => {
  //   setTodos(
  //     todos.filter((todo) => {
  //       return todo.id !== id;
  //     })
  //   );
  // };

  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }

  //       return todo;
  //     })
  //   );
  // };

  return (
    <Context.Provider
      value={{
        // removeTodo,
        // toggleTodo,
        dispatch,
      }}
    >
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
          <label>Todo name</label>
        </div>

        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}
