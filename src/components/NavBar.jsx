import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {

    const {isAuth, email, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(isAuth);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            <div className="user">
                {isAuth ? <><p>{email}</p><button
                    type="button"
                    onClick={() => logout()}
                >
                    Uitloggen
                </button></> :
                <>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                </>}
            </div>
        </nav>
    )
        ;
}

export default NavBar;