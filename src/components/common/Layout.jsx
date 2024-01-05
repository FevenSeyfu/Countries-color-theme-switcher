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
        <main className='px-4 py-8  md:px-16 bg-gray-100 h-screen'>
            {children}
        </main>
        </>
    )
}

export default Layout;