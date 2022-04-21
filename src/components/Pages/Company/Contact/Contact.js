import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#eff4ff' }}>
            <Navbar></Navbar>
            <div sx={{ marginTop: 5, backgroundColor: 'white', padding: 2, borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ marginX: 'auto', color: '#085078', textAlign: 'center', fontWeight: 700, padding: 5 }}>
                    Contact us
                </Typography>

                <div style={{ backgroundColor: 'white' }}>
                    <Grid container spacing={1} >
                        <Grid xs={12} md={6} sx={{ padding: 10 }}>
                            <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700, marginBottom: 5 }} gutterBottom component="div">
                                Keep In Touch With Us
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#085078', fontWeight: 700, marginBottom: 2 }} gutterBottom component="div">
                                Address
                            </Typography>
                            <Typography variant="caption" sx={{ marginBottom: 3 }} gutterBottom component="div">
                                164, Poribag, Sonargaon Road, Hatirpool, Dhanmondi, Dhaka - 1205
                            </Typography>
                            < hr />
                            <Typography variant="h6" sx={{ color: '#085078', fontWeight: 700, marginY: 2 }} gutterBottom component="div">
                                Phone
                            </Typography>
                            <Typography variant="caption" sx={{ marginBottom: 3 }} gutterBottom component="div">
                                Mobile: <span style={{ fontWeight: 700 }}>(+88) - 01933 - 895 - 961</span>
                                <br />
                                Phone: <span style={{ fontWeight: 700 }}>(+88) - 019639 - 189159</span>
                                <br />
                                Hotline: <span style={{ fontWeight: 700 }}>1800 - 1102</span>
                            </Typography>
                            < hr />
                            <Typography variant="h6" sx={{ color: '#085078', fontWeight: 700, marginY: 2 }} gutterBottom component="div">
                                Email
                            </Typography>
                            <Typography variant="caption" gutterBottom component="div">
                                support@silswa.com
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Container>
                                <Typography variant="caption">
                                    164, Poribag, Sonargaon Road, Hatirpool, Dhanmondi, Dhaka - 1205
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;