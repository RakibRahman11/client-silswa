import { Grid, Typography } from '@mui/material';
import React from 'react';
import bannerNiru from '../../../../Images/banner-niru.png'

const button = {
    textAlign: 'justify',
    fontWeight: 400,
    border: '4px solid #F6A113',
    borderRadius: '8px',
    display: 'inline',
    padding: '5px 15px'
}

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#3768AF', marginTop: '15px' }}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={7} sx={{ margin: 'auto', marginY: '10%', color: 'white' }}>
                        <Typography variant="h3" sx={{ textAlign: 'left', marginX: '25%', fontWeight: 700 }}>
                            Learn from <p style={{ color: '#F6A113', display: 'inline' }}>the best instructors of the country</p>
                        </Typography>
                        <br />
                        <br />
                        <Typography style={button} variant="h5" sx={{ backgroundColor: '#F6A113', marginLeft: '25%' }}>
                            Join for free
                        </Typography>
                        <Typography style={button} variant="h5" sx={{ marginLeft: '10px' }}>
                            Courses
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={5} sx={{ paddingRight: '5%' }}>
                        <img src={bannerNiru} style={{ width: '100%', height: '100%' }} alt='' />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Banner;