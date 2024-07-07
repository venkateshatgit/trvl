import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useState, useEffect } from 'react';


import { 
    auth,
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword
 } from '../../utils/firebase.utils';
import { getRedirectResult } from 'firebase/auth';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const logGoogleUser = async () => {
        try{
            const {user} = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user);
            console.log(userDocRef)
        }catch(error){
            console.log(error.message);
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(email, password);
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
        setEmail('');
        setPassword('');
    }

    return (
        <div className='sign-in'>
            <h1 className='title'>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    label='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}  
                />

                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    required
                />
                
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton buttonType='google-sign-in' onClick={logGoogleUser}>Sign in with Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn