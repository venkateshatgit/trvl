import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './payment-form.style.scss';
import React from 'react'
import CustomButton from '../custom-button/custom-button.component';

function PaymentForm() {   

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !elements)
            return;
    }

    return (
        <div className='payment-form-container'>
            <div className='form-container'>
                <h2>Credit Card Payments:</h2>
                <CardElement/>
                <CustomButton buttonType={'inverted'}>Pay Now</CustomButton>
            </div>
        </div>
    )
}

export default PaymentForm