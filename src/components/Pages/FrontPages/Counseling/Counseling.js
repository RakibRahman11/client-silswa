import { Grid, Typography } from '@mui/material';
import React from 'react';
import appointment from '../../../../Images/appointment.png'

const Counseling = () => {
    return (
        <div style={{ backgroundColor: '#4285f4', margin: '80px 0px', textAlign:'left', color:'white', padding:'5%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">
                        Book an appointment today to get free counseling from our experts
                    </Typography>
                    <Typography variant="body1">
                        Fill out the form to get directions or career counseling related to academic and admission studies.
                    </Typography>
                    <img src={appointment} style={{width:'80%'}} alt='' />
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
            {/* #4285f4 */}
        </div>
    );
};

export default Counseling;