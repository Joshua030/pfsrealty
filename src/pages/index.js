import CardBrief from "../../components/cardBrief/CardBrief";
import MainSearchBar from "../../components/mainSearchBar/MainSearchBar";
import { getData } from "../../lib/helpers/getData";
import styles from "../styles/Home.module.css";
export async function getStaticProps() {
  // fsq3dY1XgTfByBT0eV2Mys3L9uhG5ecHu9qfinDHBIEmfjI=
  const properties = await getData();

  // .catch((err) => console.error(err));
  return {
    props: { properties }, // will be passed to the page component as props
  };
}

const index = ({ properties }) => {
  // console.log({ properties });
  return (
    <div className={styles.principalContainer}>
      <div className={styles.searchContainer}>
        <MainSearchBar/>
      </div>
      <div className={styles.cardsContainer}>
        {properties.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionTitle}>Propiedades destacadas</h2>
          <div className={styles.cardContainer}>

            {properties.map(({ json_data, city, mls_id, sub_type_text }) => {
              return (
                <CardBrief
                  key={mls_id}
                  subType={sub_type_text}
                  city={city}
                  country={json_data.geo.county}
                  imgUrl={
                    json_data.photos[0] ||
                    "https://unsplash.com/photos/5Za2sS955yg/download"
                  }
                  href={`/coffee-store/${mls_id}`}
                />
              );
            })}
          </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default index;
