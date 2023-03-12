import { useState } from "react";
import styles from "./MainSearchBar.module.css";
const MainSearchBar = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.mainTitle}>
          <strong>P</strong>ROPIEDADES <strong>F</strong>INANCIAMIENTO{" "}
          <strong>S</strong>ERVICIOS
        </h2>
        <div className={styles.switchButton}>
          <input
            className={styles.switchButtonCheckbox}
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label className={styles.switchButtonLabel}>
            <span className={styles.switchButtonLabelSpan}>Photo</span>
          </label>
        </div>
        <div className={styles.wrap}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchTerm}
              placeholder="What are you looking for?"
            />
            <button type="submit" className={styles.searchButton}>
            <ion-icon name="search" size="large"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSearchBar;
