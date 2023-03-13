import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "../../hooks/useForm/useForm";
import styles from "./MainSearchBar.module.css";
const MainSearchBar = () => {
  const [checked, setChecked] = useState(false);

  const { parameter, onInputChange, onResetForm } = useForm({
    parameter: "",
    type: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const propertyFilterData= getFilterData (parameter,checked)
    // console.log(propertyFilterData);

    router.push({
      pathname: "/proyectos",
      query: { parameter: parameter, type: checked },
    });
    onResetForm();
  };
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
            <span className={styles.switchButtonLabelSpan}>Compra</span>
          </label>
        </div>
        <form onSubmit={handleSubmit} className={styles.wrap}>
          <div className={styles.search}>
            <input
              type="text"
              value={parameter}
              onChange={onInputChange}
              name="parameter"
              className={styles.searchTerm}
              placeholder="Buscar por ciudad, código postal, condado o dirección"
            />
            <button type="submit" className={styles.searchButton}>
              <ion-icon name="search" size="large"></ion-icon>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSearchBar;
