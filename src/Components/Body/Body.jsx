import React, { useCallback, useEffect, useState } from "react";
import styles from "./Body.module.css";
import RestrauntCard from "./../RestrauntCard/RestrauntCard";
import { datares } from "../../../utils/apicalls";
import CardShimmer from "../CardShimmer/CardShimmer";
import { Link } from "react-router-dom";

function Body() {
  const [resData, setresData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [allResData, setallResData] = useState([]);
  // const [loading, setloading] = useState(false);

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
      // setloading(true);
      const data = await datares();
      setresData(
        data?.data.data.success.cards[4]?.gridWidget.gridElements.infoWithStyle
          .restaurants ?? "No data"
      );
      setallResData(
        data.data.data.success.cards[4]?.gridWidget.gridElements.infoWithStyle
          .restaurants ?? "No data"
      );
      // setloading(false);
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
      {allResData.length === 0 ? (
        <div className={styles.bodyContainer}>
          <CardShimmer />
        </div>
      ) : (
        <div className={styles.bodyContainer}>
          {resData.length !== 0 ? (
            resData.map((restraunt) => (
              <Link
                key={restraunt.info.id}
                to={"/restraunt/" + restraunt.info.id}
              >
                <RestrauntCard
                  imageid={restraunt.info.cloudinaryImageId}
                  resTrauntName={restraunt.info.name}
                  cuisines={restraunt.info.cuisines}
                  avgRating={restraunt.info.avgRating}
                  costForTwo={restraunt.info.costForTwo}
                  deliveryTime={restraunt.info.sla.deliveryTime}
                />
              </Link>
            ))
          ) : (
            <>
              {" "}
              <h1>No Restraunt found</h1>{" "}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Body;
