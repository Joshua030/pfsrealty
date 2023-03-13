import { Bathtub, Bed } from "@phosphor-icons/react";
import { Head } from "next/document";
import Image from "next/image";
import styles from "./CardComplete.module.css";

const CardComplete = ({
  country,
  city,
  mls_id,
  subType,
  imgUrl,
  property_baths_full,
  property_bedrooms,
  natural_price
}) => {
  const countryRepair = country.replace("County", "Country");
  return (
    <div className={styles.property}>
      <Image
        width={400}
        height={350}
        // fill
        // style={{ objectFit: "contain" }}
        src={imgUrl}
        className={styles.propertyImg}
        alt={city}
      />
      <div className={styles.content}>
        {/* <div className="meals-tags">
          <span className="tag tag--vegan">Vegan</span>
          <span className="tag tag--paleo">Paleo</span>
        </div> */}
        <p className={styles.propertyTitle}>
          <ion-icon name="home-outline"></ion-icon> {city}
        </p>
        <ul className={styles.propertyAttributes}>
          <li className={styles.cardAttribute}>
            <ion-icon
              className={styles.propertyIcon}
              name="navigate-outline"
            ></ion-icon>
            <span>
              <strong>{countryRepair}</strong>
            </span>
          </li>
          <li className={styles.cardAttribute}>
            <ion-icon
              className={styles.propertyIcon}
              name="business-outline"
            ></ion-icon>
            <span>{subType}</span>
          </li>
          <li className={styles.bathtub} > <Bathtub size={32} weight="regular" /><span>{property_baths_full}</span></li>
          <li className={styles.bed} > <Bed size={32} weight="regular" /><span>{property_bedrooms}</span></li>
          <li className={styles.price} > <span>${natural_price} USD</span></li>
        </ul>
      </div>
    </div>
  );
};

export default CardComplete;
