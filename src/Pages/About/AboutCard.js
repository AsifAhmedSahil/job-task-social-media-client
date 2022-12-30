import React from 'react'
// import AboutModal from './AboutModal'

const AboutCard = ({info ,setAboutUser}) => {
    const {name,email,university,address} = info
  return (
    <div className="card w-[32rem] bg-base-100 shadow-xl mx-auto my-[200px]">
      <h1 className='text-3xl text-center font-bold text-red-600'>User Information</h1>
  <div className="card-body ">
    <h2 className="card-title border m-4 p-2 ">Name: {name}</h2>
    
    <p className="card-title border m-4 p-2 ">Address: {address}</p>
    <p className="card-title border m-4 p-2 ">Email: {email}</p>
    <p className="card-title border m-4 p-2 ">University: {university}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Edit</button> */}
      <label onClick={() => setAboutUser(info)} htmlFor="about-modal" className="btn btn-primary">Edit</label>
      {/* <AboutModal info={info}/> */}
    </div>
  </div>
</div>
  )
}

export default AboutCard