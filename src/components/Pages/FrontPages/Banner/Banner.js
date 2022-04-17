import { Grid, Typography } from '@mui/material';
import React from 'react';
import bannerNiru from '../../../../Images/banner-niru.png'
import bestInstructor from '../../../../Images/best-instructor.png'
import presentation from '../../../../Images/presentation.png'
import quiz from '../../../../Images/test-quiz.png'
import support from '../../../../Images/message.png'

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#068f74', marginTop: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} sx={{ margin: 'auto', marginY: '10%', color: 'white' }}>
                        <Typography variant="h3" sx={{ textAlign: 'justify', marginX: '20%', fontWeight: 700 }}>
                            Study at home, online.
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'justify', marginX: '20%', fontWeight: 400 }}>
                            Now it is easier to study! Enroll in any academic and skill development course of your choice and join Silswa, one of the largest online learning platforms in the country.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ paddingRight: '5%' }}>
                        <img src={bannerNiru} style={{ width: '100%', height: '100%' }} alt='' />
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container sx={{ backgroundColor: '#e74c12', width: '100%', color: 'black', paddingY: 2, paddingLeft:'10%' }}>
                    <Grid item xs={6} md={3}>
                        <img src={bestInstructor} style={{ width: '15%' }} alt='' />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Best Instructor
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={presentation} style={{ width: '15%' }} alt='' />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Simple Presentation
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={quiz} style={{ width: '15%' }} alt='' />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Quiz and Tests
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={support} style={{ width: '15%' }} alt='' />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Mentor Support
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Banner;