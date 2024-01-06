import React from 'react';

const CountryCard = ({country}) => {
  const {name,flags,population,region,capital} = country
  return (
    <div className='flex flex-col rounded-md '>
      <img src={flags.png} alt="" />
      <div className=' bg-white flex flex-col p-4'>
        <h3 className='font-extrabold py-2 text-lg'>{name}</h3>
        <ul>
        <li>Population:{population}</li>
        <li>Region:{region}</li>
        <li>Capital:{capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
