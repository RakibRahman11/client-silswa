import React from 'react';
import { Grid, Typography } from '@mui/material';

const gridFeature = {
    border: '3px solid black',
    borderRadius: '15px',
    margin: '5px auto'
}

const Features = () => {
    return (
        <div>
            <Typography sx={{ margin: '50px auto', textAlign: 'center', fontWeight: 700, color: '#3768AF' }} variant="h3" >
                Featured on
            </Typography>
            <Grid container sx={{ direction: "row", justifyContent: 'center', alignItems: "center" }}>
                <Grid style={gridFeature} xs={10} sm={6} md={2} >
                    <Typography variant="h4" sx={{ textAlign: 'center', marginY: '20px' }} >
                        Dhaka Post
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginX: '40px' }}>
                        UniCourse - an online educational site for university students. It establish in 2022. With the very short time, it grows very fast for the dedication of the members.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginY: '20px' }}>
                        16 October, 2022
                    </Typography>
                </Grid>
                <Grid style={gridFeature} xs={10} sm={6} md={2} >
                    <Typography variant="h4" sx={{ textAlign: 'center', marginY: '20px' }} >
                        Dhaka Post
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginX: '40px' }}>
                        UniCourse - an online educational site for university students. It establish in 2022. With the very short time, it grows very fast for the dedication of the members.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginY: '20px' }}>
                        16 October, 2022
                    </Typography>
                </Grid>
                <Grid style={gridFeature} xs={10} sm={6} md={2} >
                    <Typography variant="h4" sx={{ textAlign: 'center', marginY: '20px' }} >
                        Dhaka Post
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginX: '40px' }}>
                        UniCourse - an online educational site for university students. It establish in 2022. With the very short time, it grows very fast for the dedication of the members.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginY: '20px' }}>
                        16 October, 2022
                    </Typography>
                </Grid>
                <Grid style={gridFeature} xs={10} sm={6} md={2} >
                    <Typography variant="h4" sx={{ textAlign: 'center', marginY: '20px' }} >
                        Dhaka Post
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginX: '40px' }}>
                        UniCourse - an online educational site for university students. It establish in 2022. With the very short time, it grows very fast for the dedication of the members.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', marginY: '20px' }}>
                        16 October, 2022
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Features;