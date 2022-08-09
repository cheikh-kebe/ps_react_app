import React from 'react'

export const House = ({ house }) => {
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
        </div>
      </div>
    </div>
  )
}
