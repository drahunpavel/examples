import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../firebase/firebaseContext";
import { Loader } from "../components/Loader";

// const notes = new Array(3)
//   .fill("")
//   .map((_, i) => ({ id: i, title: `Notes ${i + 1}` }));

export const Home = () => {
  //компонент Home может пользоваться FirebaseContext
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
  }, []); //вызыв будет 1 раз - это эмуляция componentDidMount

  return (
    <Fragment>
      <Form />
      <hr />

      {loading ? <Loader /> : <Notes notes={notes} />}
    </Fragment>
  );
};
