import React from 'react';
import { useParams } from 'react-router';
import { House } from '.';


export const HouseQueried = ({ allHouses }) => {
  //useParams the id of the house 
  const { id } = useParams();
  //define house from allHouses where house.id === id from useParams
  const house = allHouses.find((h) => h.id === parseInt(id));
  
  return (
    //ternary rendering if there's a house render House component else render error message
    <>
      {house ?
        (
          <House house={house} />
        )
        :
        <div>
          <h3>House not Found</h3>
        </div>
      }
    </>
  )
}
