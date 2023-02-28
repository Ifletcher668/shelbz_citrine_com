import { createContext, useContext, useEffect, useState } from 'react';

const DEFAULT_COLOR_SCHEME = 'moon';
const POSSIBLE_COLOR_SCHEMES = ['moon', 'ocean', 'bloodMoon', 'harvestMoon'];

const defaultSearchProvider = {
  colorScheme: DEFAULT_COLOR_SCHEME,
  changeColorScheme: () => {
    console.log('Default changeColorScheme');
  },
};

// possible colorSheets: moon, sun, bloodMoon, harvestMoon

export const ThemeContext = createContext(defaultSearchProvider);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(DEFAULT_COLOR_SCHEME);

  function changeColorScheme(colorScheme) {
    if (
      typeof colorScheme !== 'string' ||
      !POSSIBLE_COLOR_SCHEMES.includes(colorScheme)
    ) {
      setColorScheme(DEFAULT_COLOR_SCHEME);
    }

    setColorScheme(colorScheme);
    localStorage.setItem('colorScheme', colorScheme);
  }

  useEffect(() => {
    const storedColorScheme = localStorage.getItem('colorScheme');

    if (storedColorScheme) {
      changeColorScheme(storedColorScheme);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.colorScheme = colorScheme;
  }, [colorScheme]);

  useEffect(() => {
    console.log('colorScheme', colorScheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        changeColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
