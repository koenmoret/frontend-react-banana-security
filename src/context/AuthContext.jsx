import React, {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext({
    Naam : "koen"
});


//const AuthContextProvider = ({childeren}) => {
    function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();
    function login() {
        isAuth(true);
        navigate('/profile');
    }

    function logout() {
        isAuth(false);
        navigate('/');
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;