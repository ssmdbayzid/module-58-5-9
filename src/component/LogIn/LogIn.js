import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './LogIn.css'

const LogIn = () => {

    const {signInWithEmailAndPassword} = useFirebase();

    // Sign In with Google using Google

    const auth = getAuth(app)
    const [signInWithGoogle, error] = useSignInWithGoogle(auth)

    const [email, setEmail] = useState();

    const [password, setPassword] = useState();

    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    //*********Handle Email */
    const handlePassword = e =>{
        setPassword(e.target.value);
    }


    const handleSubmitForm = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form'>
           <h1>Log In</h1> 
        <form onSubmit={handleSubmitForm}>
            <input onBlur={handleEmail} type="text" placeholder='your email'/>
            <br />
            <input onBlur={handlePassword} type="password"  placeholder='your password' />
            <br />
            <p>{error && error.message}</p>
            <button type='submit'> Log In</button>
            <br />
            <br />
        </form>
        <button onClick={() => signInWithGoogle()}>Google Sign In</button>
        </div>
    );
};

export default LogIn;