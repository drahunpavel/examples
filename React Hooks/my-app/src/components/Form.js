import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");

  const alert = useContext(AlertContext); //получаю контекст алерта
  const fireBase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      fireBase
        .addNote(value.trim())
        .then(() => {
          alert.show("Заметка была создана", "success");
        })
        .catch(() => {
          alert.show("Заметка не была создана", "danger");
        });

      setValue("");
    } else {
      alert.show("Введите название заметки");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
    </form>
  );
};
