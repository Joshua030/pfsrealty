import { useEffect, useState } from "react";
import CardBrief from "../../components/cardBrief/CardBrief";
import MainSearchBar from "../../components/mainSearchBar/MainSearchBar";
import styles from "../styles/Home.module.css";
// export async function getStaticProps() {
//   // fsq3dY1XgTfByBT0eV2Mys3L9uhG5ecHu9qfinDHBIEmfjI=
//   const properties = await getData();

 
//   return {
//     props: { properties }, 
//   };
// }

const index = () => {
  // console.log({ properties });
const [properties, setProperties] = useState([])
  useEffect(() => {

    const getData = async() => {
      try {
        const response = await fetch('/api/get-property?limit=12');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperties(data)
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
getData()
  }, [])
  
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
