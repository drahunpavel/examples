import React, { Fragment } from "react";

export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li key={note.id} className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>

          <button type="button" className="btn btn-danger btn-sm">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
