import React, { useState, useCallback } from "react";
import s from "./app.component.css";

export default function MyComponent() {

  const [count, setCount] = useState(0);

  return (
    <>
      <p>You Clicked {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}