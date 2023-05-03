import React from "react";
import styles from "./Body.module.css";
import RestrauntCard from "./../RestrauntCard/RestrauntCard";

function Body() {
  return (
    <>
      <div className={styles.bodyContainer}>
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </>
  );
}

export default Body;
