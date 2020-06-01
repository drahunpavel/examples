//основаня идея стейта в том, что мы оборачиваем все приложение,
//чтобы все дочерние компоненты знали о состоянии контекста

import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";

export const FirebaseState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer);

  return (
    <FirebaseContext.Provider
      value={
        {
          // show,
          // hide,
          // alert: state, //получаем данные, которые есть в данном контексте
        }
      }
    >
      {children}
    </FirebaseContext.Provider>
  );
};
