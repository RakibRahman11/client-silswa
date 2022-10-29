import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import icon from '../../../../Images/best-instructor.png'

const paperUseful = {
    borderRadius: '15px',
    maxWidth: 280,
    padding: '3px',
    border: '2px solid green',
    backgroundColor: '#F7F9F9',
    margin: '10px auto'
}
const typoUseful = {
    textAlign: 'center',
    color: 'green'
}
const gridUse = {
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
}

const Useful = () => {
    return (
        <div>
            <Typography variant="h4" sx={{ width: '350px', margin: '50px auto', color: '#3768AF', textAlign: 'center', fontWeight: 700 }}>
                Why use UniCourse?
            </Typography>
            <Grid container style={gridUse}>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%' }} src={icon} />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            High Quality Content
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            Unicourse provides high quality contents made by the best instructors of the country
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%' }} src={icon} />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            High Quality Content
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            Unicourse provides high quality contents made by the best instructors of the country
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%' }} src={icon} />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            High Quality Content
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            Unicourse provides high quality contents made by the best instructors of the country
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%' }} src={icon} />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            High Quality Content
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            Unicourse provides high quality contents made by the best instructors of the country
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Useful;