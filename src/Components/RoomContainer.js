import React from "react";
import RoomFilter from './RoomFitler';
import RoomList from './RoomList';
import Loading from './Loading';
import { withRoomConsumer } from '../Context';


function RoomContainer({ context }) {

  const { rooms, sortedRooms, loading } = context;
  if(loading){
    return <Loading />
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList sortedRooms={sortedRooms} />
    </>
  )
};

export default withRoomConsumer(RoomContainer);