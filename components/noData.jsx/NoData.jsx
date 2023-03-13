import styles from "./NoData.module.css";

const NoData = () => {
  return (
    <div>
     <div className={styles.circles}>
      <p>:&#40;<br/>
       <small>Intenta otra Opcion</small>
      </p>
      <span  className={`${styles.circle} ${styles.big}`}></span>
      <span className={`${styles.circle} ${styles.med}`}></span>
      <span className={`${styles.circle} ${styles.small}`}></span>
    </div>
    </div>
  )
}

export default NoData;
