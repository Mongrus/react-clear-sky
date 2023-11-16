import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import Spinner from '../spinner/Spinner';
import styles from './sectionThree.module.sass';

const SectionThree = () => {
  const { scroll, newCity } = useContext(MainContext);

  return (
    <>
      <section
        className={
          scroll > 900 && scroll < 1500
            ? styles.sectionThree
            : styles.sectionThreeNone
        }
      >
        {newCity === '' || newCity.cod === '400' || newCity.cod === '404' ? (
          <div className={styles.spinner}>
            <Spinner />
            <h2>Ждем выбор города...</h2>
          </div>
        ) : (
          <div className={styles.divInfo}>
            <h2>
              🌞{' '}
              {newCity.weather[0].description.charAt(0).toUpperCase() +
                newCity.weather[0].description.slice(1)}{' '}
              ☁
            </h2>
            <h3>Температура: {Math.round(newCity.main.temp - 273.15)} ℃</h3>
            <h3>
              Ощущается как: {Math.round(newCity.main.feels_like - 273.15)} ℃
            </h3>
            <h3>
              Колебания температуры за день от{' '}
              {Math.round(newCity.main.temp_min - 273.15)} ℃ до{' '}
              {Math.round(newCity.main.temp_max - 273.15)} ℃
            </h3>
            <h3>Влажность: {newCity.main.humidity}%</h3>
            <h3>
              Давление: {String(newCity.main.pressure * 750).substring(0, 3)} мм
              рт. ст.
            </h3>
          </div>
        )}
      </section>
    </>
  );
};

export default SectionThree;
