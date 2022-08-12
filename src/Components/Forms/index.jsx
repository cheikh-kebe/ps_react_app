import React, { useState } from 'react'

export const Forms = ({house}) => {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: ""
  })
  const [error, setError] = useState(true)

  //on change we set all data from contactInfo by pointing the input id with the value
  const onChange = (e) => {
    setContactInfo({...contactInfo, [e.target.id]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(contactInfo);
    setError(false)
  }
  return (
    <form className='mt-2'>
      <div className="form-group">
        <h3>Inquery</h3>
      <label htmlFor="name">
        Name
      </label>
          <input 
            type="text"
            className='form-control'
            id='name'
            value={contactInfo.name}
            onChange={onChange}
            />
        <label htmlFor="email">
          Email
        </label>
          <input 
            type="text"
            className='form-control'
            id='email'
            value={contactInfo.email}
            onChange={onChange}
            />
        <label htmlFor="remarks">
          Remarks
        </label>
          <input 
            type="text"
            className='form-control'
            id='remarks'
            value={contactInfo.remarks}
            onChange={onChange}
            />
        <button
          className='btn btn-primary mt-2' 
          type="submit" 
          onClick={onSubmit}
          disabled={!contactInfo.name || !contactInfo.email}
          >  
          Send</button>
          {!error && <div><h3> Inquery sent!</h3> </div>}
      </div>
    </form>
  )
}
