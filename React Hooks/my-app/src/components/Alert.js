import React from "react";

export const Alert = ({ alert }) => {
  if (!alert) return null; //если alert нет, то компонент просто не рендерить

  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>Внимание</strong>
      {alert.text}
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
