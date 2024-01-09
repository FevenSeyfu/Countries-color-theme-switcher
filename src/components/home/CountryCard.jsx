import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const CountryCard = ({country}) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const {alpha3Code,name,flags,population,region,capital} = country
  const handleClick = () =>{
    navigate(`/${alpha3Code}`)
  }
  return (
    <div className={`${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-gray-100 text-black'} flex flex-col rounded-lg text-wrap`} onClick={handleClick}>
      <img src={flags.png} alt="Flag"  className='md:h-[150px]'/>
      <div className=' flex flex-col p-4 '>
        <h1 className='font-extrabold  text-lg '>{name}</h1>
        <ul>
          <li className='text-wrap'>Population:{population}</li>
          <li>Region:{region}</li>
          <li>Capital:{capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
