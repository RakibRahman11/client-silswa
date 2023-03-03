import { Container } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const CheckoutForm = ({pay}) => {
    const {id} = useParams()
    const price = pay?.info[1]
    const courseDetails = pay?.info[0]
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch("https://server-silswa.onrender.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error);
            setSuccess('')
        } else {
            setError(paymentMethod);
        }

        // STRIPE payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('Your payment done successfully')
            const payment = {
                amount : paymentIntent.amount,
                created : paymentIntent.created,
                last4 : paymentMethod.card.last4,
                transaction : paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://server-silswa.onrender.com/checkout/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)

            })
                .then(response => response.json())
                .then(data => console.log(data))
        }

    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                    <button type="submit" disabled={!stripe || success}>
                        Pay {pay.info[1]}
                    </button>
            </form>
            {
                error && <p style={{ color: 'red' }}>{error.message}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </Container>
    );
};

export default CheckoutForm;