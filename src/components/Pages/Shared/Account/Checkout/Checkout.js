import { Button, Container, Grid, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [details, setDetails] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const find = details?.find(item => item._id === id)
    const price = parseInt(find?.offerPrice)
    const vat = parseInt(price * 0.2)
    const subtotal = parseInt(price + vat)
    console.log(find)
    const onSubmit = (data) => {
        const userEmail = user?.email
        const date = new Date()
        const information = { ...data, date, userEmail }
        axios.post('https://hidden-earth-67301.herokuapp.com/checkout', information)
            .then(res => {
                console.log(res)
                alert('sure to add?');
                reset();
            })
    };
    const stripePromise = loadStripe('pk_test_51JvxqtE9xSZ5o625k1oLvSmlf6jeHC5idhqn6QcAwmYkj23FihdhPvBNCdYcP6EhZzef4VctlBJisK3T14I7tPdp00Dz5bZA7N');
    useEffect(() => {
        fetch('https://hidden-earth-67301.herokuapp.com/courses')
            .then(response => response?.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div style={{ backgroundColor: '#eff4ff' }}>
            <Navbar></Navbar>
            <div sx={{ marginTop: 5, backgroundColor: 'white', padding: 2, borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ marginX: 'auto', color: '#085078', textAlign: 'center', fontWeight: 700, padding: 5 }}>
                    Checkout
                </Typography>
                <Container sx={{ backgroundColor: 'white' }}>
                    <Grid container spacing={2} sx={{ padding: 5 }}>
                        <Grid xs={8} md={6}>
                            <Typography variant="body" sx={{ fontWeight: 700, marginBottom: 3 }} gutterBottom component="div">
                                Billing details
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                                <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Your Name"  {...register("name")} required />
                                <br /><br />

                                <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Contact Number" type="tel"  {...register("contact")} required />
                                <br /><br />

                                <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Email Address"  {...register("email")} required />
                                <br /><br />

                                <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Institution Name"  {...register("institute name")} required />
                                <br /><br />

                                <Typography variant="body" sx={{ fontWeight: 700, marginY: 3 }} gutterBottom component="div">
                                    Payment Information
                                </Typography>

                                <br /><br />

                                <Button type="submit" variant="outlined" sx={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#085078', border: '0px', color: 'white' }}>Book the Appointment</Button>
                            </form>
                        </Grid>
                        <Grid xs={4} md={6}>
                            {
                                subtotal && <Elements stripe={stripePromise}>
                                    <CheckoutForm subtotal={subtotal} find={find} />
                                </Elements>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;