import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'


const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth);

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
                <button onClick={() => signOut(auth)} className='btn'>Log Out</button>
                :
                <Link to="/log-in">Log In</Link>

                }
            </nav>
    );
};

export default Header;