import React, { Component } from 'react';
import { Link } from "react-router-dom";
import defaultBcg from '../images/room-1.jpeg';
import StyledHero from '../Components/StyledHero';
import Banner from "../Components/Banner";
import { RoomContext } from "../Context";

class SingleRoom extends Component {
  constructor(props){
    super(props);    
    this.state = {
      slug: this.props.match.params.name,
      defaultBcg
    };
  };
  static contextType = RoomContext;
  render(){
    const { defaultBcg } = this.state.defaultBcg;
    let { getRoom } = this.context;
    let roomInfo = getRoom(this.state.slug);
    
    
    if(!roomInfo) {
      return (
        <div className='error'>
          <h3>no room could be found</h3>
          <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
        </div>
      )
    };

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = roomInfo;

    const [mainImg, ...defaultImg] = images;
    return(
      <>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((image, index) => (
              <img key={index} src={image} alt={name} />
            ))}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                Max capacity : {
                  capacity > 1 ? `${capacity} people` : `${capacity} person`
                } 
              </h6>

              <h6>
                {
                  pets > 0 ? 'Pets allowed' : 'Pets not allowed'
                }
              </h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((extra, index) => (
              <li key={index}>
                {extra}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
};

export default SingleRoom;
