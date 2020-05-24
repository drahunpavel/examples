import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const App = lazy(() => import("./component/App"));
ReactDOM.render(
  <Suspense fallback={<p>loading....</p>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
