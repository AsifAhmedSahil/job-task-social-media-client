import React, { useState } from "react";
import { toast } from "react-toastify";

const AboutModal = ({aboutUser}) => {
    const {name,email,university,address,_id} = aboutUser


    const [userdata,setUserData] = useState(aboutUser)

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(userdata)
        fetch(`https://server-eight-psi.vercel.app/users/${_id}`,{
            method:"PUT",
            headers:{
              "content-type": "application/json"
            },
            body:JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
          
          if(data.modifiedCount > 0){
            console.log(data);
            event.target.reset();
            toast.success("Update Successsfully!! 🙂 ")
          }
        })
        
    }

    const handleInputChange = event =>{
      const field = event.target.name;
      const value = event.target.value;
      const newData = {...userdata}
      newData[field] = value;
      setUserData(newData);

    }
  return (
    <div>
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" font-bold mb-8 text-center text-2xl">
            User Information
          </h3>
          <form onSubmit={handleUpdateUser} className="grid grid-cols-1 gap-4 mt-8">
          {/* <input  type="email"  disabled placeholder="Type here" className="input w-full " /> */}
           <input onChange={handleInputChange}  type="email" name="email" value={email} disabled placeholder="Type here" className="input w-full " /> 
           <input  onChange={handleInputChange} type="text" name="name" defaultValue={name} placeholder="Type here" className="input w-full " />
          <input  onChange={handleInputChange} type="text" name="university" defaultValue={university} placeholder="Type here" className="input w-full " />
          <input  onChange={handleInputChange} type="text" name="address" defaultValue={address} placeholder="Type here" className="input w-full " />
          <input type="submit" className="btn btn-accent bg-green-500 w-full " value="Update User" /> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
