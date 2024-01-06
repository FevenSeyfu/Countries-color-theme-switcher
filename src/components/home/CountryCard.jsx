import React from 'react';
import {useNavigate} from 'react-router-dom';


const CountryCard = ({country}) => {
  const navigate = useNavigate();
  const {alpha3Code,name,flags,population,region,capital} = country
  const handleClick = () =>{
    navigate(`/country/${alpha3Code}`)
  }
  return (
    <div className='flex flex-col rounded-2xl text-wrap' onClick={handleClick}>
      <img src={flags.png} alt="Flag"  className='md:h-[150px]'/>
      <div className=' bg-white flex flex-col p-4 '>
        <h3 className='font-extrabold  text-lg '>{name}</h3>
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
