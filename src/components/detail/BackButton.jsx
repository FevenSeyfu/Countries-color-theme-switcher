import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom';
const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{navigate('/')}
  return (
    <div>
      <button className='flex justify-evenly items-center bg-white shadow-md shadow-gray-300 w-36 py-2 text-xl' onClick={handleClick}>
        <FaArrowLeft />
        Back
      </button>
    </div>
  )
}

export default BackButton