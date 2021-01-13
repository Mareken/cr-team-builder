import React, { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';
import firebase from 'firebase';
import { auth } from '../firebase';
import { AuthData } from '../utils/types';
 
const AuthContext = createContext<AuthData>({} as AuthData);

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ currentUser, setCurrentUser ] = useState<firebase.User | null>();
  const [ loading, setLoading ] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const signout = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, signout }}>
      { !loading && children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth must be used within a AuthProvider');

  return context;
}

export { AuthProvider, useAuth as default };