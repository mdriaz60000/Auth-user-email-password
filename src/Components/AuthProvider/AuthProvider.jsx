import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
const [user, setUser] = useState(null)
const [lodding, setLodding]= useState(true)

const createUser = (email, password) => {
// setLodding(true)
 return   createUserWithEmailAndPassword(auth, email, password);
}

const signInUser =(email, password) =>{
    //setLodding(true)
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    //setLodding(true)
 return  signOut(auth);
}

 useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log('ovserving current user inside useEffect to AuthProvider', currentUser)
        //setLodding(false)
    })

    return () =>{
        unSubscribe()
    }

 },[])

const authInfo = {
    user,
    //lodding
     createUser,
     signInUser,
     logOut
    }

    return (
    <AuthContext.Provider value={authInfo}>

        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}