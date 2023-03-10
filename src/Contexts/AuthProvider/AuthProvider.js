import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =() =>{
        return signOut(auth);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {createUser,signIn,user,logOut,googleSignIn,loading}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider