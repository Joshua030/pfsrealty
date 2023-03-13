import { Head } from "next/document";
import { useEffect, useState } from "react";
import CardComplete from "../../components/CardComplete/CardComplete";
import Loader from "../../components/loader/Loader";
import NoData from "../../components/noData.jsx/noData";
import Pagination from "../../components/pagination/Pagination";
import { getFilterData } from "../../lib/helpers/getData";
import styles from "../styles/Proyecto.module.css";

const { useRouter } = require("next/router");

const proyectos = () => {
  const router = useRouter();
  const [dataProperties, setDataProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, settotalCount] = useState(0);
  const [proyectos, setProyectos] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [isDown, setIsDown] = useState(false);
  const [isDownRoom, setIsDownRoom] = useState(false);
  const [loading, setloading] = useState(true);

  const handleDropdownClick = () => {
    setIsDown(!isDown);
  };

  const handleDropdownRooms = () => {
    setIsDownRoom(!isDownRoom);
  };

  const parameter = router.query.parameter?.split("#")[0].trim();
  const type = router.query.type;

  const pageSize = 12;

  const handleCheckboxClick = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      e.stopPropagation();
      setProyectos([...proyectos, value]);
    } else {
      setProyectos(proyectos.filter((element) => element !== value));
    }
  };

  const handleRoomClick = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      e.stopPropagation();
      setRooms([...rooms, value]);
    } else {
      setRooms(rooms.filter((element) => element !== value));
    }
  };

  useEffect(() => {
    const filterData = async () => {
      const propertyFilterData = await getFilterData(
        parameter,
        type,
        currentPage,
        pageSize,
        proyectos,
        rooms
      );

      // const propertyFilterData= await getFilterData (parameter,type)
      setDataProperties(propertyFilterData.properties);
      //   setloading(false)
      //   console.log(propertyFilterData);
      //     );
    //   console.log(dataProperties);
      settotalCount(propertyFilterData.totalCount);
      setloading(false);
    };
    filterData();
  }, [currentPage, proyectos,rooms]);

  const handleListClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.cardsContainer}>
          <div className={styles.checkContainer}>
            <button
              className={`${styles.checkboxDropdown} ${
                isDown ? styles.isActive : ""
              }`}
              onClick={() => handleDropdownClick()}
            >
              Tipo de Proyecto
              <ul
                className={styles.checkboxDropdownList}
                onClick={handleListClick}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Family"
                      name="proyecto"
                      onClick={handleCheckboxClick}
                    />
                    Casas
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Apartmen"
                      name="proyecto"
                      onClick={handleCheckboxClick}
                    />
                    Apartamentos
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Condominium"
                      name="proyecto"
                      onClick={handleCheckboxClick}
                    />
                    Condominios
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Hotel"
                      name="proyecto"
                      onClick={handleCheckboxClick}
                    />
                    Hotel
                  </label>
                </li>
              </ul>
            </button>
            <button
              className={`${styles.checkboxDropdown} ${
                isDownRoom ? styles.isActive : ""
              }`}
              onClick={() => handleDropdownRooms()}
            >
              Habitaciones
              <ul
                className={styles.checkboxDropdownList}
                onClick={handleListClick}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="1"
                      name="room"
                      onClick={handleRoomClick}
                    />
                    1
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="2"
                      name="room"
                      onClick={handleRoomClick}
                    />
                    2
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="3"
                      name="room"
                      onClick={handleRoomClick}
                    />
                    3
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="4"
                      name="room"
                      onClick={handleRoomClick}
                    />
                    4
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="5"
                      name="room"
                      onClick={handleRoomClick}
                    />
                    5+
                  </label>
                </li>
              </ul>
            </button>
          </div>

          {dataProperties.length > 0 ? (
            <div className={styles.sectionWrapper}>
              <h2 className={styles.sectionTitle}>
                Lista de Propiedades Disponibles
              </h2>
              <div className={styles.cardContainer}>
                {dataProperties.map(
                  ({
                    json_data,
                    city,
                    mls_id,
                    sub_type_text,
                    property_baths_full,
                    property_bedrooms,
                    natural_price,
                  }) => {
                    return (
                      <CardComplete
                        key={mls_id}
                        subType={sub_type_text}
                        city={city}
                        property_baths_full={property_baths_full}
                        property_bedrooms={property_bedrooms}
                        country={json_data.geo.county}
                        natural_price={natural_price}
                        imgUrl={
                          json_data.photos[0] ||
                          "https://unsplash.com/photos/5Za2sS955yg/download"
                        }
                        href={`/coffee-store/${mls_id}`}
                      />
                    );
                  }
                )}
              </div>
              <Pagination
                // className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          ) : (
            <NoData />
          )}
        </div>
      )}
    </div>
  );
};

export default proyectos;
