import React from "react";
import styles from "./About.module.css";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1>This is About page</h1>
      <Outlet />
    </>
  );
}

export default About;
