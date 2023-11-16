import { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/MainContext';
import { FaSearch } from 'react-icons/fa';
import styles from './sectionOne.module.sass';

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SectionOne = () => {
  const notify = (err) =>
    toast(err, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const [search, setSearch] = useState('');
  const { scroll, city, setCity, newCity, setNewCity } =
    useContext(MainContext);

  const createCity = (event) => {
    setCity(event.target.value.replaceAll(' ', ''));
    console.log(city);
  };

  useEffect(() => {
    setSearch('');
    if (newCity.cod === '400' || newCity.cod === null) {
      notify('🚫 Вы ввели пустую cтроку');
    } else if (newCity.cod === '404') {
      notify('🚫 Неправильно указан город');
    } else if (newCity.cod === 200) {
      setTimeout(() => {
        setSearch(
          '✔ Город успешной найден, прокрутите вниз, чтобы узнать погоду'
        );
      }, 1000);
    }
  }, [newCity]);

  const loadingCity = async () => {
    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&APPID=7e3ecc3dfa4d27473411e6348f6b2b41`
      )
        .then((Citys) => Citys.json())
        .then((citys) => setNewCity(citys));
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      console.log(message);
    }
  };

  return (
    <section
      className={scroll < 200 ? styles.sectionOne : styles.sectionOneNone}
    >
      <div className={styles.divCity}>
        <div>
          <label htmlFor="input" value={city}>
            Введите название города:
          </label>
          <input
            type="text"
            onChange={createCity}
            placeholder="Название города"
          />
          <button type="button" onClick={loadingCity}>
            Искать <FaSearch />
          </button>
          <h2>{search}</h2>
        </div>
      </div>
      <ToastContainer className={styles.message} />
    </section>
  );
};

export default SectionOne;
