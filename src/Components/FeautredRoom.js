import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';


const FeaturedRoom = () =>  {

  const context = useContext(RoomContext);

  let {featuredRooms: rooms, loading } = context;
    
  const roomsList = rooms.map((room) => {
    return <Room key={room.id} room={room} />
  })
    
  return(
    <>
    <section className='featured-rooms'>
      <Title title="Features Room" />
      <div className='featured-rooms-center'>
        { loading ? <Loading /> : roomsList }
      </div>
    </section>
    </>
  );
};

export default FeaturedRoom;
