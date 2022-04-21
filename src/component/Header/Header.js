import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handleSignout} = useFirebase()


    return (
            <nav>         
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
                <span style={{color : 'brown', fontWeight: '500', marginLeft: '20px'}}>
                    {
                        user?.displayName && user.displayName
                    }
                </span>
                { user?.uid
                ?
                <button onClick={handleSignout} className='btn'>Log Out</button>
                :
                <button className='log-btn' href='/log-in'>Log In</button>

                }
            </nav>
    );
};

export default Header;