import React, {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext({});


const AuthContextProvider = ({children}) => {

    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();
    function login() {
        toggleIsAuth(true);
        navigate('/profile');
    }

    function logout() {
        toggleIsAuth(false);
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