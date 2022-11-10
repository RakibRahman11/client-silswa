import { Grid, Typography } from '@mui/material';
import React from 'react';
import bannerNiru from '../../../../Images/banner-niru.png'

const button = {
    textAlign: 'justify',
    fontWeight: 400,
    border: '4px solid #F6A113',
    borderRadius: '8px',
    display: 'inline',
    padding: '5px 15px',
    width: '100%'
}

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#3768AF', marginTop: '15px' }}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={7} sx={{ marginY: '10%', color: 'white' }}>
                        <Typography variant="h3" sx={{ textAlign: 'left', marginX: '18%', fontWeight: 700 }}>
                            Learn from <p style={{ color: '#F6A113', display: 'inline' }}>the best instructors of the country</p>
                        </Typography>
                        <br />
                        <br />
                        <div style={{ paddingLeft: '18%' }}>
                            <Typography style={button} variant="h5" sx={{ backgroundColor: '#F6A113', fontSize: { xs: 20, md: 30 } }}>
                                Join for free
                            </Typography>
                            <Typography style={button} variant="h5" sx={{ marginLeft: '10px', fontSize: { xs: 20, md: 30 } }}>
                                Courses
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={5} sx={{ paddingX: { xs: '5%', md: '1%' } }}>
                        <img src={bannerNiru} style={{ width: '100%', height: '100%' }} alt='Banner' />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Banner;