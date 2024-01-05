import React,{useState} from 'react';
import Navbar from './Navbar';

const Layout =({children}) =>{
    const [darkMode, setDarkMode] = useState(true)
    const toggleDarkMode = ()=> {
        setDarkMode(darkMode=== 'light' ? 'dark' : 'light')
    }
    return(
        <>
        <Navbar 
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode} 
        />
        <main >
            {children}
        </main>
        </>
    )
}

export default Layout;