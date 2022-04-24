import { Button, Checkbox, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Checkout = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const userEmail = user?.email
        const date = new Date()
        const information = { ...data, date, userEmail }
        axios.post('https://hidden-earth-67301.herokuapp.com/counseling', information)
            .then(res => {
                console.log(res)
                alert('sure to add?');
                reset();
            })
    };
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

                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;