import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import React, { useState } from 'react'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUp() {
    const [formFields, setformFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }
  
        try{
            let response = await createAuthUserWithEmailAndPassword(email, password);
            let {user} = response;
            console.log(user);
            user.displayName = displayName;
            const userDocRef = await createUserDocumentFromAuth(user);
            console.log(userDocRef)

        }catch(error){
            if(error.code === "auth/email-already-in-use")
                alert("User creation encountered an error: " + error.message);
            else
                console.log("User creation encountered an error: ", error.message)
        }
    }

    const handleChange = (event) => {
        let {name, value} = event.target;

        let newFormField = {...formFields};
        newFormField[name] = value;

        setformFields(newFormField);
    }

    return (
        <div className='sign-up'>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <FormInput 
                    name='displayName'
                    label='Display Name'
                    type='text'
                    value={displayName}
                    required
                    onChange={(e) => handleChange(e)}
                />

                <FormInput 
                    name='email'
                    label='Email'
                    type='email'
                    value={email}
                    required
                    onChange={(e) => handleChange(e)}
                />

                <FormInput 
                    name='password'
                    label='Password'
                    type='password'
                    value={password}
                    required
                    onChange={(e) => handleChange(e)}
                />

                <FormInput 
                    name='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    value={confirmPassword}
                    required
                    onChange={(e) => handleChange(e)}
                />

                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp