import React from 'react';
import { useNavigate } from 'react-router';
//context
import { useContext } from 'react';
import { HouseContext } from '../../Context/houseContext';


export const HouseFilter = () => {
  const history = useNavigate()
  const allHouses = useContext(HouseContext)

  const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
  countries.unshift(null)

  const onSearchChange = (e) =>{
    const country = e.target.value;
    history(`/searchresults/${country}`)
  }

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select name="houseFilter" className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
