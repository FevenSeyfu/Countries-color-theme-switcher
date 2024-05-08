import React,{ createContext,useContext,useState,useEffect} from 'react'

const ThemeContext =createContext()

const ThemeProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const storedTheme = window.localStorage.getItem('isDarkTheme');
        if (storedTheme !== null) {
            return JSON.parse(storedTheme);
        } else {
            const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return systemTheme || false;
        }
    });

    useEffect(() => {
        window.localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    }, [isDarkTheme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = () => setIsDarkTheme(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleThemeChange);
        return () => mediaQuery.removeEventListener('change', handleThemeChange);
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme)

    }
    const theme = isDarkTheme ? 'dark' : 'light';

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
    
};
const useTheme = () => {
    return useContext(ThemeContext);
  };
  
  export { ThemeProvider, useTheme };