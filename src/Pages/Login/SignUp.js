import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import loginimg from "../../assets/log.jpg";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser,googleSignIn} = useContext(AuthContext)
  // const [createdUserEmail,setCreatedUserEmail] = useState("")
  const handleGoogleSignin = () =>{
    googleSignIn()
    .then(result =>{
      const user =result.user;
      console.log(user);
    })
    .catch(error => console.error(error));

  }
  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target
    const email = form.email.value
    const name = form.name.value
    const university = form.university.value
    const address = form.address.value
    const password = form.password.value
    console.log(email,password,name);
    saveUser(name,email,university,address,password)
    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const saveUser = (name,email,university,address,password) =>{
    const user = {name,email,university,address,password};
    fetch("http://localhost:5000/users",{
      method: 'POST',
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log("saveuser",data);
      // setCreatedUserEmail(email)
      
    })
  }
  return (
    <div>
    <div className="hero w-full min-h-screen">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col  lg:flex-row">
        <div className="text-center  lg:text-left">
          <img src={loginimg} className="w-3/4" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 py-9">
          <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-5xl font-bold text-center my-7 text-orange-500 animate-bounce">
                Please SignUP
              </h1>
            
            <div className="form-control">
              
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control">
              
              <label className="label">
                <span className="label-text">University</span>
              </label>
              <input
                type="text"
                name="university"
                placeholder="University"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-orange-500 text-white border-0"
                type="submit"
                value="signup"
              />
            </div>
          </form>
          <p className="text-center font-bold">Already Sign Up? <Link to={"/login"} className="text-orange-500 "> Login</Link></p>

          <div className="flex flex-col w-[90%] mx-auto border-opacity-50">

          <div className="divider">OR</div>
  
</div>
<button onClick={handleGoogleSignin} className="btn btn-success w-[80%] mx-auto">Google Sign In</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp