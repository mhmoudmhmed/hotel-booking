import React, { useContext, memo } from "react";
import { RoomContext } from '../Context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(
    items.map((item) => item[value])
  )];
};

const RoomFilter = ({ rooms }) => {

  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    mniPrice, maxPrice,
    minSize,maxSize,
    breakfast,
    pets
  } = context;

  // get unique values
  let types = getUnique(rooms, 'type');
  let capacities = getUnique(rooms, 'capacity');

  // add all option to select
  types = ['all', ...types];

  return (
    <section className='filter-container'>
      <Title title='Search Rooms' />
      <form className='filter-form'>
        {/* select type */}
          <div className='form-group'>
            <label htmlFor='type'>room type</label>
            <select
              name='type'
              id='type'
              value={type}
              className='form-control'
              onChange={handleChange}
            >
              {types.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option> 
              ))}
            </select>
          </div>
        {/* end select type */}

        {/* select capacity */}
          <div className='form-group'>
            <label htmlFor='capacity'>Guests</label>
            <select
              name='capacity'
              id='capacity'
              value={capacity}
              className='form-control'
              onChange={handleChange}
            >
              {capacities.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option> 
              ))}
            </select>
          </div>
        {/* end select capacity */}

        {/* input price */}
          <div className='form-group'>
              <label htmlFor='price'>room price ${price}</label>
            <input
              type='range'
              min={mniPrice}
              max={maxPrice}
              name='price'
              className='form-control'
              id='id'
              value={price}
              onChange={handleChange}
            />
          </div>
        {/* end input price */}

        {/* room size */}
          <div className='form-group'>
            <label htmlFor='size'>Room Size</label>
            <div className='size-inputs'>
              <input
                name='minSize'
                id='size'
                className='size-input'
                type='number'
                value={minSize}
                onChange={handleChange}
              />
              <input
                name='maxSize'
                id='size'
                className='size-input'
                type='number'
                value={maxSize}
                onChange={handleChange}
              />
            </div>
          </div>
        {/* end room size */}

        {/* extras */}
          <div className='form-group'>
            <div className='single-extra'>
              <input
                type='checkbox'
                name='breakfast'
                id='breakfast'
                onChange={handleChange}
                checked={breakfast}
              />
              <label htmlFor='breakfast'>breakfast</label>
            </div>
            <div className='single-extra'>
              <input
                type='checkbox'
                name='pets'
                id='pets'
                onChange={handleChange}
                checked={pets}
              />
              <label htmlFor='pets'>pets</label>
            </div>
          </div>
        {/* end extras */}
      </form>
    </section>
  );
};

export default memo(RoomFilter);