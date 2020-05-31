import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";

const notes = new Array(3)
  .fill("")
  .map((_, i) => ({ id: i, title: `Notes ${i + 1}` }));

export const Home = () => {
  return (
    <Fragment>
      <Form />
      <hr />
      <Notes notes={notes} />
    </Fragment>
  );
};
