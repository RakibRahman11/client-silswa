import { Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Checkout = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [details, setDetails] = useState([])
    const { register, handleSubmit, reset } = useForm();

    const find = details?.find(item => item._id === id)
    const price = parseInt(find?.offerPrice)
    const vat = parseInt(price * 0.2)
    const subtotal = parseInt(price + vat)
    const info = [find, subtotal]


    const onSubmit = (data) => {
        const userEmail = user?.email
        const date = new Date()
        const information = { ...data, date, userEmail, info }
        axios.post('https://server-silswa.onrender.com/checkout', information)
            .then(res => {
                console.log(res)
                alert('sure to add?');
                reset();
            })
    };


    useEffect(() => {
        fetch('https://server-silswa.onrender.com/courses')
            .then(response => response?.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div style={{ backgroundColor: '#eff4ff' }}>
            <Navbar></Navbar>
            <Link to={'/dashboard'}>
                <Button variant="contained" sx={{ fontSize: 14, backgroundColor: '#085078', color: 'white', textAlign: 'center', margin: 5 }}>Go to the Dashboard</Button>
            </Link>
            <div sx={{ marginTop: 5, backgroundColor: 'white', padding: 2, borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ marginX: 'auto', color: '#085078', textAlign: 'center', fontWeight: 700, padding: 5 }}>
                    Checkout
                </Typography>
                <Container sx={{ backgroundColor: 'white', width: '40%', padding: '5px' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 3 }} gutterBottom component="div">
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

                        <Button type="submit" variant="outlined" sx={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#085078', border: '0px', color: 'white' }}>Book the Appointment</Button>
                    </form>
                </Container>
                <br />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;