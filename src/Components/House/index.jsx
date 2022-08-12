import React, { useState }from 'react'
//images
import emailIcon from '../../assets/images/Email.png';
import { Forms } from '../Forms';

export const House = ({ house }) => {
  const [inqueryShown, setInqueryShown] = useState(false);

  const toggleInquery = () => {
    setInqueryShown(!inqueryShown)
  }
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{house.country}</h5>
      </div>
      <div className="row">
        <h5 className="col-md-12">{house.address}</h5>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={house.photo} alt="House" />
        </div>
        <div className="col-md-5">
          <p className="price">{house.price}€</p>
          <p>{house.description}</p>
          <img 
            src={emailIcon} alt="Email icon" 
            height={50}
            onClick={toggleInquery}
            />
            {inqueryShown && <Forms house={house}/>}
        </div>
      </div>
    </div>
  )
}
