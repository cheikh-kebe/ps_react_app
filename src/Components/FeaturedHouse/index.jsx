import React from 'react';
//Component
import { House } from '../House';

export const FeaturedHouse = ({house}) => {
  if(house)
  return (
    <div>
      <div className="row featuredHouse">
        <h3 className="col-md-12">Featured House</h3>
      </div>
      <House house={house} />
    </div>
  )
}
