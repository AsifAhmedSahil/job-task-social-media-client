import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <h1>Loading...</h1>
    }
    if(user && user.uid){
        return children;
    }
  return <Navigate to="/login"></Navigate>
}

export default PrivateRoute