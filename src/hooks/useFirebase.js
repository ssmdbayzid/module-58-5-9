import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";  
import app from "../firebase.init"                

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState('');



//.......... Absorbed currently signed-in user

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })

    }, [])

//...........SignIn With Google.............
const signInWithGoogle = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
        setUser(result.user);
        console.log(result.user);
    })
    .catch(error => {
        setError(error.message)
    })
}
//...........SignIn With Email And Password.............

const signInWithEmailAndPassword = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result.user)
    })
    .catch(error => {
        setError(error.message)
    })
}



    return {
        user,
        error, 
        signInWithGoogle, 
        signInWithEmailAndPassword}

}

export default useFirebase;