import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import CheckoutForm from '../Checkout/CheckoutForm';

const Payment = () => {
    const [pay, setPay] = useState({})
    const { id } = useParams()

    const stripePromise = loadStripe('pk_test_51JvxqtE9xSZ5o625k1oLvSmlf6jeHC5idhqn6QcAwmYkj23FihdhPvBNCdYcP6EhZzef4VctlBJisK3T14I7tPdp00Dz5bZA7N');
    useEffect(() => {
        fetch(`https://server-silswa.onrender.com/checkout/${id}`)
            .then(response => response.json())
            .then(data => setPay(data))
    }, [id])

    return (
        <div>
            <Navbar></Navbar>
            {
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        pay={pay}
                    ></CheckoutForm>
                </Elements>
            }
        </div>
    );
};

export default Payment;