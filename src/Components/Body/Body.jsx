import React, { useCallback, useEffect, useState } from "react";
import styles from "./Body.module.css";
import RestrauntCard from "./../RestrauntCard/RestrauntCard";
import { datares } from "../../../utils/apicalls";

function Body() {
  const [resData, setresData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [allResData, setallResData] = useState([]);

  const Debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  function handleChange(e) {
    const { value } = e.target;
    let filteredData = allResData.filter((restraunt) => {
      let restrauntlist = restraunt.info.name.toLowerCase();
      let searchres = value.toLowerCase();
      return restrauntlist.includes(searchres);
    });
    setresData(filteredData);
  }

  const optimiseVersion = useCallback(Debounce(handleChange));

  useEffect(() => {
    (async () => {
      const data = await datares();
      setresData(
        data.data.data.success.cards[5].gridWidget.gridElements.infoWithStyle
          .restaurants
      );
      setallResData(
        data.data.data.success.cards[5].gridWidget.gridElements.infoWithStyle
          .restaurants
      );
    })();
    return () => {
      datares();
    };
  }, []);

  function filterRes() {
    let filteredRes = resData.filter(
      (restraunt) => restraunt.info.avgRating > 4.2
    );
    setresData(filteredRes);
  }

  return (
    <>
      <button className={styles.buttonfilter} onClick={filterRes}>
        Filter Restraunt
      </button>
      <span>
        <input
          type="text"
          className={styles.inputbox}
          // value={SearchText}
          onChange={optimiseVersion}
        />
        <span>
          <button className={styles.buttonfilter}>Search</button>
        </span>
      </span>
      <div className={styles.bodyContainer}>
        {resData ? (
          resData.map((restraunt) => (
            <RestrauntCard
              key={restraunt.info.id}
              imageid={restraunt.info.cloudinaryImageId}
              resTrauntName={restraunt.info.name}
              cuisines={restraunt.info.cuisines}
              avgRating={restraunt.info.avgRating}
              costForTwo={restraunt.info.costForTwo}
              deliveryTime={restraunt.info.sla.deliveryTime}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Body;
