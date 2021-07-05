import React, { useState, useContext, useEffect } from 'react';
import plants from './data';

const AppContext = React.createContext();

// Option 1
// pass down children since whole app will be wrapped inside the provider, otherwise children components won't show up
const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
    console.log('it works');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log('close this bitch');
  };

  return (
    // pass in state values b/c depending on state values we will toggle modal and sidebar
    <AppContext.Provider
      value={{
        plants,
        selectedPlant,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Option 2
// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
