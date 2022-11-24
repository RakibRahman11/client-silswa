import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import icon1 from '../../../../Images/useful/highQualityContent.png'
import icon2 from '../../../../Images/useful/ensureLearning.png'
import icon3 from '../../../../Images/useful/timeSaving.png'
import icon4 from '../../../../Images/useful/lowCost.png'

const paperUseful = {
    borderRadius: '15px',
    maxWidth: 280,
    height: '380px',
    padding: '3px',
    border: '2px solid #44ab97',
    backgroundColor: '#f3f5f9',
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
            <Typography variant="h4" sx={{ width: '350px', margin: '100px auto 20px auto', color: '#3768AF', textAlign: 'center', fontWeight: 700 }}>
                Why use UniCourse?
            </Typography>
            <Grid container style={gridUse}>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%', width:'50%', backgroundColor:'#65c4ea', borderRadius:'50%', padding:'5px' }} src={icon1} alt='High Quality' />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            High Quality Content
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            UniCourse provides high quality contents made by the best instructors of the country
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%', width:'50%', backgroundColor:'#fcb527', borderRadius:'50%', padding:'5px' }} src={icon2} alt='High Quality' />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            Ensure Learning
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            You will get quizzes for every lessons and you must pass this to get access of next lessons.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%', width:'50%', backgroundColor:'#ea4d8c', borderRadius:'50%', padding:5 }} src={icon3} alt='High Quality' />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            Time Saving
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            You can start learning from anywhere, anytime
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Paper style={paperUseful} elevation={3} >
                        <img style={{ marginTop: '30px', marginLeft: '25%', width:'50%', backgroundColor:'#65c4ea', borderRadius:'50%', padding:'5px' }} src={icon4} alt='High Quality' />
                        <Typography style={typoUseful} sx={{ marginTop: '35px', fontWeight: 700 }} variant="body1" gutterBottom>
                            Low Cost
                        </Typography>
                        <Typography style={typoUseful} sx={{ marginBottom: '35px', paddingX: '10%' }} variant="body1" >
                            Best contents in a comparatively low price
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Useful;