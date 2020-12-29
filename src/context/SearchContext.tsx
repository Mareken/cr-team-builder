import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchProps>({} as SearchProps);

const SearchProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      { children }
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context)
    throw new Error('useSearch must be used within a SearchProvider');

  return context;
}

export { SearchProvider, useSearch as default };