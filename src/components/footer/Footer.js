import { FaGithub } from 'react-icons/fa';

import styles from './footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>
        Сайт создан на основе API от:{' '}
        <a href="https://home.openweathermap.org/" target="_blank">
          openweathermap.org
        </a>
      </h3>
      <a href="https://github.com/Mongrus" target="_blank">
        <h2>Мой GitHub: </h2>
        <FaGithub className={styles.git} />
      </a>
    </footer>
  );
};

export default Footer;
