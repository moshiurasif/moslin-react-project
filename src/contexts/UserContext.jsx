import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import { app } from '../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = email => sendPasswordResetEmail(auth, email);

    // const authUser = {createUser, loginUser}
    return (
        <AuthContext.Provider value={{createUser, loginUser, resetPassword}}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;