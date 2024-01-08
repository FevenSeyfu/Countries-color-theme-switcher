import React,{useState} from 'react';
import Navbar from './Navbar';
import { useTheme } from "../../context/ThemeContext";

const Layout =({children}) =>{
    const { theme, toggleTheme } = useTheme();
  
    return(
        <>
        <Navbar 
        />
        
        <main className={`${theme === 'dark' ? 'bg-very-dark-blue text-white' : 'bg-gray-100 text-black'}px-6 py-8  md:px-16 bg-gray-100 w-full h-full`}>
            {children}
        </main>
        </>
    )
}

export default Layout;