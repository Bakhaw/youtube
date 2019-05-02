import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);

  const providerValue = {
    searchResults,
    setSearchResults
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}
