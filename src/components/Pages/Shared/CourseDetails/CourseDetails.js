import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const CourseDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const find = details?.find(item => item._id === id)

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response?.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Container sx={{ marginY: 5 }}>
                <Grid container spacing={5}>
                    <Grid xs={12} md={8}>
                        <Typography variant="h5" sx={{ fontWeight: 700, marginY: 5 }} >
                            {find?.title}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 3 }} >
                            {find?.intro}
                        </Typography>
                        <Typography variant="body1" >
                            Facilities:
                        </Typography>
                        <ul>
                            {
                                find?.facilities.map(facility =>
                                    <li>{facility}</li>)
                            }
                        </ul>
                        <Typography variant="body1" sx={{ marginTop: 3 }}>
                            Class schedule:
                        </Typography>
                        <ol>
                            {
                                find?.classSchedule.map(schedule =>
                                    <li>{schedule}</li>)
                            }
                        </ol>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                COURSE PREVIEW
                            </Typography>
                            <img src={find?.thumbnail} style={{ width: '100%', marginTop: '12px' }} alt="" />
                            <Typography variant="body2" sx={{ textAlign: 'center', marginY: 3 }}>
                                Buy the course NOW!
                            </Typography>
                            <hr />
                            <Typography variant="h4" sx={{ textAlign: 'center', marginY: 3, fontWeight: 700 }}>
                                <del>{find?.price} BDT</del>
                            </Typography>
                            <Typography variant="h4" sx={{ textAlign: 'center', marginY: 3, fontWeight: 700 }}>
                                {find?.offerPrice} BDT
                            </Typography>
                            <Link to={`/buy/${id}`} style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" sx={{ width: '60%', padding: '10px 5px', fontSize: 14, backgroundColor: '#085078', color: 'white', marginLeft: '20%', marginBottom: 2 }}>Enroll in the course</Button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;