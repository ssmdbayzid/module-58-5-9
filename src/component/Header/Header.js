import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user} = useFirebase()


    return (
        <div>
            <nav>         
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
                
                { user?.uid
                ?
                <button>Log Out</button>
                :
                <Link to='/log-in'>Log In</Link>

                }
            </nav>
        </div>
    );
};

export default Header;