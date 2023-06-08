import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const [user, setUser]  = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo  = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;