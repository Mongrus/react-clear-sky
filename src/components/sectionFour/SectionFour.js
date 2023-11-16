import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import { PiWindBold } from 'react-icons/pi';
import Spinner from '../spinner/Spinner';
import styles from './sectionFour.module.sass';

const SectionFour = () => {
  const { scroll, newCity } = useContext(MainContext);

  return (
    <>
      <section
        className={scroll > 1500 ? styles.sectionFour : styles.sectionFourNone}
      >
        {newCity === '' || newCity.cod === '400' || newCity.cod === '404' ? (
          <div className={styles.spinner}>
            <Spinner />
            <h2>Ждем выбор города...</h2>
          </div>
        ) : (
          <div className={styles.divInfo}>
            <h3>
              Ветер <PiWindBold />
            </h3>
            <h2>Скорость ветра: {newCity.wind.speed} м/с</h2>
            <h2>Направления ветра: {newCity.wind.deg}°</h2>
          </div>
        )}
      </section>
    </>
  );
};

export default SectionFour;
