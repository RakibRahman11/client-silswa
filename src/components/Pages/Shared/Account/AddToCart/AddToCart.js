import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const AddToCart = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const find = details?.find(item => item._id === id)
    const price = parseInt(find?.offerPrice)
    const vat = parseInt(price * 0.2)
    const subtotal = parseInt(price + vat)
    const course = [find, subtotal]
    console.log(course);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (data?.coupon === 'rakib10') {
            const offer = parseInt(subtotal * 0.1)
            const information = { ...data, offer }
            console.log(information)
            const final = parseInt(subtotal - offer)
        }

    };
    useEffect(() => {
        fetch('https://hidden-earth-67301.herokuapp.com/courses')
            .then(response => response?.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Grid container spacing={2} sx={{ marginTop: 5, backgroundColor: '#f8f8f8', padding: 3 }}>
                    <Grid xs={7} md={7}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            Product
                        </Typography>
                    </Grid>
                    <Grid xs={1} md={1}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            Price
                        </Typography>
                    </Grid>
                    <Grid xs={1} md={1}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            Vat
                        </Typography>
                    </Grid>
                    <Grid xs={1} md={1}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            Subtotal
                        </Typography>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            Action
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginBottom: 5, padding: 3 }}>
                    <Grid xs={7} md={7}>
                        <img src={find?.thumbnail} style={{ width: '20%' }} alt="" />
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }} display="block" gutterBottom>
                            {find?.title}
                        </Typography>
                    </Grid>
                    <Grid xs={1} md={1}>
                        <Typography variant="body" sx={{ fontWeight: 'bold' }}>
                            {find?.offerPrice}
                        </Typography>
                    </Grid>
                    <Grid xs={1} md={1}>
                        <Typography variant="body" sx={{ fontWeight: 'bold' }}>
                            20%
                        </Typography>
                    </Grid>
                    <Grid xs={1} md={1}>
                        <Typography variant="body" sx={{ fontWeight: 'bold' }}>
                            {subtotal}
                        </Typography>

                    </Grid>
                    <Grid xs={2} md={2}>
                        <Typography variant="body" sx={{ fontWeight: 'bold' }}>
                            delete
                        </Typography>
                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                        <Typography variant="body" sx={{ fontWeight: 'bold', marginTop: 5 }} display="block" gutterBottom>
                            Coupon Discount
                        </Typography>
                        <Typography variant="body" display="block" gutterBottom>
                            Enter your coupon code if you have one.
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                            <input style={{ width: '47%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Coupon code"  {...register("coupon")} required />
                            <br /><br />
                            <Button type="submit" variant="outlined" sx={{ width: '30%', padding: '15px 7px', fontSize: 13, backgroundColor: '#085078', border: '0px', color: 'white' }}>Apply coupon</Button>
                        </form>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <Paper elevation={3} sx={{ marginTop: 5, padding: 5, width: '50%' }}>
                            <Typography variant="caption" sx={{ width: '80%', display: 'inline-block' }}>
                                Subtotal
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700 }}>
                                {subtotal}
                            </Typography>
                            <br />
                            <Typography variant="caption" sx={{ width: '80%', display: 'inline-block' }}>
                                Total
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700 }}>
                                {subtotal}
                            </Typography>
                            <Link
                            course={course} to={`/checkout/${id}`}><Button type="submit" variant="outlined" sx={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#085078', border: '0px', color: 'white', marginX: 'auto', marginTop: 5 }}>Checkout</Button></Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AddToCart;