import React from 'react';
import styles from './hamburger.module.sass';

const Hamburger = () => {
  return (
    <nav>
      <input className={styles.hamburger} type="checkbox" name="hamburger" />
      <label className={styles.buttonHamburgerContainer} htmlFor="hamburger">
        <div className={styles.buttonHamburger} id="btn-hamb"></div>
      </label>
      <div className={styles.hamburgerMenu}>
        <h2>Другие мои работы на React/Redux:</h2>
        <ul>
          <li>
            <a href="https://mongrus.github.io/react-game/" target="_blank">
              React Game
            </a>
          </li>
          <li>
            <a href="https://mongrus.github.io/marvel-app/" target="_blank">
              Marvel React App
            </a>
          </li>
          <li>
            <a href="https://mongrus.github.io/react-shop/" target="_blank">
              React Shop
            </a>
          </li>
          <li>
            <a href="https://mongrus.github.io/react-redux/" target="_blank">
              React Books
            </a>
          </li>
        </ul>
        <div className={styles.runningString}>
          <p>
            ⭐ Данное приложение было созданно при помощи бесплатного API от
            команды{' '}
            <a href="https://home.openweathermap.org/" target="_blank">
              openweathermap.org
            </a>{' '}
            ⭐
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Hamburger;
