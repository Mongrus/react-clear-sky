import React, { useState } from 'react';
import MainContext from '../../context/MainContext';
import SectionOne from '../sectionOne/SectionOne';
import SectionTwo from '../sectionTwo/SectionTwo';
import SectionThree from '../sectionThree/SectionThree';
import SectionFour from '../sectionFour/SectionFour';
import Hamburger from '../hamburger/Hamburger';
import ScrollItem from '../scrollItem/ScrollItem';
import Footer from '../footer/Footer';

const App = () => {
  const [scroll, setScroll] = useState(0);
  const [city, setCity] = useState('');
  const [newCity, setNewCity] = useState('');

  const scr = () => {
    setScroll(window.scrollY);
  };

  return (
    <div className="App" onWheel={scr}>
      <MainContext.Provider
        value={{ scroll, setScroll, city, setCity, newCity, setNewCity }}
      >
        <Hamburger />
        <ScrollItem />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </MainContext.Provider>
    </div>
  );
};

export default App;
