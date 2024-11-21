import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from  'firebase/auth'
import { createContext } from 'react';
import app from '../../Firebase/firebaseConfig'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth (app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // Goggle Login 
    const ProviderLogin = (Provider) =>{
        setLoading(true);
        return signInWithPopup (auth, Provider);
    }

        // Email Password Login 
    const createUser =(email,password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth , email, password);
    }

    // signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            // console.log('User Inside State change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo ={ user , loading,ProviderLogin , logOut ,createUser,signIn}
    return (
       
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
     
    );
};

export default AuthProvider;