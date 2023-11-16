import { createContext } from 'react';

const MainContext = createContext({
  scroll: 0,
  city: '',
  newCity: {},
  setScroll: () => {},
  setCity: () => {},
  setNewCity: () => {},
});

export default MainContext;
