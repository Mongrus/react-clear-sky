import React, { useContext } from 'react';
import styles from './scrollItem.module.sass';
import MainContext from '../../context/MainContext';

const ScrollItem = () => {
  const { scroll } = useContext(MainContext);

  const checkStyle = {
    backgroundColor: 'white',
  };

  return (
    <>
      <div className={styles.scrollItem} id="scrolls">
        <p style={scroll < 200 ? checkStyle : {}}></p>
        <p style={scroll > 200 && scroll < 900 ? checkStyle : {}}></p>
        <p style={scroll > 900 && scroll < 1500 ? checkStyle : {}}></p>
        <p style={scroll > 1500 ? checkStyle : {}}></p>
      </div>
      <p className={styles.checkScroll}>{`${String(
        Math.round(scroll / 17.76)
      )}%`}</p>
    </>
  );
};

export default ScrollItem;
