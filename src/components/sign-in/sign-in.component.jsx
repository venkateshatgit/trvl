import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useState } from 'react';


import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils';


function SignIn() {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
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
                
                <div>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={logGoogleUser}>Sign in with Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn