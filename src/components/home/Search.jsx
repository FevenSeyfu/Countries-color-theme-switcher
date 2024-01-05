import React from 'react'
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <div className='flex gap-2 shadow p-2 md:p-4 text-lg items-center bg-white sm:w-[300px] md:w-[450px]' >
      <IoSearch className='text-black'/>
      <input type="text" placeholder='Search for a country...' />
    </div>
  )
}

export default Search