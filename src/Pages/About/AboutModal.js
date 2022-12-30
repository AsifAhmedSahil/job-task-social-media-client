import React, { useState } from "react";

const AboutModal = ({info}) => {
    const {name,email,university,address} = info

    const [userdata,setUserData] = useState([])

    const handleUpdateUser = event =>{
        event.preventDefault();
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
          <input type="text" value={email} disabled placeholder="Type here" className="input w-full " />
          <input type="text" value={name} placeholder="Type here" className="input w-full " />
          <input type="text" value={university} placeholder="Type here" className="input w-full " />
          <input type="text" value={address} placeholder="Type here" className="input w-full " />
          <input type="submit" className="btn btn-accent bg-green-500 w-full " value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
