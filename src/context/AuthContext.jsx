import React, {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext({});


const AuthContextProvider = ({children}) => {

    const [isAuth, toggleIsAuth] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function signup(username, email, password) {
        toggleIsAuth(true);
        navigate('/profile');
    }

    function login(email, password) {
        toggleIsAuth(true);
        navigate('/profile');
    }

    function logout() {
        toggleIsAuth(false);
        navigate('/');
    }

    const data = {
        isAuth,
        signup,
        login,
        logout,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;