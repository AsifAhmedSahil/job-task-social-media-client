import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginimg from "../../assets/log.jpg";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset();
      navigate("/")
    })
    .catch(error => console.error(error))
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
                  Login now!
                </h1>
              
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
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-orange-500 text-white border-0"
                  type="submit"
                  value="login"
                />
              </div>
          </form>
          <p className="text-center font-bold">New Here? <Link to={"/signup"} className="text-orange-500 "> Sign Up</Link></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login