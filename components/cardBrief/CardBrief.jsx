import Image from "next/image";
import styles from "./CardBrief.module.css";

const CardBrief = ({country,city,mls_id,subType,imgUrl}) => {
    
    const countryRepair= country.replace("County", "Country");
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
        <p className={styles.propertyTitle}><ion-icon name="home-outline"></ion-icon> {city}</p>
        <ul className={styles.propertyAttributes}>
          <li className={styles.cardAttribute}>
            <ion-icon className={styles.propertyIcon} name="navigate-outline"></ion-icon>
            <span>
              <strong>{countryRepair}</strong>
            </span>
          </li>
          <li className={styles.cardAttribute}>
            <ion-icon
              className={styles.propertyIcon}
              name="business-outline"
            ></ion-icon>
            <span>
             {subType}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardBrief;
