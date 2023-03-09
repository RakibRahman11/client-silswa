import React, { useEffect, useState } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router";
import Navbar from "../../Navbar/Navbar";
import CheckoutForm from "../Checkout/CheckoutForm";

const stripePromise = loadStripe('pk_test_51JvxqtE9xSZ5o625k1oLvSmlf6jeHC5idhqn6QcAwmYkj23FihdhPvBNCdYcP6EhZzef4VctlBJisK3T14I7tPdp00Dz5bZA7N')

const Payment = () => {
    const [payDetails, setPayDetails] = useState({})
    const { id } = useParams()


    useEffect(() => {
        fetch(`https://server-silswa.onrender.com/checkout/${id}`)
            .then(response => response.json())
            .then(data => setPayDetails(data))
    }, [id])

    return (
        <div>
            <Navbar></Navbar>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;