import React,{ createContext,useContext,useState} from 'react'

const ThemeContext =createContext()

const ThemeProvider = ({children}) => {
    const[isDarkTheme, setIsDarkTheme] = useState (false)

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