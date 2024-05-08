import React,{ createContext,useContext,useState,useEffect} from 'react'

const ThemeContext =createContext()

const ThemeProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const storedTheme = window.localStorage.getItem('isDarkTheme');
        return storedTheme ? JSON.parse(storedTheme) : false;
    });

    useEffect(() => {
        window.localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    }, [isDarkTheme]);

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