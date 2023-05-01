import React from "react";
import ReactDOM from "react-dom/client";

//
// const heading = React.createElement(
//   "h1",
//   {},
//   "Hello World from React Namaste React 🚀🆗"
// );

let heading = <h1> "Hello World from React Namaste React 🚀🆗"</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
