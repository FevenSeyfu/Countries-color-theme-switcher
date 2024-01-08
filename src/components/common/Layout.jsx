import React,{useState} from 'react';
import Navbar from './Navbar';


const Layout =({children}) =>{

    return(
        <>
        <Navbar 
        />
        <main >
            {children}
        </main>
        </>
    )
}

export default Layout;