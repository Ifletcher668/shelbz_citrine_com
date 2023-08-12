import { createContext, useContext, useLayoutEffect, useState } from 'react';

const DEFAULT_COLOR_SCHEME = 'bloodMoon';
const POSSIBLE_COLOR_SCHEMES = ['moon', 'ocean', 'bloodMoon', 'harvestMoon'];
const RANDOM_COLOR_SCHEME =
  POSSIBLE_COLOR_SCHEMES[
    Math.floor(Math.random() * POSSIBLE_COLOR_SCHEMES.length)
  ];

const defaultThemeProvider = {
  colorScheme: DEFAULT_COLOR_SCHEME,
  changeColorScheme: () => {
    console.log('Default changeColorScheme');
  },
};

export const ThemeContext = createContext(defaultThemeProvider);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(RANDOM_COLOR_SCHEME);

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

  useLayoutEffect(() => {
    const storedColorScheme = localStorage.getItem('colorScheme');

    if (storedColorScheme) {
      changeColorScheme(storedColorScheme);
    }
  }, []);

  useLayoutEffect(() => {
    document.body.dataset.colorScheme = colorScheme;
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
