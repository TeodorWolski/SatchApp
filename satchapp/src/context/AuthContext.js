import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  useEffect(() => {
    const unSubscribe = () =>
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
