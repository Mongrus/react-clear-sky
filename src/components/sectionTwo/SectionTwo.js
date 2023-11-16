import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import Spinner from '../spinner/Spinner';
import { FaCity } from 'react-icons/fa';
import styles from './sectionTwo.module.sass';

const SectionTwo = () => {
  const { scroll, newCity } = useContext(MainContext);

  return (
    <section
      className={
        scroll > 200 && scroll < 900 ? styles.sectionTwo : styles.sectionTwoNone
      }
    >
      {newCity === '' || newCity.cod === '400' || newCity.cod === '404' ? (
        <div className={styles.spinner}>
          <Spinner />
          <h2>Ждем выбор города...</h2>
        </div>
      ) : (
        <div className={styles.divTemp}>
          <h2>
            <FaCity className={styles.city} />
            <br />
            Выбранный вами город: {newCity.name}
          </h2>
          <div>
            <h3>
              Координаты: <br /> {newCity.coord.lon}/{newCity.coord.lat}
            </h3>
            <h3>Страна: {newCity.sys.country}</h3>
          </div>
          <div>
            <h3>Часовой пояс: {newCity.timezone}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionTwo;
