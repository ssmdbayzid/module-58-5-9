import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './LogIn.css'

const LogIn = () => {

    const {signInWithGoogle, signInWithEmailAndPassword} = useFirebase();

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
            <button type='submit'> Log In</button>
            <br />
            <br />
        </form>
        <button onClick={signInWithGoogle}>Google Sign In</button>
        </div>
    );
};

export default LogIn;