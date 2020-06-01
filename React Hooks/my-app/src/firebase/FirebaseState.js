//основаня идея стейта в том, что мы оборачиваем все приложение,
//чтобы все дочерние компоненты знали о состоянии контекста

import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import axios from "axios";
import {
  SHOW_LOADER,
  REMOVE_NOTE,
  ADD_NOTE,
  FETCH_NOTES,
} from "../context/types";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`); //notes.json запись для дб

    //трансформация объекта в массив
    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({
      type: FETCH_NOTES,
      payload,
    });
  };

  const addNote = async (title) => {
    try {
      const note = {
        title,
        data: new Date().toJSON(),
      };

      const res = await axios.post(`${url}/notes.json`, note);

      //к новой заметке добавляем ID, которая присвоила база данных
      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch({
        type: ADD_NOTE,
        payload: payload,
      });
    } catch (e) {
      throw new Error(e.message); //так можно искусственно проверить, что запрос не прошел
    }
  };

  const removeNote = async (id) => {
    const res = await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchNotes,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
