import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const ContextProvider = createContext()
const googleProvider = new GoogleAuthProvider()

const Context = ({children}) => {


    const googleLogIn = ()=> {
        return signInWithPopup(auth, googleProvider);
    }
    const signInEmailPass = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const createUserEmailPassword = (email, password)=> {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const authValue = {
        createUserEmailPassword,
        googleLogIn,
        signInEmailPass,
    }

    return (
        <ContextProvider.Provider value={authValue}>
           {children} 
        </ContextProvider.Provider>
    );
};

Context.propTypes = {
    children : PropTypes.node
}
export default Context;