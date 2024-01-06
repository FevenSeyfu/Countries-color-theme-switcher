import React from 'react';

const CountryCard = ({country}) => {
  const {name,flags,population,region,capital} = country
  return (
    <div className='flex flex-col rounded-2xl text-wrap'>
      <img src={flags.png} alt=""  className='h-[150px]'/>
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
