import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext); //получаем данные из контекста

  if (!alert.visible) return null; //если alert нет, то компонент просто не рендерить

  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>Внимание</strong>
      &nbsp;{alert.text}
      <button onClick={hide} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
