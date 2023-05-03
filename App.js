import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header/Header";
import Body from "./src/Components/Body/Body";

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
