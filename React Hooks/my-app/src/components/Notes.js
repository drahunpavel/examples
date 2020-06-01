import React, { Fragment } from "react";

export const Notes = ({ notes, onRemove }) => (
  <ul className="list-group">
    {notes.map((note) => (
      <li key={note.id} className="list-group-item note">
        <div>
          <strong>{note.title}</strong>
          <small>{note.data}</small>
        </div>

        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onRemove(note.id)}
        >
          &times;
        </button>
      </li>
    ))}
  </ul>
);

//можно избавиться от return, означает, что компонент полноситью функционалный
