import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import AboutCard from './AboutCard';

const About = () => {
    const {user} = useContext(AuthContext)
    const [about,setAbout] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setAbout(data))
      },[user?.email]);
  return (
    <div>
        {
            about?.map(info => <AboutCard key={info._id} info={info}></AboutCard>)
        }
    </div>
  )
}

export default About