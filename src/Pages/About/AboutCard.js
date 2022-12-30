import React from 'react'
import AboutModal from './AboutModal'

const AboutCard = ({info}) => {
    const {name,email,university,address} = info
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-[200px]">
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Address: {address}</p>
    <p>Email: {email}</p>
    <p>University: {university}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Edit</button> */}
      <label htmlFor="about-modal" className="btn btn-primary">Edit</label>
      <AboutModal info={info}/>
    </div>
  </div>
</div>
  )
}

export default AboutCard