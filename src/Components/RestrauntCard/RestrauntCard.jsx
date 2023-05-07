import React from "react";
import styles from "./RestrauntCard.module.css";
import { Image_url } from "../../../utils/constants";

function RestrauntCard({
  imageid,
  resTrauntName,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime,
}) {
  return (
    <>
      <div className={styles.CardContainer}>
        <img src={Image_url + `/${imageid}`} alt="Food Restraunt image" />
        <ul className={styles.cardDetails}>
          <li>{resTrauntName}</li>
          <li>
            {cuisines.map((cus, id) => (
              <span key={id}>{cus}</span>
            ))}
          </li>
          <li>Ratings {avgRating}</li>
          <li>Cost for 2 {costForTwo}</li>
          <li>Delivery time {deliveryTime}</li>
        </ul>
      </div>
    </>
  );
}

export default RestrauntCard;
